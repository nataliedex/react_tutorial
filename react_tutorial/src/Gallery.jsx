import Profile from './Profile'
import TodoList from './Todolist';
import PackingList from './PackingList'
  
  export default function  Gallery(){
    return (
        <div>
            <h1>Amazing Scientists</h1>
            <Profile />
            <TodoList />
            <PackingList/>        
        </div>

    );
  }