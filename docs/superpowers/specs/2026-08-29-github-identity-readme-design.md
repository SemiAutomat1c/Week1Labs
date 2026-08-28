# Week1Labs README and GitHub Identity Note Design

## Context

The CCE 106/L worksheet asks for a public `Week1Labs` GitHub repository whose owner identity reflects the student's complete name rather than an alias. The repository is owned by the established GitHub account `SemiAutomat1c`. The account profile displays `Ryan Deniega`, and the repository commits identify the author as `Ryan Christian D. Deniega` using a University of Mindanao email address.

Ryan uses the same GitHub account for academic, portfolio, and client-related repositories. Changing the account username solely for this worksheet could create maintenance work or broken references across those projects.

## Goal

Add a conventional project `README.md` that helps the instructor understand and run the assignment while briefly explaining why the established GitHub username is being retained.

## Audience

- The CCE 106/L instructor reviewing the submission
- Classmates or other readers opening the public repository
- Future maintainers running the Expo project

## Content Structure

The README will contain these sections in order:

1. **Title and course context** - identify Week1Labs as the CCE 106/L Week 1 laboratory project.
2. **Student information** - state the student's complete name and distinguish the GitHub username from the real identity shown on the profile and commits.
3. **Project overview** - summarize the single Expo app built progressively through five labs.
4. **Completed labs** - list the five lab outcomes in concise language.
5. **Project structure** - identify `lab1-practice.js`, `components/TaskCard.js`, the two screen files, and `App.js`.
6. **Running the project** - provide minimal install, start, and Lab 1 commands.
7. **GitHub account identity** - explain the retained username and the documented operational consequences of a rename.
8. **Submission status** - state that the public repository contains the five lab commits plus the initial project and later documentation/maintenance commits.

## GitHub Account Identity Content

The identity note will be factual and respectful, not defensive. It will state:

- `SemiAutomat1c` is an established account used for academic, portfolio, and client-related work.
- The account is publicly attributable to Ryan because the profile displays `Ryan Deniega` and this repository's commit author is `Ryan Christian D. Deniega`.
- GitHub normally redirects repository links after a username change, but the redirects can stop working if another person claims the previous username and creates a repository with the same name.
- The previous profile URL and previous gist URLs do not redirect.
- Existing repository remotes should be updated, old username references in `CODEOWNERS` require manual updates, packages or container consumers may break, and some commits using GitHub-provided `noreply` addresses can lose attribution or verification.
- Keeping the established username avoids unnecessary risk to existing client-facing links, local clones, integrations, and dependent projects.
- The username is not intended to conceal the student's identity.
- The section will link directly to GitHub's official documentation: `https://docs.github.com/en/account-and-profile/concepts/username-changes` and `https://docs.github.com/en/account-and-profile/reference/username-reference`.

## Tone and Privacy

- Use plain academic English and first-person wording only in the identity explanation.
- Keep the explanation to a few short paragraphs plus a compact list of documented effects.
- Do not name clients, describe private repositories, or reveal confidential project details.
- Do not claim that every listed GitHub consequence currently affects this account; describe them as documented risks that make an account-wide rename disproportionate for one assignment.

## Scope

- Add one root-level `README.md`.
- Do not change application code, dependencies, Git history, repository visibility, collaborators, or the GitHub username.
- Do not add screenshots, badges, generated graphics, or unrelated portfolio marketing.

## Verification

- Confirm every referenced project path and command exists or runs in the current repository.
- Confirm the Markdown contains no placeholders, private client names, credentials, or unsupported claims.
- Confirm both GitHub documentation links resolve.
- Confirm the app source remains unchanged and the repository diff contains only the intended documentation files.

## Acceptance Criteria

- An instructor can identify the student, course, five completed labs, and run commands without inspecting the source first.
- A reader can understand why `SemiAutomat1c` differs from the student's complete name.
- The explanation accurately distinguishes automatic repository redirects from links and integrations that require attention.
- The README remains concise enough that the username explanation does not overshadow the assignment itself.
