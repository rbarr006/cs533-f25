package main

import (
	"crypto/tls"
	"fmt"
	"net"
	"net/http"
	"os"
	"sort"
	"strings"
	"time"

	"github.com/goccy/go-yaml"
)

var httpOnlyTotalCounter, secureTotalCounter, sameSiteTotalCounter, ssLaxTotalCounter, ssStrictTotalCounter, ssNoneTotalCounter, pathTotalCounter, nonRootPathTotalCounter, rootPathTotalCounter, cookieTotalCounter, maxCookies int
var reportTable string = "| URL | Status Code | Total Cookies | HttpOnly | Secure | SameSite | SameSite Strict | SameSite Lax | SameSite None | Path | Root Path | Non-root Path | Notes |\n|-|-|-|-|-|-|-|-|-|-|-|-|-|\n"

var httpReport string = "# HTTP responses\n "

var cookieTotals []float64

var deadLinks []string
var erroredURLs []string
var ErrorCounter int
var minCookies int = 0

type reportConfig struct {
	ReporterName           string `yaml:"reporterName"`
	ReportTitle            string `yaml:"reportTitle"`
	ReportDescription      string `yaml:"reportDescription"`
	ReportFilename         string `yaml:"reportFilename"`
	ProgramUsageReadmePath string `yaml:"programUsageReadmePath"`
}

func fetchCookies(url string) {
	if _, err := net.LookupHost(url); err != nil {
		fmt.Printf("[%s] Skipping: invalid hostname (%v)\n", url, err)
		deadLinks = append(deadLinks, url)
		return
	}
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{
			InsecureSkipVerify: true,
			MinVersion:         tls.VersionTLS12,
			MaxVersion:         tls.VersionTLS13,
		},
		DisableKeepAlives:   false,
		TLSHandshakeTimeout: 480 * time.Second,
	}
	client := &http.Client{Transport: tr}

	req, err := http.NewRequest(http.MethodHead, "https://"+url, nil)
	req.Header.Set("User-Agent", "Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0")

	if err != nil {
		fmt.Println("Error In Creating Request:", err)
		ErrorCounter++
		erroredURLs = append(erroredURLs, url)
		return
	}

	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error In processing request:", err)
		ErrorCounter++
		erroredURLs = append(erroredURLs, url)
		return
	}
	parseCookies(*resp, url)

	defer resp.Body.Close()
}

func parseCookies(response http.Response, url string) {
	var httpOnlyCounter, secureCounter, sameSiteCounter, ssLaxCounter, ssStrictCounter, ssNoneCounter, pathCounter, nonRootPathCounter, rootPathCounter, cookieCounter int
	responseReport := fmt.Sprintf("## %s\n\n", url)
	responseReport += fmt.Sprintf("```\n%s\n%s\n```\n\n", response.Status, response.Header)
	httpReport += responseReport

	// Print response status and headers
	fmt.Println("Response Status:", response.Status)
	fmt.Println("Response Headers:", response.Header)

	for _, cookie := range response.Cookies() {
		fmt.Println("----- COOKIE -----")
		cookieCounter++
		cookieTotalCounter++
		if cookie.HttpOnly == true {
			fmt.Println("Cookie is HttpOnly")
			httpOnlyCounter++
			httpOnlyTotalCounter++
		}
		if cookie.Secure == true {
			fmt.Println("Cookie is Secure")
			secureCounter++
			secureTotalCounter++
		}
		switch cookie.SameSite {
		case http.SameSiteDefaultMode:
			fmt.Println("Cookie SameSite: DefaultMode")
			sameSiteCounter++
			sameSiteTotalCounter++
		case http.SameSiteLaxMode:
			fmt.Println("Cookie SameSite: LaxMode")
			sameSiteCounter++
			sameSiteTotalCounter++
			ssLaxCounter++
			ssLaxTotalCounter++
		case http.SameSiteStrictMode:
			fmt.Println("Cookie SameSite: StrictMode")
			sameSiteCounter++
			sameSiteTotalCounter++
			ssStrictCounter++
			ssStrictTotalCounter++
		case http.SameSiteNoneMode:
			fmt.Println("Cookie SameSite: NoneMode")
			sameSiteCounter++
			sameSiteTotalCounter++
			ssNoneCounter++
			ssNoneTotalCounter++
		default:
			fmt.Println("SameSite unknown or not present")
		}
		switch cookie.Path {
		case "":
			fmt.Println("Cookie Path: Not Present")
			nonRootPathCounter++
			nonRootPathTotalCounter++
		case "/":
			fmt.Println("Cookie Path: Root")
			pathCounter++
			pathTotalCounter++
			rootPathCounter++
			rootPathTotalCounter++
		default:
			fmt.Println("Cookie Path:", cookie.Path)
			pathCounter++
			pathTotalCounter++
			nonRootPathCounter++
			nonRootPathTotalCounter++
		}
		fmt.Println("---------------------")
	}
	// Update maxCookies and minCookies after processing all cookies for the current URL
	if cookieCounter > maxCookies {
		// Set maxCookies to the current cookieCounter if it's greater than the current maxCookies to find the maximum
		maxCookies = cookieCounter
	}
	// Checking for minCookies being 0 to handle the first iteration case
	if cookieCounter < minCookies {
		// Set minCookies to the current cookieCounter if it's less than the current minCookies to find the minimum
		minCookies = cookieCounter
	}
	// Append the current cookieCounter to the slice for median calculation
	cookieTotals = append(cookieTotals, float64(cookieCounter))

	// adding markdown row for the current URL
	row := addRowReport(url, response.Status, cookieCounter, httpOnlyCounter, secureCounter, sameSiteCounter, ssStrictCounter, ssLaxCounter, ssNoneCounter, pathCounter, rootPathCounter, nonRootPathCounter, "")
	// Append the generated row to the reportTable
	reportTable += row
}

