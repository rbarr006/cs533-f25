## Makefile — cross-platform builds for cookie-fetcher

# Binary name (without extension)
BINARY := cookie-fetcher
# Output directory
DIST := dist
# Main source file
SRC := cmd/api/main.go

all: build-all

build:
	@echo "Building native ($(shell go env GOOS)/$(shell go env GOARCH)) into $(DIST)/"
	@mkdir -p $(DIST)
	@GOOS=$(shell go env GOOS) GOARCH=$(shell go env GOARCH) \
		go build -o $(DIST)/$(BINARY)-$(shell go env GOOS)-$(shell go env GOARCH) $(SRC)

build-linux:
	@echo "Building linux/amd64"
	@mkdir -p $(DIST)
	@GOOS=linux GOARCH=amd64 go build -o $(DIST)/$(BINARY)-linux-amd64 $(SRC)

build-darwin:
	@echo "Building darwin/amd64"
	@mkdir -p $(DIST)
	@GOOS=darwin GOARCH=amd64 go build -o $(DIST)/$(BINARY)-darwin-amd64 $(SRC)

build-windows:
	@echo "Building windows/amd64"
	@mkdir -p $(DIST)
	@GOOS=windows GOARCH=amd64 go build -o $(DIST)/$(BINARY)-windows-amd64.exe $(SRC)

build-all: build-linux build-darwin build-windows

run:
	@go run $(SRC)

clean:
	@echo "Cleaning..."
	@rm -f $(DIST)/$(BINARY)-* $(DIST)/$(BINARY)-*.exe

clean-dist:
	@rm -rf $(DIST)

.PHONY: all build build-linux build-darwin build-windows build-all run clean clean-dist
