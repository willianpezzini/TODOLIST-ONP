import { Router } from "express";
import TaskController from "../controllers/TaskController";


const taskController = new TaskController;
const router = Router();

router.get('/task', taskController.get);
router.get('/task/:id_task', taskController.getById);
router.post('/task', taskController.add);
router.put('/task/id_task', () => {console.log("teste editar task")});
router.delete('/task/id_task', () => {console.log("teste Excluir task")});

export default router;