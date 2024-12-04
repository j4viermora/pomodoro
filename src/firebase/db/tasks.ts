import { db, Collections} from './config'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, where, query} from "firebase/firestore";


type Task = {
    user: string;
    description: string;
    completed: boolean;
    id: string
};

export type SimpleTask = Omit<Task, "id">;


const createTask = async (task: SimpleTask) => {
    // TODO handle errors
    const docRef = await addDoc(collection(db, Collections.TASKS), {
        user: task.user,
        description: task.description,
        completed: false,
    });
    return docRef;
};

const getTasks = async (userId:string): Promise<Task[]>  => {
    const q = query(collection(db, Collections.TASKS), where("user", "==", userId));
    const querySnapshot = await getDocs(q);
    const tasks = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return tasks as Task[];
};

const updateTask = async (id: string, task: Partial<SimpleTask>) => {
    try {
        // Especifica la referencia al documento que quieres actualizar
        const docRef = doc(db, Collections.TASKS, id);

        // Actualiza los campos deseados en el documento
        await updateDoc(docRef, {
            completed: task.completed
        });

        console.log("Documento actualizado con éxito");
    } catch (error) {
        console.error("Error al actualizar el documento:", error);
    }
};

const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, Collections.TASKS, id));
};

export { createTask , getTasks, updateTask ,deleteTask};