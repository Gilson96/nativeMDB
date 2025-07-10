import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuPkyc_n6879czwYVtt7SKbALGEy1uEcg",
  authDomain: "nativemdb.firebaseapp.com",
  projectId: "nativemdb",
  storageBucket: "nativemdb.firebasestorage.app",
  messagingSenderId: "1052489170458",
  appId: "1:1052489170458:web:b03bc8f98eff0c0d0edba3",
  measurementId: "G-K05P6Y8NNC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
