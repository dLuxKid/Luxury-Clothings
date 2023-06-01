import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCPaCufXJBXCQIsXyuRE7V0j4HUMnkTXk",
  authDomain: "luxury-clothings.firebaseapp.com",
  projectId: "luxury-clothings",
  storageBucket: "luxury-clothings.appspot.com",
  messagingSenderId: "1015536523374",
  appId: "1:1015536523374:web:4fe451579ec8709fd62e7f",
  measurementId: "G-C5MQDBC70Q",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
