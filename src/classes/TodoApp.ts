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

    toggleTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id == id)
        if (todo) {
            todo.completed = !todo.completed;
            this.render();
        };
    }

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
        <div class="todo-item ${todo.completed ? 'completed' : ''}">
            <span onclick="app.toggleTodo(${todo.id})" class="todo-text">
            ${todo.link ? 
                `<a href="${todo.link}" target="_blank" class="todo-link">${todo.text}</a>` : 
                todo.text
            }
            </span>
            <div class="todo-actions">
            <button onclick="app.toggleTodo(${todo.id})" class="toggle-btn">
                ${todo.completed ? '✅' : '⚪'}
            </button>
            <button onclick="app.deleteTodo(${todo.id})" class="delete-btn">❌</button>
            </div>
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