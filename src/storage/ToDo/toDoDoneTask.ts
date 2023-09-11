import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODO_COLLETION } from "@storage/storageConfig";
import { toDoGetAll } from "./toDoGetAll";

export async function toDoDoneTask(taskId: string) {
    try {

        const storedTasks = await toDoGetAll();

        const tasks = storedTasks.filter(task => task.id !== taskId)

        const taskDone = storedTasks.filter(task => task.id === taskId)

        taskDone[0].done =  taskDone[0].done ? false : true

        const newTasks = taskDone.concat(tasks).sort(function(a, b) {
            if(a.id < b.id) return -1
        })

        await AsyncStorage.setItem(TODO_COLLETION, JSON.stringify(newTasks));

    } catch (error) {
        throw error;
    }
}