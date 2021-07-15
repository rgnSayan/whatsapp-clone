import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC_jXRJQCm3sZCc8oxzJ2Xv2slQgBzMyac",
    authDomain: "react-whatsapp-e5dad.firebaseapp.com",
    projectId: "react-whatsapp-e5dad",
    storageBucket: "react-whatsapp-e5dad.appspot.com",
    messagingSenderId: "884662901338",
    appId: "1:884662901338:web:0dc377fa210c1403285663"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;