// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQBBdbIpu5LtVa2TLVZe73G4lswNo-fX8',
  authDomain: 'bodega-ecommerce.firebaseapp.com',
  projectId: 'bodega-ecommerce',
  storageBucket: 'bodega-ecommerce.firebasestorage.app',
  messagingSenderId: '488780190778',
  appId: '1:488780190778:web:4be65f6ce30b4644ce9103',
  measurementId: 'G-VKHK78NWKR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);

// Instalar o SDK do Firebase
// npm install firebase
