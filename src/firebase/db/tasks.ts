import { db, Collections} from './config'
import { collection, addDoc, getDocs} from "firebase/firestore";

type Task = {
    user: string;
    description: string;
    completed: boolean;
    id: string
};

type SimpleTask = Omit<Task, "id">;

const createTask = async (task: SimpleTask) => {
    // TODO handle errors
    const docRef = await addDoc(collection(db, Collections.TASKS), {
        user: task.user,
        description: task.description,
        completed: false,
    });
    return docRef;
};



const getTasks = async (): Promise<Task[]>  => {
    const querySnapshot = await getDocs(collection(db, Collections.TASKS));
    const tasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return tasks as Task[];
};

// const updateTask = async (id: string, task: Task) => {
//     await collection(Collections.TASKS).doc(id).update(task);
// };

export { createTask , getTasks};