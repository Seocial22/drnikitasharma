import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGvtyIZ9IuNhqhVNSIJl2eLG3nTDgIkoc",
  authDomain: "nivik-smile-care.firebaseapp.com",
  projectId: "nivik-smile-care",
  storageBucket: "nivik-smile-care.firebasestorage.app",
  messagingSenderId: "290103974274",
  appId: "1:290103974274:web:244973f8670fac23f1979b",
  measurementId: "G-VV97TDPM2G"
};

// Initialize Firebase only if it hasn't been initialized already
let app;
let db;

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize Firestore with persistent local cache
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
    }),
  });

  // Initialize analytics only in client-side
  if (typeof window !== 'undefined') {
    getAnalytics(app);
  }
}

export { app, db };