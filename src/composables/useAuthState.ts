import { ref, onMounted, onUnmounted, reactive } from "vue";
import { auth, onAuthStateChanged } from "../firebase/auth";
export const useAuthState = () => {
    const user = reactive<any>({
        uid: "",
        email: "",
        displayName: "",
        photoURL: "",
    });
    const isAuth = ref(false);
    let unsubscribe: any;

    onMounted(() => {
        unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Usuario autenticado
                (user.uid = currentUser.uid),
                    (user.email = currentUser.email),
                    (user.displayName = currentUser.displayName),
                    (user.photoURL = currentUser.photoURL),
                    // Añade aquí cualquier otra propiedad que necesites
                    console.log("Usuario autenticado:", user.value);
                isAuth.value = true;
            } else {
                // Usuario no autenticado
                user.value = null;
                isAuth.value = false;
                console.log("Usuario no autenticado");
            }
        });
    });

    onUnmounted(() => {
        if (unsubscribe) unsubscribe();
    });

    return {
        user,
        isAuth,
    };
};