func parseInvalidData(urls []string, notes string) {
	for _, url := range urls {
		row := addRowReport(url, "N/A", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, notes)
		reportTable += row
	}
}

func addRowReport(url string, statusCode string, numCookies int, numHttpOnly int, numSecure int, numSameSite int, numSsStrict int, numSsLax int, numSsNone int, numPath int, numRootPath int, numNoneRootPath int, notes string) string {
	row := fmt.Sprintf("| %s | %s | %d | %d | %d | %d | %d | %d | %d | %d | %d | %d | %s |\n", url, statusCode, numCookies, numHttpOnly, numSecure, numSameSite, numSsStrict, numSsLax, numSsNone, numPath, numRootPath, numNoneRootPath, notes)
	return row
}

func Median(nums []float64) float64 {
	if len(nums) == 0 {
		panic("cannot compute median of empty slice")
	}

	// Sort the slice
	sort.Float64s(nums)

	n := len(nums)
	mid := n / 2

	if n%2 == 0 {
		// Even length → average of the two middle values
		return (nums[mid-1] + nums[mid]) / 2
	}
	// Odd length → middle value
	return nums[mid]
}

func Mean(nums []float64) float64 {
	if len(nums) == 0 {
		panic("cannot compute mean of empty slice")
	}
	sum := 0.0
	for _, num := range nums {
		sum += num
	}
	return sum / float64(len(nums))
}

func summaryTable() string {
	summary := "|Min| Max | Median | Mean |\n|--------|-------|--------|-------|\n"
	summary += fmt.Sprintf("| %d | %d | %.2f | %.2f |\n", minCookies, maxCookies, Median(cookieTotals), Mean(cookieTotals))
	return summary
}

func writeReport() {
	file, err := os.ReadFile("config.yaml")
	if err != nil {
		fmt.Printf("Failed to read file %s: %v", "config.yaml", err)
		return
	}

	var config reportConfig
	err = yaml.Unmarshal(file, &config)
	if err != nil {
		fmt.Printf("Failed to parse YAML in %s: %v", "../config.yaml", err)
		return
	}

	totalRow := addRowReport("Totals", "N/A", cookieTotalCounter, httpOnlyTotalCounter, secureTotalCounter, sameSiteTotalCounter, ssStrictTotalCounter, ssLaxTotalCounter, ssNoneTotalCounter, pathTotalCounter, rootPathTotalCounter, nonRootPathTotalCounter, "")
	reportTable += totalRow + "\n"

	header := fmt.Sprintf("# %s\n\n", config.ReportTitle)
	header += fmt.Sprintf("Reporter Name: %s\n\n", config.ReporterName)
	header += fmt.Sprintf("Report Date: %s\n\n", time.Now().Format("01-02-2006"))

	preamble := fmt.Sprintf("# %s \n %s\n\n", "Report Description", config.ReportDescription)

	var projectReadme []byte
	projectReadme, err = os.ReadFile(config.ProgramUsageReadmePath)
	if err != nil {
		fmt.Printf("Failed to read file %s: %v\n", config.ProgramUsageReadmePath, err)
		return
	}

	report := header + preamble + "\n\n" + "# Cookie Report \n\n" + reportTable + "\n" + "\n\n" + "# Cookie Summary\n\n" + summaryTable() + httpReport + "\n\n" + "# Program Usage\n\n" + string(projectReadme)

	err = os.WriteFile(config.ReportFilename, []byte(report), 0644)
	if err != nil {
		fmt.Printf("Failed to write report to %s: %v", config.ReportFilename, err)
		return
	}
	fmt.Printf("Report written to %s\n", config.ReportFilename)

}

func main() {
	sitelist, err := os.ReadFile("../sites.txt")
	if err != nil {
		fmt.Println("Error In reading file:", err)
		return
	}
	sites := strings.Split(string(sitelist), "\n")
	for _, site := range sites {
		if site != "" {
			fmt.Println("Fetching cookies for:", site)
			fetchCookies(site)
		}
	}
	parseInvalidData(deadLinks, "Dead Link, DNS Lookup Failed")
	parseInvalidData(erroredURLs, "Errored URL, TLS Handshake Failed")
	// Generate final report

	// totals := addRowReport("Totals", "N/A", cookieTotalCounter, httpOnlyTotalCounter, secureTotalCounter, sameSiteTotalCounter, ssStrictTotalCounter, ssLaxTotalCounter, ssNoneTotalCounter, pathTotalCounter, rootPathTotalCounter, nonRootPathTotalCounter, "")
	// report := reportTable + totals + "\n" + summaryTable()
	// os.WriteFile("report.md", []byte(report), 0644)
	// fmt.Println("Report written to report.md")
	writeReport()

	// Print summary

	fmt.Println("----- SUMMARY -----")
	fmt.Println("Total Cookies:", cookieTotalCounter)
	fmt.Println("HttpOnly Cookies:", httpOnlyTotalCounter)
	fmt.Println("Secure Cookies:", secureTotalCounter)
	fmt.Println("Cookies with SameSite attribute:", sameSiteTotalCounter)
	fmt.Println(" - Lax:", ssLaxTotalCounter)
	fmt.Println(" - Strict:", ssStrictTotalCounter)
	fmt.Println(" - None:", ssNoneTotalCounter)
	fmt.Println("Cookies with Path attribute:", pathTotalCounter)
	fmt.Println(" - Non-root Path:", nonRootPathTotalCounter)
	fmt.Println(" - Root Path:", rootPathTotalCounter)
	fmt.Println("-------------------")
	fmt.Println("Total Errors:", ErrorCounter)
}
