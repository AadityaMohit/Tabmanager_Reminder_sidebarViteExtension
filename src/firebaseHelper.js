import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "firebase/auth"; 

 
const firebaseConfig = {
  apiKey: "AIzaSyAK3UIwUUwLLCGswz9lO90ICDviXmkOD2I",
  authDomain: "testextension-1e32b.firebaseapp.com",
  projectId: "testextension-1e32b",
  storageBucket: "testextension-1e32b.firebasestorage.app",
  messagingSenderId: "736473904434",
  appId: "1:736473904434:web:77259b6327747127b9d32b",
  measurementId: "G-ZY1EZREYB3"
};

 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 
export const manualLogin = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const token = await user.getIdToken();

    console.log("Login successful:", user);
    return { user, token };
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

 
export const manualRegister = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const token = await user.getIdToken();

    console.log("Registration successful:", user);
    return { user, token };
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
