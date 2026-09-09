# Week1Labs — StudyBuddy

A student task and reminder app built with React Native, Expo, and Firebase, as part of a 3-week mobile app development course.

## Features
- Email/password login and sign up
- Add, complete, and delete tasks
- Tasks sync live to the cloud with Firestore
- Each user only sees their own tasks
- Local offline persistence with AsyncStorage
- Daily motivational quotes fetched from a live Web API
- Modern themed UI with Expo vector icons

## Built With
React Native, Expo, Firebase (Firestore + Authentication), EAS Build

## Author
Ryan Christian D. Deniega

---

## Student Information

- **Student:** Ryan Christian D. Deniega
- **Course:** CCE 106/L - Application Development & Emerging Technologies
- **Institution:** Department of Computing Education, University of Mindanao Tagum College
- **GitHub profile:** [Ryan Deniega (`SemiAutomat1c`)](https://github.com/SemiAutomat1c)
- **Repository:** [SemiAutomat1c/Week1Labs](https://github.com/SemiAutomat1c/Week1Labs)

---

## 3-Week Mobile App Development Journey

### Week 1 — JavaScript & React Native Foundations
- **Lab 1 — JavaScript Essentials:** Core ES6+ JavaScript concepts (`let`/`const`, arrow functions, destructuring, template literals, map/filter).
- **Lab 2 — Components & Props:** Reusable task card component design (`TaskCard`).
- **Lab 3 — Core Components & Flexbox:** Mobile layout design on `WelcomeScreen`.
- **Lab 4 — State, Hooks & Input:** State management with `useState`, `TextInput`, and task counting on `AddTaskScreen`.
- **Lab 5 — Screen Navigation:** Multi-screen navigation with React Navigation Native Stack.

### Week 2 — Dynamic Lists, Storage & Web APIs
- **Lab 6 — List Upgrades:** Interactive `FlatList` with toggling, empty state indicators, and item separators.
- **Lab 7 — Validation & Conditional Rendering:** Input validation, error alerts, and completion celebration banner.
- **Lab 8 — Device Storage:** Persistent local storage using `@react-native-async-storage/async-storage`.
- **Lab 9 — Web APIs with `fetch`:** Fetching and displaying live motivational quotes from Quotable API with fallback error handling.
- **Lab 10 — Device Polish & Themes:** Centralized `theme.js`, `@expo/vector-icons` (`Ionicons`), task deletion, and custom splash screen.

### Week 3 — Cloud Database, Authentication & Production Packaging
- **Lab 11 — Cloud Database (Firebase Firestore):** Real-time cloud sync using Firestore `onSnapshot`, `addDoc`, `updateDoc`, and `deleteDoc`.
- **Lab 12 — Authentication (Login & Sign Up):** User accounts using Firebase Auth with AsyncStorage session persistence and user-scoped data query isolation (`ownerId: user.uid`).
- **Lab 13 — Testing on Real Device & Debugging:** Live testing with Expo Go, console debugging, and runtime error investigation.
- **Lab 14 — Packaging with EAS Build & Preparation:** Android standalone APK packaging using EAS Build and project documentation.
- **Lab 15 — Capstone Demo Day:** App presentation, technical challenge discussion, and live product demonstration.

---

## Running the Project

### Development Mode (Expo Go)
```bash
# Install dependencies
npm install

# Start the Expo development server
npx expo start
```
Scan the QR code using the **Expo Go** app on Android or iOS.

### Standalone Android Build
The production preview build was generated via Expo Application Services (EAS):
```bash
eas build --platform android --profile preview
```

---

## GitHub Account Identity Note

For clarity to my instructor and readers, `SemiAutomat1c` is my personal and portfolio GitHub username. The commits in this repository identify me as **Ryan Christian D. Deniega** (`r.deniega.140107.tc@umindanao.edu.ph`). All commits follow the step-by-step laboratory structure required by CCE 106/L.
