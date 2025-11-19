import { Todo, Filter } from "../types/todo";

class TodoApp {
    private todos: Todo[] = [];
    private nextId: number = 1

    private currentFilter: Filter = 'all';

    addTodo(text: string):void {
        const newTodo: Todo = {
            id: this.nextId++,
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

    getTodos(): Todo[] {
        return this.todos;
    };

    private render():void {
        const todos = this.getTodos();
        this.updateUI(todos);
    };

    private updateUI(todos: Todo[]): void {
        const container = document.querySelector('.todo-container');

        if (!container) return;

        container.innerHTML = `
            <div class="todo-form">
                <input type="text" id="todoInput" placeholder="Введите задачу...">
                <button onclick="app.addNewTodo()">Добавить</button>
            </div>
            <div class="todo-list">
                ${todos.map(todo => `
                <div class="todo-item">
                    <span>${todo.text}</span>
                    <button onclick="app.deleteTodo(${todo.id})">❌</button>
                </div>
                `).join('')}
            </div>
            `;
    }

    addNewTodo(): void {
        const input = document.getElementById('todoInput') as HTMLInputElement;
        const text = input.value.trim();

        if (text) {
            this.addTodo(text);
            input.value = '';
        }
    }

};

export default TodoApp;