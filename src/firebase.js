import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3zfrG8RKi6dTOLTnP062Kxr6qL8I7qo0",
  authDomain: "my-portfolio-feb79.firebaseapp.com",
  projectId: "my-portfolio-feb79",
  storageBucket: "my-portfolio-feb79.firebasestorage.app",
  messagingSenderId: "683238309746",
  appId: "1:683238309746:web:cf653c9cb87ad5fdc467eb",
  measurementId: "G-DQCJ0J7PP7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);