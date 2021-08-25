import TodoList from "./Page/TodoList";
import TodoDataContext from "./Context/TodoDataContext";
function App() {
    return (
        <div className="App">
            <TodoDataContext>
                <TodoList />
            </TodoDataContext>
        </div>
    );
}

export default App;
