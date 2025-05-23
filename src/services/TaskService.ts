import { error } from "console";
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

    getById (id_task: string): Task | {} {
        const result = taskRepository.get();

        let task = {};

        result.find((obj) => {
            if(obj.id === id_task){
                task = obj;
            }
        })

        return task;
    }

    getIndexById (id_task: string): number {
        const result = taskRepository.get();

        let position: number = 999999;

        result.map((obj, index) => {
            if(obj.id === id_task) {
                position = index;
            }
        });
        return position;
    }

    add (data: Task){
        return taskRepository.add(data);
    };

    update(data: Task, id_task: string) {
        const position = this.getIndexById(id_task);

        if(position !== 999999) {
            return taskRepository.update(data, position);
        }else {
            return {};
        }
    }

    delete(id_task: string) {
        const position = this.getIndexById(id_task);

        if(position !== 999999) {
            return taskRepository.delete(position);
        }else {
            return {};
        }
    }

}

export default TaskService;