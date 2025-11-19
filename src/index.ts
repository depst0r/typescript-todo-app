import './styles/main.scss';
import TodoApp from './classes/TodoApp';


const app = new TodoApp();

(window as any).app = app;

app.addTodo('Изучить TypeScript');
app.addTodo('Сделать Todo App');
app.addTodo('Добавить стили');