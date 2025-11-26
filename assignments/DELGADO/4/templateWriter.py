import os

# A wrapper script to run the iframeCatcher on each website in JDELG007@ODU.EDU
# Once the README.md is created, dataParse is called to summarize the data

template = 'template.html'
sites = 'JDELG007@ODU.EDU'
outputDir = 'framable'

with open(template, 'r') as f:
    templateContent = f.read()

with open(sites, 'r') as f:
    siteNames = [line.strip() for line in f if line.strip()]

    for name in siteNames:
        print(f'Generating page for {name}...')
        newContent = templateContent.replace('PLACEHOLDER', 'https://'+name)
        newFileName = os.path.join(outputDir, f'{name.split('.')[0]}.html')

        with open(newFileName, 'w') as newFile:
            newFile.write(newContent)
            os.system("node iframeCatcher.js https://" + name)