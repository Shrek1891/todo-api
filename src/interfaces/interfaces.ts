export interface Note {
    id: number;
    icon: string;
    name: string;
    created: string;
    category: string;
    content: string;
    Dates: string;
    archived: boolean;
}

export interface NoteDto {
    name: string;
    category: string;
    content: string;
    Dates: string;
}

export interface NoteStatictic {
    [key: string]: {
        active: number;
        archived: number;
    };
}
