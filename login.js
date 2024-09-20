import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtreicve48t3Mh7VI-u6wEh_cmvYbixSA",
    authDomain: "hackathon2-a4a33.firebaseapp.com",
    projectId: "hackathon2-a4a33",
    storageBucket: "hackathon2-a4a33.appspot.com",
    messagingSenderId: "4069720827",
    appId: "1:4069720827:web:5e18a77c82150236ca665e",
    measurementId: "G-S5CVZW54J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore()

let password = document.getElementById("password");
let email = document.getElementById("email");

window.getData = () => {

    let obj = {
        email: email.value,
        password: password.value

    }
    signInWithEmailAndPassword(auth, obj.email, obj.password).then(async(res) => {
        console.log(res.user.uid);
        let id = res.user.uid
        let refrence = doc(db, 'user', id);
        let snap = await getDoc(refrence);
        if (snap.data().user == "admin") {


            console.log("admin");
            window.location.replace("../New folder/startbootstrap-sb-admin-gh-pages/index.html")

        } else {
            window.location.replace("../New folder/startbootstrap-sb-admin-gh-pages/userIndex.html")

        }


        // if (snap.exists()) {
        //     localStorage.setItem("user", JSON.stringify(snap.data()))
        // } else {
        //     console.log("data not found ");
        // }
    }).catch((err) => {
        console.log(err);
    })
}