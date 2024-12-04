import { FirebaseError } from "firebase/app";
import { firebaseApp } from ".";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
export const auth = getAuth(firebaseApp);
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        return {
            isAuthenticated: true,
            user,
            token
        };
    } catch (error) {
        console.log(error);
        GoogleAuthProvider.credentialFromError(error as FirebaseError);
    }
};

const signOut = () => {
    return auth.signOut().then(() => {
        window.location.href = "/";
    });
};

export { onAuthStateChanged, signOut };
