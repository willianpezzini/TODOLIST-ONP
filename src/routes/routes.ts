import { Router, Request, Response, NextFunction } from "express";
import TaskController from "../controllers/TaskController";
import { error } from "console";


const taskController = new TaskController;

const router = Router();

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        //fazer as verificações
        next();
    }else {
        res.status(400);
        res.json({error: 'Usuário não autenticado'});
    }
}

router.get('/task', authMiddleware, taskController.get);
router.get('/task/:id_task', taskController.getById);
router.post('/task', taskController.add);
router.put('/task/:id_task', taskController.update);
router.delete('/task/:id_task', taskController.delete);

export default router;