import { firebaseApp } from "../index";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseApp);

enum Collections {
    TASKS = "tasks",
}

export { db , Collections};
