type Todo = {
    id: number,
    text: string,
    completed: boolean,
    link?: string;
};

type Filter = 'all' | 'active' | 'completed';

export type {Todo, Filter};