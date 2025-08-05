# 🎬 NativeMDB – A Mobile Movie Discovery App

NativeMDB is a **React Native** mobile application built using **Expo**, designed to provide an immersive experience for discovering movies and TV shows. Powered by **TMDB API**, it allows users to browse, filter, and manage their personal watchlists or favourites.

---

## ✨ Features

- 🔎 **Search & Filter**: Browse content by genre, popularity, and release date.
- 🎞️ **Detail Screens**: View in-depth movie and TV show information.
- ❤️ **Watchlist & Favorites**: Add or remove titles with persistent user storage.
- 🔄 **Pull-to-Refresh**: Instantly update lists or data with swipe-down gesture.
- 🌐 **API Integration**: Dynamic data from TMDB with real-time fetching.
- 🧭 **Expo Router Navigation**: Nested navigation with stack and tabs.
- 🔐 **Firebase Authentication**: Secure login and user-specific data handling.

---

## 🧪 Demo Login
You can test the app with the following credentials:

Email: grafael99@gmail.com
Password: abc123456

---

## 📱 Screenshots

### 🔐 Login Screen
<img src="https://github.com/Gilson96/nativeMDB/blob/master/assets/screenshots/login_screen.png?raw=true" width="250"/>

### 🏠 Home Screen
<img src="https://github.com/Gilson96/nativeMDB/blob/master/assets/screenshots/home.png?raw=true" width="250"/>

### 🎬 Movie Detail
<img src="https://github.com/Gilson96/nativeMDB/blob/master/assets/screenshots/movie.png?raw=true" width="250"/>

### 🔍 Filtered Results
<img src="https://github.com/Gilson96/nativeMDB/blob/master/assets/screenshots/filtered.png?raw=true" width="250"/>

### ❤️ My List
<img src="https://github.com/Gilson96/nativeMDB/blob/master/assets/screenshots/myList.png?raw=true" width="250"/>

---

## 🧑‍💻 Tech Stack

| Category           | Tech                                                    |
|--------------------|----------------------------------------------------------|
| Framework          | [React Native](https://reactnative.dev/) via [Expo](https://expo.dev/) |
| Routing            | [Expo Router](https://expo.github.io/router/docs)       |
| State Management   | [Redux Toolkit](https://redux-toolkit.js.org/)          |
| Backend Services   | [Firebase Auth](https://firebase.google.com/)           |
| API Source         | [TMDB API](https://www.themoviedb.org/documentation/api)|
| Styling            | Tailwind CSS (via `nativewind`)                         |
| Type Safety        | TypeScript                                               |

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Expo CLI
- Android Studio / Xcode (for simulators)
- Firebase project + TMDB API key

### Installation

```bash
# Clone the repo
git clone https://github.com/Gilson96/nativeMDB.git
cd nativeMDB

# Install dependencies
npm install

# Start Expo project
npx expo start
