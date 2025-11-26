readme = 'README.md'
framable = 0
unframable = 0
framableURLs = []
nonFramableURLs = []

with open(readme, 'r') as f:
    siteStatus = [line.strip() for line in f if line.strip()]
    for site in siteStatus:
        print(site.split('|'))
        #[1] = url, [2] = status, [3] = framable
        site = site.split('|')
        print(site[3])
        if site[3].strip() == 'Framable':
            framable += 1
            framableURLs.append(site[1].strip())
        else:
            unframable += 1
            nonFramableURLs.append(site[1].strip())

with open(readme, 'a') as f:
    finalInformation = f'\n| # of Framable URLs: | {framable} |\n| # of Unframable URLs: | {unframable} |\n'
    print(finalInformation)
    f.write(finalInformation)
