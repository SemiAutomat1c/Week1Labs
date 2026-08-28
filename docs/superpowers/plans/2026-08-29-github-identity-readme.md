# Week1Labs GitHub Identity README Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a conventional root README that documents the five CCE 106/L labs and clearly explains why Ryan retains the established `SemiAutomat1c` GitHub username.

**Architecture:** This is a documentation-only change. One root-level `README.md` will present the assignment first, then include a bounded identity note supported by official GitHub documentation; no application code, dependencies, repository settings, or client details will change.

**Tech Stack:** Markdown, Expo/React Native project commands, Git, official GitHub documentation

## Global Constraints

- Create only the root-level `README.md` during implementation.
- Do not change application code, dependencies, existing commit history, repository visibility, collaborators, or the GitHub username.
- Do not name clients, describe private repositories, or reveal confidential project details.
- Describe username-change effects as documented risks, not as claims that every effect currently applies to this account.
- Keep the assignment more prominent than the GitHub identity explanation.
- Use the verified identity `Ryan Christian D. Deniega`; the GitHub profile display name is `Ryan Deniega` and the username is `SemiAutomat1c`.

---

### Task 1: Add the Week1Labs README

**Files:**
- Create: `README.md`
- Reference: `docs/superpowers/specs/2026-08-29-github-identity-readme-design.md`
- Verify unchanged: `App.js`, `lab1-practice.js`, `components/TaskCard.js`, `screens/WelcomeScreen.js`, `screens/AddTaskScreen.js`, `package.json`, `package-lock.json`

**Interfaces:**
- Consumes: Current repository paths, package scripts, Git commit identity, and the public GitHub account identity.
- Produces: A human-readable root `README.md` for the instructor and other repository readers.

- [ ] **Step 1: Verify the README is currently absent**

Run:

```bash
test ! -e README.md && echo "README.md is absent as expected"
```

Expected: `README.md is absent as expected`

- [ ] **Step 2: Create the exact README content**

Create `README.md` with this complete content:

````markdown
# Week1Labs

**CCE 106/L - Application Development & Emerging Technologies**  
**Week 1 Laboratory: Mobile App Development Crash Course**

## Student Information

