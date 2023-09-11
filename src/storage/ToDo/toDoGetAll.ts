import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODO_COLLETION } from "@storage/storageConfig";
import { TaskDTO } from "./TaskDTO";

export async function toDoGetAll() {
    try {

        const storage = await AsyncStorage.getItem(TODO_COLLETION)

        const tasks: TaskDTO[] = storage ? JSON.parse(storage) : []

        return tasks;

    } catch (error) {
        throw error;
    }
}