import {Note, NoteDto, NoteStatictic} from '../interfaces/interfaces';

import {getCreatedDate} from '../helpers/helper';
import nameIcons from "../helpers/toIcon";
import tasks from "../data/mockData";

const listOfTask: {
    tasks: Note[]
} = {
    tasks,
};

export function getAllNotes() {
    return listOfTask.tasks;
}

export function deleteNote(id: string): Note {
    const [task] = listOfTask.tasks.filter((task) => task.id === +id);
    if (!task) {
        throw new Error('Note  was not found');
    }
    listOfTask.tasks = listOfTask.tasks.filter((task) => task.id !== +id);
    return task;
}

export function creatNote(defaultNote: NoteDto): Note {
    const task: Note = {
        ...defaultNote,
        icon: nameIcons(defaultNote.category),
        id: new Date().getTime(),
        created: getCreatedDate(),
        archived: false,
    };
    listOfTask.tasks = [...listOfTask.tasks, task];
    return task;
}

export function getNote(id: string): Note {
    const [task] = listOfTask.tasks.filter((task) => task.id === +id);
    if (!task) {
        throw new Error('Note with this id was not found');
    }
    return task;
}

export function updateNote(defaultNote: NoteDto, id: string): Note {
    const [note] = listOfTask.tasks.filter((item) => item.id === +id);
    if (note) {
        note.name = defaultNote.name;
        note.icon = nameIcons(defaultNote.category);
        note.category = defaultNote.category;
        note.content = defaultNote.content;
        note.Dates = note.Dates
            && note.Dates !== defaultNote.Dates ?
            `${note.Dates} , ${defaultNote.Dates}`
            : note.Dates;
    } else throw new Error('Note with this id was not found');
    return note;
}

export function getStat(): NoteStatictic {
    const result: NoteStatictic = {};
    listOfTask.tasks.forEach((item) => {
        if (!result[item.category]) {
            result[item.category] = {
                active: 0,
                archived: 0,
            };
        }
        if (item.archived) {
            result[item.category].archived += 1;
        } else {
            result[item.category].active += 1;
        }
    })
    return result;
}


export default {};
