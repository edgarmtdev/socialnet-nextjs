import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

let app

const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
     storageBucket: process.env.STORAGEBUCKET,
     messagingSenderId: process.env.MESSAGINGSENDERID,
     appId: process.env.APPID,
     measurementId: process.env.MEASUREMENTID,
}

if (!getApps.length) {
     app = initializeApp(firebaseConfig)
} else {
     app = getApp()
}

// FirebaseDB Instance
export const database = getFirestore(app);
export const auth = getAuth(app)