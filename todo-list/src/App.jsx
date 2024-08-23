import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todoList, setTodoList] = useState([]);

//la fonction permettant d'ajouter une tâche ne modifie pas le tableau
// contenu dans l'état directement !
  /**
   * Adds a new todo item to the todo list.
   */
 // Notez bien que nous passons cette fonction de modification au composant enfant AddTodo en prop. 
 //Ce composant pourra
  // ensuite exécuter cette fonction pour ajouter une tâche et donc modifier l'état du composant parent.
  
  //Rappelez-vous que le composant enfant a l'interdiction
  // totale de modifier une prop directement, c'est pour cela qu'en React nous passons des fonctions 
  //pour que les composants enfants puissent demander la modification de l'état. 
  function addTodo(content) {
    const todo = { id: crypto.randomUUID(), done: false, edit: false, content };
    console.log(todo);
    setTodoList([...todoList, todo]);
  }
  //ajout de ma fonction delete
  // utilise la méthode filter() qui retourne un nouveau tableau sans modifier le tableau dans la variable d'état todoList.
  // Nous respectons donc bien la règle de ne pas modifier directement l'état !
  //Nous passons la fonction de suppression à notre composant TodoList en prop.
  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Liste de tâches</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;