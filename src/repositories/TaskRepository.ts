import { Task } from "../models/Task";

class TaskRepository {

    private tasks: Task[];

    constructor () {
        this.tasks = [];
    }

    get(): Task[] {
        return this.tasks;
    }

    // getById(id_task: string): Task[] {
    //    return this.tasks;
    // }

    add(data: Task): Task {
        this.tasks.push(data);
        return data;
    }

    update(data: Task, position: number ) {
        this.tasks[position] = data;
    }
}

export default TaskRepository;