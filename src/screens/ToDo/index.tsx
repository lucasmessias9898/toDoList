import { useState, useRef, useEffect } from "react";
import { FlatList, Alert, TextInput } from "react-native";

import Header from "@components/Header";
import Input from "@components/Input";
import Button from "@components/Button";
import NumberOfToDo from "@components/NumberOfToDo";
import ListEmpty from "@components/ListEmpty";
import TaskCard from "@components/TaskCard";

import { toDoCreate } from "@storage/ToDo/toDoCreate";
import { toDoGetAll } from "@storage/ToDo/toDoGetAll";
import { TaskDTO } from "@storage/ToDo/TaskDTO";

import { AppError } from "@utils/AppError";

import { Container, Form, HeaderList } from "./styles";
import { toDoRemove } from "@storage/ToDo/toDoRemove";
import Loading from "@components/Loading";
import { toDoDoneTask } from "@storage/ToDo/toDoDoneTask";

import { BannerAd, BannerAdSize, InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';

const adUnitId = 'ca-app-pub-1504438003408356/7977516229';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true
});

export default function ToDo() {

    const [tasks, setTasks] = useState<TaskDTO[]>([]);
    const [newTask, setNewTask] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [tasksDone, setTasksDone] = useState(0)

    const newTaskInputRef = useRef<TextInput>(null);

    async function handleNewTask() {
        
        try {
            setIsLoading(true) 

            if(newTask.trim().length === 0) {
                return Alert.alert('Nova Tarefa', 'Informe a nova tarefa.')
            }

            const taksData = {
                id: Math.floor(Math.random() * 10).toString(),
                title: newTask.trim(),
                done: false
            }

            await toDoCreate(taksData);

            newTaskInputRef.current?.blur();
            setNewTask('')

            fetchTasks()
        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Nova Tarefa', error.message)
            } else {
                Alert.alert('Nova Tarefa', 'Não foi possível criar uma nova tarefa.')
                console.log(error)
            }
        } finally {
            setIsLoading(false)
        }
    }

    async function taskRemove(taskId: string) {
        try {
            setIsLoading(true)
            await toDoRemove(taskId);
            fetchTasks()
        } catch (error) {
            Alert.alert('Excluir Tarefa', 'Não foi possível excluir a tarefa.')
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleTaskDone(taskId: string) {
        try {
            setIsLoading(true)
            await toDoDoneTask(taskId);
            fetchTasks()
        } catch (error) {
            Alert.alert('Marcação de Tarefa', 'Não foi possível marcar como feito a tarefa tarefa.')
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleTaskRemove(taskId: string) {

        Alert.alert(
            'Excluir Tarefa',
            'Deseja excluir a tarefa?',
            [
                { text: 'Não', style: 'cancel'},
                { text: 'Sim', onPress: () => taskRemove(taskId)}
            ]
        )

    }

    async function fetchTasks() {
        try {
            setIsLoading(true)

            const getTasks = await toDoGetAll();

            setTasksDone(getTasks.filter(task => task.done === true).length)
            setTasks(getTasks)
        } catch (error) {
            Alert.alert('Jogadores', 'Não foi possível carregar os jogadores do time.')
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchTasks()

        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setIsLoading(true)
        })

        interstitial.load();

        return unsubscribe
    }, [])

    return (
        <Container>
            <Header/>

            <Form>
                <Input 
                    inputRef={newTaskInputRef}
                    placeholder="Adicione uma nova tarefa"
                    onChangeText={setNewTask}
                    value={newTask}
                    onSubmitEditing={handleNewTask}
                    returnKeyType="done"
                />
                <Button icon="plus-circle" onPress={handleNewTask}/>
            </Form>

            {isLoading ? 
                <Loading />
            :
                <>
                    <HeaderList>
                        <NumberOfToDo 
                            title="Criadas"
                            counter={tasks.length}
                        />
                        <NumberOfToDo 
                            title="Concluídas"
                            type='SECONDARY'
                            counter={tasksDone}
                        />
                    </HeaderList>

                    <FlatList 
                        data={tasks}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TaskCard title={item.title} done={item.done} 
                                onRemove={() => handleTaskRemove(item.id)}
                                onDone={() => handleTaskDone(item.id)}
                            />
                        )}
                        ListEmptyComponent={() => 
                            <ListEmpty 
                                message='Você ainda não tem tarefas cadastradas' 
                                subMessage="Crie tarefas e organize seus itens a fazer"
                            />
                        }
                        contentContainerStyle={[
                            { paddingBottom: 100 }
                        ]}
                    />
                </>
            }

            <BannerAd 
                unitId={adUnitId}
                size={BannerAdSize.BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true
                }}
            />
        </Container>
    )
}