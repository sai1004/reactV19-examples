import { useEffect, useMemo, useState } from "react";
import TodoListTable from "./TodoListTable";
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredTodoList, setFilteredTodoList] = useState([]);
    const [errors, setErrors] = useState("");

    const fetchTodoList = useMemo(() => {
        return async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
                if (!response.ok) {
                    throw new Error("Please try again by refreshing page!");
                }
                const json = await response.json();
                setErrors(false);
                setTodoList(json);
                setFilteredTodoList(json);
            } catch (error) {
                setErrors(true);
            }
        };
    }, []);

    useEffect(() => {
        if (todoList.length <= 0 && !errors) {
            fetchTodoList();
        }
        let filterTodoList = todoList.filter(
            (todo) => todo && todo?.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
        );
        setFilteredTodoList(filterTodoList);
        return () => {};
    }, [searchQuery]);

    return (
        <div className="App">
            <div className="input-search-section">
                <input
                    type="search"
                    name="searchQuery"
                    id="searchQuery"
                    placeholder="Search Todo title here."
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />
            </div>
            <div className="todolist-container">
                <TodoListTable todoList={filteredTodoList} />
            </div>
        </div>
    );
}

export default App;
