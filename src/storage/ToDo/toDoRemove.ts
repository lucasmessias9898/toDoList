import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODO_COLLETION } from "@storage/storageConfig";
import { toDoGetAll } from "./toDoGetAll";

export async function toDoRemove(taskId: string) {
    try {

        const storedTasks = await toDoGetAll();

        const tasks = storedTasks.filter(task => task.id !== taskId)

        await AsyncStorage.setItem(TODO_COLLETION, JSON.stringify(tasks));

    } catch (error) {
        throw error;
    }
}