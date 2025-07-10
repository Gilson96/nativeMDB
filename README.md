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

## 📱 Screenshots

### 🏠 Home Screen
![Home](screens/home.png)

### 🎬 Movie Detail
![Details](screens/details.png)

### 🔍 Filtered Results
![Filtered](screens/filters.png)

### ❤️ My List
![My List](screens/list.png)

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
