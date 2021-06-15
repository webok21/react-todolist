import './App.css';
import toDo from './toDo.json';
import TodoList from './components/TodoList';

function App() {
  return (
    <main>
      <h1>To do list</h1>
      {toDo.map((singleData, i) => <TodoList key={i}
        beforeImg={singleData.img1}
        todo={singleData.todo}
        style={singleData.style}
        afterImg={singleData.img2}
      />)}
    </main>
  );
}

export default App;
