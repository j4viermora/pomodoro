import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { createTask, getTasks } from "../firebase/db/tasks";
import { auth } from "../firebase/auth";

export const useTasks = defineStore("tasks-store", () => {
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
        try {
            isLoading.value = true;
            const results =  await getTasks();
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
    const remove = (id: string | number) => {
        tasks.list = tasks.list.filter((item) => item.id !== id);
    };
    const update = () => {};
    const setCompleted = (id: string | number) => {
        tasks.list = tasks.list.map((item) => {
            return {
                ...item,
                completed: item.id === id ? true : item.completed,
            };
        });
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
