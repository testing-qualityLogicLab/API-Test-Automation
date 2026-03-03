# API Test Automation

Automated tests for APIs to ensure reliability and correctness of backend services.  
This project provides a framework for writing, running, and reporting API tests.

---

## 🚀 Features

✔️ Automated API test cases  
✔ Easy to extend and customize  
✔ Structured test suites  
✔ Configurable environments  
✔ CI/CD ready

---

## 📁 Project Structure

```

.github/                  # GitHub workflows
Utils/                   # Utility scripts/helpers
tests/                   # API test suites
package.json             # Project dependencies and scripts
playwright.config.js     # Test runner configuration

````

*(Actual folder contents may vary depending on your implementation)*:contentReference[oaicite:2]{index=2}

---

## 🛠️ Prerequisites

Before running tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- Git

---

## 🏁 Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/testing-qualityLogicLab/API-Test-Automation.git
cd API-Test-Automation
````

### 2. Install dependencies

```bash
npm install
```

---

## 🧪 Run Tests

### Run all tests

```bash
npm test
```

### Run tests with a specific reporter

```bash
npx playwright test --reporter=list
```

### Run tests in headful (visible) mode

```bash
npx playwright test --headed
```

---

## ⚙️ Configuration

You can configure test environments, base URLs, and environment variables in:

* `playwright.config.js`
* Custom config files (if added)

---

## 📊 Test Reports

After test execution, you can view reports in the console or configure HTML report generation with Playwright:

```bash
npx playwright show-report
```

---

## 🧩 Contributing

1. Fork this repository
2. Create feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push branch (`git push`)
5. Open a Pull Request

---

## 📜 License

This project is open-source — feel free to adjust this section based on your license preference.

---

## 💬 Contact



[1]: https://github.com/testing-qualityLogicLab/API-Test-Automation.git "GitHub - testing-qualityLogicLab/API-Test-Automation · GitHub"
