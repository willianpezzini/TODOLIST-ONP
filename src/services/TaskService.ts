import { Task } from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository();

class TaskService {

    constructor() {

    }

    get (status: string) {
        //recebe os dados do Repository
        const result = taskRepository.get();

        //cria uma constante tasks.
        const tasks: Task[] = [];

        //mapeia cada objeto do taskRepository, os que tiverem o status = ao status buscado, ele é adicionado na const tasks.
        result.map((obj) => {
            if(obj.status === status){
                tasks.push(obj); 
            }
        })

        //Retorna tudo que está dendro da const tasks
        return tasks;
    };

    add (data: Task){
        return taskRepository.add(data);
    };

}

export default TaskService;