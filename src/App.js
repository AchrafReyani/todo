import TodoList from './TodoList'

function App() {
  return( 
    <div>
      <TodoList />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
    </div>
  );
}

export default App;
