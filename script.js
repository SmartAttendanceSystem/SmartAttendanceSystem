import firebaseConf from './firebase/firebase.js'
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js'

const logBtn = document.querySelector('[data-btn]')
const email = document.querySelector('[data-email]')
const password = document.querySelector('[data-password]')



logBtn.addEventListener('click', () => {
    console.log(email.value, password.value ,firebaseConf.auth)
    createUserWithEmailAndPassword(firebaseConf.auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
})

email.addEventListener('click',()=>{
    document.querySelector('[data-email-place]').classList.add('active')
})

password.addEventListener('click',()=>{
    document.querySelector('[data-pass-place]').classList.add('active')
})