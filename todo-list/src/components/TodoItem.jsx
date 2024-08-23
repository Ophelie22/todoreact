    
    //Pourquoi avons-nous besoin de stopper la propagation des clics dans les gestionnaires d'événement des boutons ?
    //React met dans sa queue de mise à jour, pour le prochain rendu la nouvelle valeur de notre tâche, par exemple :
  //  {
        //content: "1",
        //done: false,
      //  edit: false,
       // id: "b702f80a-2d23-4f74-8388-5eebf681ffd4",
        //selected: true
    //  }
        export default function TodoItem({ todo, deleteTodo,toggleTodo, editTodo, selectTodo }) {
        return (
        <li  
            onClick={selectTodo}
            className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
            todo.selected ? 'selected' : ''
            }  `}
        >
            <span className="flex-fill">
                {todo.content} {todo.done && '✅'}
            </span>
        
            <button 
                className="btn btn-primary mr-15" 
                onClick={(e) => {
                    e.stopPropagation();
                    toggleTodo();
                }}
            > 
                Valider
            </button>

            <button 
                className="btn btn-primary mr-15"             
                onClick={(e) => {
                    e.stopPropagation();
                    editTodo();
                }}
            >
                Modifier
            </button>

            <button 
                className="btn btn-reverse-primary"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo();
                    }}
            >
                Supprimer
            </button>
        </li>
        );
    }