- **Student:** Ryan Christian D. Deniega
- **GitHub profile:** [Ryan Deniega (`SemiAutomat1c`)](https://github.com/SemiAutomat1c)
- **Repository:** [SemiAutomat1c/Week1Labs](https://github.com/SemiAutomat1c/Week1Labs)

## About the Project

Week1Labs is one Expo and React Native project developed progressively through five laboratory activities. It demonstrates the JavaScript and React Native foundations used throughout CCE 106/L.

## Completed Laboratories

- **Lab 1 - JavaScript Essentials:** `let`, `const`, arrow functions, template literals, array mapping/filtering, and destructuring.
- **Lab 2 - Components and Props:** A reusable `TaskCard` component rendered with different values.
- **Lab 3 - Core Components and Flexbox:** A styled `WelcomeScreen` using React Native layout properties.
- **Lab 4 - State and User Input:** An `AddTaskScreen` using `useState`, `TextInput`, `FlatList`, and a live task counter.
- **Lab 5 - Navigation:** Native stack navigation between the welcome and task screens.

## Project Structure

```text
Week1Labs/
├── App.js
├── lab1-practice.js
├── components/
│   └── TaskCard.js
└── screens/
    ├── AddTaskScreen.js
    └── WelcomeScreen.js
```

## Running the Project

Install the dependencies and start Expo:

```bash
npm install
npx expo start
```

Use Expo Go, an Android emulator, an iOS simulator, or the web option shown by Expo.

Run the Lab 1 JavaScript exercise separately with:

```bash
node lab1-practice.js
```

## GitHub Account Identity

For clarity to my instructor and other readers, `SemiAutomat1c` is my established GitHub username. My GitHub profile displays my name as **Ryan Deniega**, and the commits in this repository identify me as **Ryan Christian D. Deniega**. The username is a persistent technical identifier and is not intended to conceal my identity.

I use this account across academic, portfolio, and client-related projects. Renaming it only to change one assignment URL would be an account-wide change that could require coordinated updates to existing links, local clones, integrations, and dependent projects.

GitHub documents the following considerations for username changes:

- Existing repository links normally redirect, and command-line pushes to old remote URLs continue to work. However, GitHub recommends updating remote URLs because a redirect can stop working if another person claims the former username and creates a repository with the same name.
- The former GitHub profile URL and links to gists using the former username do not redirect.
- `CODEOWNERS` entries containing the old username must be updated manually.
- Projects that depend on packages or container images under the old namespace may break.
- Some commits made with GitHub-provided `noreply` addresses may lose attribution or signature verification after a rename.

Because this account is already connected to ongoing work, I retained `SemiAutomat1c` for continuity while making my complete identity explicit in this README, my GitHub profile, and the repository's commit history.

Official references:

- [GitHub Docs: Username changes](https://docs.github.com/en/account-and-profile/concepts/username-changes)
- [GitHub Docs: Username reference](https://docs.github.com/en/account-and-profile/reference/username-reference)

## Submission Notes

This public repository contains the five readable lab commits requested by the worksheet, along with the initial Expo project commit and later maintenance or documentation commits. The commit history preserves the step-by-step development of the application.
````

- [ ] **Step 3: Verify the README structure, identity, links, and privacy constraints**

Run:

```bash
set -e
test -f README.md
for heading in \
  '# Week1Labs' \
  '## Student Information' \
  '## About the Project' \
  '## Completed Laboratories' \
  '## Project Structure' \
  '## Running the Project' \
  '## GitHub Account Identity' \
  '## Submission Notes'; do
  grep -Fqx "$heading" README.md
done
grep -Fq 'Ryan Christian D. Deniega' README.md
grep -Fq 'SemiAutomat1c' README.md
grep -Fq 'https://docs.github.com/en/account-and-profile/concepts/username-changes' README.md
grep -Fq 'https://docs.github.com/en/account-and-profile/reference/username-reference' README.md
if rg -n 'CHANGE_ME|YOUR_USERNAME|example\.com|password|API key|access token|private repository name' README.md; then
  exit 1
fi
echo 'README content checks passed'
```

Expected: `README content checks passed`

- [ ] **Step 4: Verify every documented local path and command**

Run:

```bash
set -e
for project_file in \
  App.js \
  lab1-practice.js \
  components/TaskCard.js \
  screens/AddTaskScreen.js \
  screens/WelcomeScreen.js; do
  test -f "$project_file"
done
node lab1-practice.js
node -e "const pkg = require('./package.json'); if (pkg.scripts.start !== 'expo start') process.exit(1);"
npm ls expo --depth=0
```

Expected: all five files exist, the start script is exactly `expo start`, Expo is installed, and Node prints these six output lines:

```text
Week1Labs has 1 task.
Double of 5 is 10
Ana is on a 3-day streak!
[ 'MATH', 'PROGRAMMING', 'PE', 'NETWORKING' ]
[ 'Programming', 'Networking' ]
Task: Finish Lab 1 — Done: false
```

- [ ] **Step 5: Verify official references still resolve**

Run:

```bash
set -e
for url in \
  'https://docs.github.com/en/account-and-profile/concepts/username-changes' \
  'https://docs.github.com/en/account-and-profile/reference/username-reference'; do
  code=$(curl -L -s -o /dev/null -w '%{http_code}' "$url")
  test "$code" = 200
  printf '%s %s\n' "$code" "$url"
done
```

Expected: both URLs return HTTP `200`.

- [ ] **Step 6: Confirm the documentation-only diff is clean**

Run:

```bash
git diff --check
git status --short
git diff -- \
  App.js \
  lab1-practice.js \
  components/TaskCard.js \
  screens/WelcomeScreen.js \
  screens/AddTaskScreen.js \
  package.json \
  package-lock.json
```

Expected: `git diff --check` succeeds, `git status --short` prints only `?? README.md`, and the application-file diff is empty.

- [ ] **Step 7: Commit the README**

Run:

```bash
git add README.md
git commit -m "docs: explain Week1Labs submission identity"
```

Expected: one commit that adds only `README.md`.
