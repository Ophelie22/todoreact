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
    //console.log(todo);
    setTodoList([...todoList, todo]);
  }
  //ajout de ma fonction delete
  // utilise la méthode filter() qui retourne un nouveau tableau sans modifier le tableau dans la variable d'état todoList.
  // Nous respectons donc bien la règle de ne pas modifier directement l'état !
  //Nous passons la fonction de suppression à notre composant TodoList en prop.
  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }


  //Pour le mode edition 
  //Quand la propriété edit d'une tâche
  // vaut true nous voulons afficher le formulaire d'édition de cette tâche et quand elle vaut false, nous voulons afficher la tâche.
  //Nous devons donc ajouter cette mécanique pour déclencher le mode édition.
  // Cette fonction prend en paramètre un 'id' qui correspond
  //à l'identifiant d'une tâche dans la liste de tâches (todoList).
function toggleTodo(id) {
  // 'setTodoList' est  une fonction d'état (state setter) provenant de React,
    // qui met à jour la liste de tâches (todoList) avec une nouvelle version modifiée.
    setTodoList(
      todoList.map((todo) =>
        /// 'todoList.map' crée un nouveau tableau en appliquant la fonction donnée à chaque élément (todo) de la liste de tâches actuelle.
      // Cela permet de retourner une nouvelle version de chaque élément selon une condition.
        todo.id === id ? { ...todo, done: !todo.done } : todo
      // Si l'identifiant de la tâche actuelle (todo.id) est égal à l'identifiant donné (id),
      // alors l'opérateur ternaire retourne un nouvel objet tâche (todo) avec toutes ses propriétés d'origine (...todo),
      // sauf que la propriété 'done' est inversée (!todo.done).
      // Sinon, il retourne simplement la tâche telle qu'elle est sans modification.
      )
        // Le tableau retourné par 'map' est passé à 'setTodoList', ce qui met à jour l'état de la liste de tâches.
    );
  }
  //voir commentaire au dessus car j'ai pas l'habitudes de cette syntaxe
  function toggleTodoEdit(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  }
  function editTodo(id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: false, content } : todo
      )
    );
  }


  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Liste de tâches</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList 
          todoList={todoList} 
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          toggleTodoEdit={toggleTodoEdit}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;