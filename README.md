# Playwright Automation Project (UI + API + CI + Slack)

This project demonstrates a **full automation workflow** using Playwright for **UI and API testing**, integrated with **GitHub Actions CI**, and **Slack notifications**.

---

## 🏗 Project Structure
tests/
├─ ui/
│ ├─ login.spec.ts # UI login tests
│ └─ checkout.spec.ts # UI checkout tests
├─ api/
│ └─ products.spec.ts # API tests
playwright.config.ts # Playwright config for UI & API
package.json # Node dependencies
.github/
└─ workflows/
└─ ci.yml # GitHub Actions workflow



---

## 🔹 Test Types

### 1️⃣ Smoke Tests
- Tagged with `@smoke`
- Run fast to verify **critical flows**
- Examples:
  - UI login
  - Checkout flow
  - API get products

### 2️⃣ Regression Tests
- All tests (including non-critical)
- Run in nightly or pre-release pipelines

### 3️⃣ Future (Optional)
- Load / Performance tests can be added separately

---

## ⚙️ Playwright Configuration

- **UI tests**: Desktop Chrome, headless in CI
- **API tests**: Base URLs set in `playwright.config.ts` per project
- **Test data**: Example login credentials, products, and other inputs stored in `tests/data` or inline for demo
- **Reports**: HTML report + traces stored in `playwright-report/` and `test-results/`

---

## 💻 Run Locally

1. Install dependencies:

```bash
npm ci

2. Run all tests:

npx playwright test

npx playwright test --grep @smoke


Run only smoke tests:

npx playwright test --grep @smoke

Open Playwright report:

npx playwright show-report
🏗 GitHub Actions CI

Workflow located at:

.github/workflows/ci.yml

Features:

Runs on push to master and pull requests

Sets up Node.js and installs Playwright dependencies

Runs smoke tests

Uploads:

HTML reports as artifacts

Test traces (Junit + trace files)


Sends Slack notifications for pass/fail

Slack Notifications

Slack Webhook URL stored in GitHub secret: SLACK_WEBHOOK

Messages show PASS / FAIL

Example Slack message:

❌ Playwright Smoke Tests FAILED

Optional enhancements: branch, commit, artifact link.

🧪 Test Data

Can be inline in tests for demo

For real-world projects, store in tests/data/*.json and read in tests

Example:

const credentials = require('../data/users.json');