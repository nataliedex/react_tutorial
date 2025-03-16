import Profile from './Profile'
import TodoList from './Todolist';
import PackingList from './PackingList'
import RecipeList from './Recipes'
import Poem from './Poem'
  
  export default function  Gallery(){
    return (
        <div>
            <h1>Amazing Scientists</h1>
            <Profile />
            <TodoList />
            <PackingList/>    
            <RecipeList /> 
            <Poem />
               
        </div>

    );
  }