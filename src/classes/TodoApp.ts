import { Todo, Filter } from "../types/todo";

class TodoApp {
    private todos: Todo[] = [];

    private currentFilter: Filter = 'all';

    addTodo(text: string):void {
        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        this.todos.push(newTodo);
        this.render();
    };

    deleteTodo(id:number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.render()
    };

    private render():void {
        console.log('Требуется перерисовка!', this.todos);
    };

    getTodos(): Todo[] {
        return this.todos;
    };
};

export default TodoApp;