type Todo = {
    id: number,
    text: string,
    completed: boolean,
};

type Filter = 'all' | 'active' | 'completed';

export type {Todo, Filter};