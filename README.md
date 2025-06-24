# Autonomous Testing Platform

This project is an autonomous web testing platform that automates the early phases of web application testing. It analyzes a provided URL, identifies web elements, generates robust selectors, traces navigation paths, proposes use cases, and produces both manual and automated test cases.

## Features
- CLI and (optional) web UI
- Playwright-based site interaction and test execution
- Local SQLite storage for test metadata
- Integration-ready for LLMs, Jira, GitHub
- Extensible and CI/CD friendly

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Setup
```sh
npm install
```

### Usage
- (Coming soon) Run the CLI to analyze a site:
```sh
npx ts-node src/cli/index.ts <url>
```

## Project Structure
- `src/` - Source code
- `tests/` - Test cases

## Requirements
See [REQUIREMENTS.md](./REQUIREMENTS.md) for detailed requirements.
