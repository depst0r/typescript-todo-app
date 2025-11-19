import './styles/main.scss';
import TodoApp from './classes/TodoApp';


const app = new TodoApp();

(window as any).app = app;

app.addTodo('github.com/depst0r');