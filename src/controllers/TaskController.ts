import { Request, Response } from "express";
import TaskService from "../services/TaskService";
import { error } from "console";

const taskService = new TaskService();

class TaskController{

    constructor() {

    }

    get(req: Request, res: Response) {
        const {status} = req.query;

        console.log('Teste')

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
        const {descricao, data, status} = req.body;

        //Validação dos dados, verifica se todos os dados a baixo estão corretamente preenchidos.
        if(descricao && data && status) {
            if(status === 'fazer' || status ==='fazendo' || status ==='finalizado') {
                const result = taskService.add(req.body);
                res.status(201);
                res.json(result);
                
            }else {
                res.json({error: "Status Invalido: fazer, fazendo ou finalizado"})
            }
           
        }else {
            //Se algum dados estiver errado, cau aqui neste else
            res.status(401);
            res.json({error: "Parâmetro Inválido"});
           
        }
    }

    update(req: Request, res: Response) {
        const {id, descricao, data, status} = req.body;
        const {id_task} = req.params;

        if(id && descricao && data && status && id_task) {

            if(status === 'fazer' || status ==='fazendo' || status ==='finalizado') {

                const result = taskService.update(req.body, id_task);

                if (result && Object.keys(result).length > 0) {
                    res.json(result);
                }else {
                    res.json({error: "Task Não Encontrada"});
                    res.status(404);
                }
                

            }else {
                res.json({error: "Parametro de Status Inválido"});
                res.status(401);
            }

        }else {
            //Se algum dados estiver errado, cau aqui neste else
            res.json({error: "Parâmetros Inválidos"});
            res.status(401);
        }
    }

    delete(req: Request, res: Response) {
        const {id_task} = req.params;

        if(id_task) {
            const result = taskService.delete(id_task);
            res.json(result);
        }else {
            res.json({error:"É necessário passar o Id_task nos parâmetros" });
            res.status(401)
        }
    }
}

export default TaskController;