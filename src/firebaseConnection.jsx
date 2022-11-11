import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBC47Z5Y7bgfi-8sYULy9_EARpVulAjJ8k",
  authDomain: "micye-d21a6.firebaseapp.com",
  projectId: "micye-d21a6",
  storageBucket: "micye-d21a6.appspot.com",
  messagingSenderId: "71880492895",
  appId: "1:71880492895:web:925fb0d3ab13c43a70d8ea"
};
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
