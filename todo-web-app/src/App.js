import "./App.css";
import CreateNewTodo from "./components/CreateNewTodo";
import TodoList from "./components/TodoList";

function App() {
    return (
        <main className="App">
            <header> Todo List </header>
            <div className="container">
                <CreateNewTodo />
                <TodoList />
            </div>
        </main>
    );
}

export default App;
