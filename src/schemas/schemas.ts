import * as Yup from 'yup';

const categories = ['Task', 'Random Thought', 'Idea'];
export const NoteSchemaValidate = Yup.object({
    name: Yup.string().min(1).max(30).required("name must be between 1 and 30 characters"),
    category: Yup.string().oneOf(categories).required("category must be 'Task', 'Random Thought' or 'Idea'"),
    content: Yup.string().min(1).required("content must be have at least 1 character"),
    archived: Yup.boolean().required("archived must be a boolean")
});

export type SchemaNote = typeof NoteSchemaValidate;