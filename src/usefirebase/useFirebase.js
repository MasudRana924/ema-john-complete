import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        // signInWithPopup(auth, googleProvider)
       return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     const user = result.user
            //     console.log(user)
            // })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    // onauth hoi state changed hoi tahole set korbe jeita pabe
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
        })
    }, [])

    return {
        user, logOut,
        googleSignIn
    }

}
export default useFirebase
