
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChucBRrxFf_eFry5Qxrbrt3FPbEVhJnow",
  authDomain: "socialmediaapp-76d45.firebaseapp.com",
  projectId: "socialmediaapp-76d45",
  storageBucket: "socialmediaapp-76d45.appspot.com",
  messagingSenderId: "358596535098",
  appId: "1:358596535098:web:cef8e4ea29a06e9a3a2603"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
