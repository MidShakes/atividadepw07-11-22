import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC4d3WeQawYijGXC-fcPenYrkzE3cXPcw0",
  authDomain: "aulinha-pw-pitbull.firebaseapp.com",
  projectId: "aulinha-pw-pitbull",
  storageBucket: "aulinha-pw-pitbull.appspot.com",
  messagingSenderId: "876670888724",
  appId: "1:876670888724:web:a2fec05ec35c391329f001"
};
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
