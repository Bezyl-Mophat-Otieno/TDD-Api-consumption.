import { Router } from "express";
import { getAllTodos,getSingleTodo } from "../controllers/todoConroller.js";


const toDoRouter = Router()

toDoRouter.get('/', getAllTodos)
toDoRouter.get('/:id', getSingleTodo)



export default toDoRouter;