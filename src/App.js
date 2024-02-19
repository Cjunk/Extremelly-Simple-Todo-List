import './App.css';
import TodoList from './components/TodoList'
function App() {
  document.title="Jerichos ToDo List"
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
