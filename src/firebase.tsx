// Import the functions you need from the SDKs you need
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC209SEzNI4lZ8gXWV4VhLa4ZqSIldOitM",
  authDomain: "rymnd-portfolio.firebaseapp.com",
  projectId: "rymnd-portfolio",
  storageBucket: "rymnd-portfolio.appspot.com",
  messagingSenderId: "915127968007",
  appId: "1:915127968007:web:2caaecc5d74aa72b63e5a2",
  measurementId: "G-621WSV8NQH"
};
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

// Initialize Firebase

// const analytics = getAnalytics(app);

export function getImage(image: string){
  return getDownloadURL(ref(storage, image))
}

