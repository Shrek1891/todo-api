import express from 'express';
import {SchemaNote} from '../schemas/schemas';


export const validate = (schema: SchemaNote) => async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const body = req.body;
    try {
        await schema.validate(body);
        next();
    } catch (error) {
        return res.status(400).json({error});
    }
}
