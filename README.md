# 🎬 nativeMDB – A Modern React Native Movie Discovery App

**nativeMDB** is a sleek, high-performance mobile app built with **React Native**, **Expo**, and **TypeScript**, allowing users to discover, filter, and favourite movies and TV shows using **The Movie Database (TMDB)** API.

> 💼 Designed to showcase mobile development skills with real-world features, clean UX, and performant architecture — ideal for UK-based employers looking for React Native talent.

![nativeMDB demo](https://github.com/Gilson96/nativeMDB/assets/preview.gif) <!-- Replace with actual GIF or screenshot link -->

---

## ✨ Features

- 🔎 **Search, Filter & Discover**:
  - Search movies and TV shows by genre, popularity, or rating
  - Dynamic sorting (e.g. most popular, highest rated)

- ❤️ **User Accounts**:
  - Firebase Authentication integration
  - Secure login/signup functionality
  - Persistent user state with Redux

- 📝 **My List (Watchlist & Favorites)**:
  - Save movies to watch later or mark as favorites
  - Real-time toast notifications on add/remove

- 🎭 **Dynamic Navigation**:
  - Built with `expo-router` for modern native routing
  - Fully responsive UI, optimized for Android and iOS

- 🎨 **Modern UI Components**:
  - Custom dropdowns, modals, and menus using `shadcn/ui`
  - Avatar components, cards, icons, and toast notifications

---

## 🛠️ Tech Stack

| Area                | Tools/Frameworks                                        |
|---------------------|---------------------------------------------------------|
| Mobile Framework    | [React Native](https://reactnative.dev/), [Expo](https://expo.dev/) |
| Language            | TypeScript                                              |
| Backend/API         | [TMDB API](https://www.themoviedb.org/documentation/api), Firebase Auth |
| State Management    | Redux Toolkit                                           |
| Routing             | Expo Router                                             |
| UI & Styling        | Tailwind (via `nativewind`), Shadcn UI                  |
| Forms & Validation  | Custom components with reusable logic                   |

---

## 📦 Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/Gilson96/nativeMDB.git
cd nativeMDB

# 2. Install dependencies
npm install

# 3. Start the Expo server
npx expo start
