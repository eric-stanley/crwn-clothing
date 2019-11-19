import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAYisthmLnx8ZrWYqJ56m_xh_t41IyLA4o",
    authDomain: "crwn-db-b021a.firebaseapp.com",
    databaseURL: "https://crwn-db-b021a.firebaseio.com",
    projectId: "crwn-db-b021a",
    storageBucket: "crwn-db-b021a.appspot.com",
    messagingSenderId: "621453491603",
    appId: "1:621453491603:web:070322b637b83756873c66",
    measurementId: "G-JM7RBNF7EZ"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
