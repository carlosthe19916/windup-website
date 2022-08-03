---
title: Get started
description: Get started instructions
featured: true
author: PhilipCattanach
date: 2022-08-03T00:00:00Z
tags:
  - docs
---

There are 2 distributions available within the first upstream release; the [CLI](#installing-the-cli) and the [Web UI](#installing-the-web-ui).

## Prerequisites

- Java Development Kit (JDK) installed. WINDUP supports the following JDKs:
  - OpenJDK 11
  - Oracle JDK 11
- 8 GB RAM
- MacOS installation: the value of maxproc must be 2048 or greater.

## Installing the CLI

Extract the .zip file to a directory of your choice <WINDUP_CLI_HOME>.

If you are installing on a Windows operating system:

- Extract the .zip file to a folder named *windup* to avoid a Path too long error. Alternatively, extract the file with [7-Zip](https://www.7-zip.org/download.html) to a folder of any name you choose.
- If a _Confirm file replace_ window is displayed during extraction, click Yes to all.

### Running the CLI

Open a terminal and navigate to the <WINDUP_CLI_HOME>/bin/ directory.

Execute the *windup-cli* script, or *windup-cli.bat* for Windows, and specify the appropriate arguments:

```
./windup-cli \
--input /path/to/jee-example-app-1.0.0.ear \
--output /path/to/output \
--target eap:7
```

- **--input**: The application to be evaluated. Multiple input applications can be supplied, but each must be preceded by the *--input* argument. The path can also be a to a folder containing multiple applications
- **--output**: The output directory for the generated reports.
- **--target**: The target technology for the application migration.

For a full list of CLI options

```
./windup-cli --help
```

For a full list of CLI target technologies

```
./windup-cli --listTargetTechnologies
```

## Installing the Web UI

Extract the .zip file to a directory of your choice <WINDUP_UI_HOME>
If you are installing on a Windows operating system:

- Extract the .zip file to a folder named *windup* to avoid a Path too long error. Alternatively, extract the file with [7-Zip](https://www.7-zip.org/download.html) to a folder of any name you choose.
- If a Confirm file replace window is displayed during extraction, click Yes to all.

### Running the Web UI

Open a terminal and navigate to the <WINDUP_UI_HOME> directory.

Execute the *run_windup.sh* script, or *run_windup.bat* for Windows.

Open a browser and navigate to [http://localhost:8080/windup-ui](http://localhost:8080/windup-ui)

The default *user* is **migration** and the default *password* is **password**.

Follow the wizard to create your first migration project, upload applications for analysis, define your analysis configuration, execute the analysis and review the reports.
