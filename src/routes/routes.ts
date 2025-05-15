import { Router } from "express";

const router = Router();

router.get('/task', () => {console.log("teste todos")});
router.get('/task/:id_task', () => {console.log("teste com id")});
router.post('/task', () => {console.log("teste add task")});
router.put('/task/id_task', () => {console.log("teste editar task")});
router.delete('/task/id_task', () => {console.log("teste Excluir task")});

export default router;