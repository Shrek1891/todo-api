import express from 'express';
import  {
    creatNote,
    deleteNote,
    getAllNotes,
    getNote,
    getStat,
    updateNote
} from '../repositories/repository';

export function getAllTasks(req: express.Request, res: express.Response) {
    try {
        return res.json(getAllNotes());
    } catch (error: unknown) {
        const {message} = error as Error;
        return res.status(400).json({message});
    }
}
export async function createTask(req: express.Request, res: express.Response) {
    try {
        return res.json(creatNote(req.body));
    } catch (error: unknown) {
        const {message} = error as Error;
        return res.status(400).json({message});
    }
}

export async function deleteTask(req: express.Request, res: express.Response) {
    try {
        return res.json(deleteNote(req.params.id));
    } catch (error: unknown) {
        const {message} = error as Error;
        return res.status(404).json({message});
    }
}

export async function updateTask(req: express.Request, res: express.Response) {
    try {
        return res.json(updateNote(req.body, req.params.id));
    } catch (error: unknown) {
        const {message} = error as Error;
        return res.status(404).json({message});
    }
}

export function getByOne(req: express.Request, res: express.Response) {
    try {
        return res.json(getNote(req.params.id));
    } catch (error: unknown) {
        const {message} = error as Error;
        return res.status(404).json({message});
    }
}

export function getStats(req: express.Request, res: express.Response) {
    try {
        return res.json(getStat());
    } catch (error: unknown) {
        const {message} = error as Error;
        return res.status(400).json({message});
    }
}


export default {};


