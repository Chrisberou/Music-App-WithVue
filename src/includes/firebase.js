import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCHm93wf_wMxwIqD5_OuxwCysZUdxlpAak',
  authDomain: 'music-7d90a.firebaseapp.com',
  projectId: 'music-7d90a',
  storageBucket: 'music-7d90a.appspot.com',
  appId: '1:1024883988348:web:76232d3b9cf9a2285d36f9'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`)
})
const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
