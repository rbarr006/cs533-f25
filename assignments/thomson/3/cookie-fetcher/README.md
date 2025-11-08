# Project cookie-fetcher

This program fetches cookies from a list of websites and generates a report on their attributes. The name of the file for the list of sites needs to be sites.txt, and should be formated as site.com\nsite2.ninja. There is also a config.yaml that needs to be present to configure the end report.

```yaml

reporterName: "Reporter"
reportTitle: "Cookie site analysis"
reportDescription: |
    reason for report would go here
reportFilename: "../README.md" # Report file name
programUsageReadmePath: "README.md" # if you wish to add this project readme to the Readme ensure it exists here.
```

## Getting Started

Either download a compiled version of the software in the links below or if you have GoLang and installed run a make run, and it will begin parsing.

## Releases
I know Releases would typically done via the githost of the project, but for your convenience i'll put them here. Sorry too Lazy to remote in to my Mac and actually make an ARM build.

[Windows](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-windows-amd64.exe)

[Linux](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-linux-amd64)

[OSX(Darwin)](https://github.com/gameguyalien/cs533-f25/releases/download/assigment-3/cookie-fetcher-darwin-amd64)

## MakeFile


Run build make command natively
```bash
make build
```

build scoped to create a Linux executable
``` bash 
make build-linux
```

build scoped to create a Windows executable
``` bash 
make build-windows
```

build scoped to create a OSX(Darwin) executable
``` bash 
make build-darwin
```

Creates Builds for all platforms 
```bash
make build-all
```

Run the application directly without compiling
```bash
make run
```

Clean up binary from the last build:
```bash
make clean
```
