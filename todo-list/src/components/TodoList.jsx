//on va faire 2 cas un si ma Todo list on retourneras un message d'aucune tâche
//sinon on va retourner une liste de tâches
import TodoItem from './TodoItem';
import EditTodo from './EditTodo';
//nous parcourons le tableau et créons un composant TodoItem pour chaque tâche.
//Nous utilisons une closure pour créer une fonction anonyme retournant
// la fonction de suppression liée à la valeur de l'identifiant unique de la tâche.


export default function TodoList({ 
    todoList,
    deleteTodo,
    toggleTodo,
    toggleTodoEdit,
    editTodo,
    selectTodo
}) {
    return todoList.length ? (
        <ul>
        {todoList.map((todo) =>
            todo.edit ? (
            <EditTodo
                key={todo.id}
                todo={todo} 
                editTodo={(content) => editTodo(todo.id, content)}
                cancelEditTodo={() => toggleTodoEdit(todo.id)}
                />
        ) : (
            <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={() => deleteTodo(todo.id)}
                toggleTodo={() => toggleTodo(todo.id)}               
                editTodo={() => toggleTodoEdit(todo.id)}
                selectTodo={() => selectTodo(todo.id)}
            />
            )
        )} 
        </ul>
    ) : (
        <p>Aucune tâche en cours </p>
    );
    }