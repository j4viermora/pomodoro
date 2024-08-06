import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTasks = defineStore("tasks-store", () => {
    const tasks = reactive<{
        list: Array<{
            title: string;
            id: number | string;
            completed: boolean;
        }>;
    }>({
        list: [],
    });

    const create = (task: string) => {
        tasks.list = [
            {
                title: task,
                id: new Date().getTime(),
                completed: false,
            },
            ...tasks.list,
        ];
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
    };
});
