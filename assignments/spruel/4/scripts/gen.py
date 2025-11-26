with open("urls.txt", "r", encoding="utf-8") as f:
    for line in f:
        # print("app.get('/" + line[:line.rfind('.')] + "', (req, res) => {" )
        # print(" res.sendFile(path.join(__dirname, 'html', '" + line[:-1] + ".html'));")
        # print("});")
        # print("")

        #print("    <li><a href=\"/"+ line[:line.rfind('.')] + "\">" + line[:line.rfind('.')] + "</a></li>")
        
        data = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>""" + line[:-1] + """</title>
</head>
    <body>
        <h1>We're going to try to iFrame your site and steal your cookie!</h1>
        <h3>Below is an iframe that loads from a page that is in another path</h3>
        <p>
        <p>
        <script>
            const iframe = document.createElement('iframe')
            iframe.src = 'https://www.""" + line[:-1] + """'
            document.body.appendChild(iframe)
            console.log("cookies: " +iframe.contentDocument.cookie)
            setTimeout(function() {
            const p = document.createElement('p')
            if(iframe.contentDocument !== null)
            {
                p.innerHTML = iframe.contentDocument.cookie
                document.body.appendChild(p)
                console.log("From iframe cookies: " + p)
                
            }
            console.log("from main page cookies: " + document.cookie)
            }, 5000);
        </script>
        <li><a href="/">Home</a></li> 
    </body>
</html>
        """
        with open(str(line[:-1] + ".html"), "w", encoding="utf-8") as wf:
            wf.write(data)
