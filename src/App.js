import './App.css';
import TodoList from './page/TodoList/TodoList';
function App() {

    localStorage.setItem('list', JSON.stringify([
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id:3,
            title: 'sleep',
            completed: false
        }
    ]))
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;


////