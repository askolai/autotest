Requirements Specification: Autonomous Web Testing Platform
1. Purpose
The platform automates the early phases of web application testing. By analyzing a provided URL, it identifies web elements, generates robust selectors, traces navigation paths, proposes use cases, and produces both manual and automated test cases. The system supports integration with a local LLM (e.g. Ollama), Jira, GitHub, and is scalable and integration-ready for modern development workflows.

2. Functional Requirements
2.1 Input and Site Processing
Accept URL input via CLI and web UI.
Render the page using a headless browser (Playwright).
2.2 Web Element Scraping
Crawl DOM structure to extract interactive elements (forms, buttons, links).
Generate stable selectors (CSS, XPath, data-testid, class, name).
2.3 Navigation Path Generation
Simulate user interaction flow.
Record navigational paths like: Homepage → Login → Dashboard.
2.4 Use Case Identification
Analyze user flows to propose high-level scenarios.
Examples: form submissions, menu interactions, page redirection.
2.5 Test Case Generation
Manual Tests: YAML or Markdown format for human review.
Automated Tests: Playwright + TypeScript, with test.describe, test, and expect blocks and asserts.
2.6 Storage and Metadata
Store test metadata, logs, and selectors in SQLite.
Include timestamps, source URL, element map, and test status.
Test results, test reports.  Test analyse and suggestions of new test scenarios
3. System Architecture

Core Technologies:
Playwright: Site interaction and test execution
Node.js & TypeScript: Main engine and CLI tooling
SQLite: Local test metadata storage
Python (optional): For advanced heuristics or AI pre-processing
Ollama LLM (local) manadatory: Enhances test suggestion, user flow prediction, and intelligent element grouping

Third-party Integrations:
Jira API: Create and link issues from failed tests or untested flows
GitHub API: Push test suites and coverage reports to repos, link PRs to test data
4. Non-Functional Requirements
Scalability: Supports growing codebase and concurrent test jobs
Extensibility: Modular plugins for new tools and features
Integrability: CI/CD ready; works with pipelines like GitHub Actions, Jenkins
Usability: Simple CLI commands and optional web-based dashboard

Arkkitehtuuripiirros.png