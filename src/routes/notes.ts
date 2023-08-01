import express from 'express';

import {
    createTask,
    deleteTask,
    getAllTasks,
    getByOne,
    getStats,
    updateTask
} from '../services/services';

import {NoteSchemaValidate} from "../schemas/schemas";
import {validate} from "../middlewares/validation";



const router: express.Router = express.Router();

//get stats
router.get('/notes/stats', getStats);
//get all
router.get('/notes', getAllTasks);
//get by id
router.get('/notes/:id', getByOne);
//post all
router.post('/notes', validate(NoteSchemaValidate),createTask);
// delete
router.delete('/notes/:id', deleteTask);

//update
router.patch('/notes/:id', updateTask);

export default router;
