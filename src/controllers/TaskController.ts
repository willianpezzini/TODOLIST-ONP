import { Request, Response } from "express";
import TaskService from "../services/TaskService";
import { error } from "console";

const taskService = new TaskService();

class TaskController{

    constructor() {

    }

    get(req: Request, res: Response) {
        const {status} = req.query;

        if(status && (status === 'fazer' || status ==='fazendo' || status ==='finalizado')) {

            const result = taskService.get(status);
            res.json(result);
            res.status(200);
        }else{
            res.json({error: 'Erro no parametro do Status'});
            res.status(401);
        }
    };

    getById(req: Request, res: Response) {
        const {id_task} = req.params;

        if(id_task) {

            const result = taskService.getById(id_task);
            res.json(result);
            res.status(200);
        }else{
            res.json({error: "Id Invalido"});
            res.status(401);
        }
    };

    add(req: Request, res: Response) {
        const {id, descricao, data, status} = req.body;

        //Validação dos dados, verifica se todos os dados a baixo estão corretamente preenchidos.
        if(id && descricao && data && status) {
            if(status === 'fazer' || status ==='fazendo' || status ==='finalizado') {
                 const result = taskService.add(req.body);
                res.json(result);
                res.status(201);
            }else {
                res.json({error: "Status Invalido: fazer, fazendo ou finalizado"})
            }
           
        }else {
            //Se algum dados estiver errado, cau aqui neste else
            res.json({error: "Parâmetro Inválido"});
            res.status(401);
        }
    }
}

export default TaskController;