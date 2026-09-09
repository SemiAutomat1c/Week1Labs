# 5-Minute Capstone Demo Script — StudyBuddy (Week1Labs)

**Course:** CCE 106/L – Application Development & Emerging Technologies  
**Presenter:** Ryan Christian D. Deniega  
**Project:** Week1Labs (StudyBuddy)  
**Total Presentation Time:** 5 Minutes

---

## ⏱️ Breakdown at a Glance

| Segment | Allocated Time | Focus |
|---|---|---|
| **1. The Problem** | 60 seconds (1:00) | The pain point, user demographic, and solution |
| **2. Live Walkthrough** | 150 seconds (2:30) | Auth flow, real-time Firestore sync, and task scoping |
| **3. Technical Challenge** | 90 seconds (1:30) | User session persistence & scoping tasks to `auth.currentUser.uid` |

---

## Segment 1: The Problem (60 Seconds)

> *"Good morning / afternoon everyone, and to our instructor. My name is Ryan Christian Deniega, and today I'm presenting **StudyBuddy**, a cross-platform mobile task management and study assistant built with React Native, Expo, and Firebase.*
>
> *As students, we constantly juggle assignments, laboratory deadlines, group meetings, and exam preparation across multiple subjects. Traditional notes apps either keep data strictly trapped on one local device or lack fast, simple synchronization. If you switch devices or log in on a classmate's phone, you either lose your tasks or risk mixing your deadlines with someone else's.*
>
> *StudyBuddy solves this by providing a lightweight, distraction-free task tracker that securely ties your study tasks directly to your individual user account in the cloud. Tasks persist seamlessly, update instantly in real time, and remain completely private to each logged-in student."*

---

## Segment 2: Live Walkthrough (150 Seconds)

> *"Let's take a look at the application in action running on our device.*
>
> 1. **Authentication & Session Persistence:**
>    *"When we first launch the app, we are greeted by a clean, authenticated entry point. If you don't have an account, you can quickly register via the Sign Up screen. Let's log into an existing account with email and password. Once authenticated, our session is preserved using AsyncStorage-backed persistence so we don't have to log in repeatedly every time the app opens."*
>
> 2. **Motivational Quote (Web API):**
>    *"At the top of the main screen, you'll see today's motivational quote, pulled live from a public Web API using `fetch`. If you want fresh motivation while studying, you can tap the **'New Quote'** button to immediately fetch another quote, with fallback offline handling if connectivity is lost."*
>
> 3. **Real-time Task Management (Firestore):**
>    *"Now let's add a task: 'Review CCE 106 Lab 12'. When I tap 'Add Task', notice that the task immediately appears on our list. Behind the scenes, this isn't just updating React local state — it's syncing directly to Google Firebase Firestore through an active real-time listener."*
>
> 4. **Completing & Deleting Tasks:**
>    *"When I tap the circle icon next to the task, the icon toggles to a teal checkmark, marking it done. When all tasks are completed, the app rewards us with a celebratory message: '🎉 All done! Great work!'. If a task is no longer needed, tapping the trash icon removes it from the cloud database instantly."*
>
> 5. **Account Isolation / Security:**
>    *"Most importantly, our tasks are strictly scoped. If a classmate logs into their own account on this device, they will only see their own tasks. Your assignments remain completely isolated and private."*

---

## Segment 3: Technical Challenge (90 Seconds)

> *"Over the 3 weeks of building this application, the most interesting and challenging technical hurdle was transitioning from local state to **per-user cloud scoping**.*
>
> *In Week 2, our tasks were stored locally using `AsyncStorage`. But in Week 3, we introduced Firebase Authentication and Firestore. The challenge was two-fold:*
>
> 1. *First, handling the **auth lifecycle timing**: when the app first starts, `auth.currentUser` is temporarily `null` while Firebase asynchronously resolves the stored token from device storage. If a database query fires before authentication finishes resolving, the query fails with permission errors.*
> 2. *Second, ensuring **data isolation**: we needed every Firestore write to tag the document with `ownerId: user.uid`, and every real-time `onSnapshot` listener to strictly filter by `where('ownerId', '==', user.uid)`.*
>
> *We resolved this by using a declarative auth-state listener (`onAuthStateChanged`) in `App.js` that conditionally mounts the authenticated navigation stack only after the user session is verified, combined with defensive guard clauses in our Firestore operations.*
>
> *This ensured zero race conditions, rock-solid login transitions, and full data privacy across accounts.*
>
> *Thank you very much, and I'm happy to answer any questions!"*

---

## 💡 Anticipated Q&A (Preparation Tips)

- **Q: What happens if the user is offline?**
  *Answer:* The Web API quote gracefully falls back to a preset motivational quote via `.catch()`. Firebase Firestore also caches writes locally and syncs them once an internet connection is re-established.
- **Q: Why use Expo EAS Build instead of plain Expo Go for the demo?**
  *Answer:* EAS Build packages the complete source and native runtime into an installable `.apk` file that runs natively on Android without requiring an active development server or network cable.

---

## 📋 Self-Assessment Checklist (Demo Day Readiness)

- [x] App is packaged with EAS Build (`.apk`) and opens without needing a laptop/cable.
- [x] Verified user can register, log in, navigate screens, and present features.
- [x] Exact 2-3 screen demo sequence mapped out and rehearsed.
- [x] Technical challenge (per-user scoping & auth lifecycle) clearly articulated in plain language.
- [x] GitHub repository link is active, accessible, and up to date.
- [x] Presentation timings strictly calibrated to 5 minutes.

