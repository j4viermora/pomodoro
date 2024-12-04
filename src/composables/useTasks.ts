import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { createTask, getTasks, updateTask, deleteTask, SimpleTask } from "../firebase/db/tasks";
import { auth } from "../firebase/auth";
import { useAuthState } from "./useAuthState";

export const useTasks = defineStore("tasks-store", () => {
    const { user } = useAuthState();
    const isLoading = ref(false);
    const tasks = reactive<{
        list: Array<{
            title: string;
            id: number | string;
            completed: boolean;
        }>;
    }>({
        list: [],
    });


    const getAllTasks = async () => {
        tasks.list = [];
        try {
            isLoading.value = true;
            const results =  await getTasks(user.uid);
            results.forEach((task) => {
                tasks.list.push({
                    title: task.description,
                    id: task.id,
                    completed: task.completed,
                });
            });
        } catch (error) {
            console.log(error);
        } finally{
            isLoading.value = false;
        }
    };


    const create = async (task: string) => {
        try {
          await createTask({
                user: auth.currentUser?.uid ?? "",
                description: task,
                completed: false,
          });
        } catch (error) {
            console.log(error);
        }
    };
    const remove = (id: string) => {
        deleteTask(id).then(() => {
            getAllTasks();
        });     
    };
    const update = (id:string, data:Partial<SimpleTask>) => {
        updateTask(id, data).then(() => {
            getAllTasks();
        });
    };
    const setCompleted = (id: string) => {
        update(id, {
            completed: true
        })
    };
    return {
        tasks,
        create,
        remove,
        update,
        setCompleted,
        getAllTasks,
        isLoading
    };
});
