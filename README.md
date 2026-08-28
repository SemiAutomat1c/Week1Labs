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
