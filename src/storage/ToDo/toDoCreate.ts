import AsyncStorage from "@react-native-async-storage/async-storage";
import { TODO_COLLETION } from "@storage/storageConfig";
import { toDoGetAll } from "./toDoGetAll";
import { AppError } from "@utils/AppError";
import { TaskDTO } from "./TaskDTO";

export async function toDoCreate( newTask: TaskDTO) {
    try {

        const storedGroups = await toDoGetAll();

        const storage = JSON.stringify([...storedGroups, newTask])

        await AsyncStorage.setItem(TODO_COLLETION, storage);

    } catch (error) {
        throw error;
    }
}