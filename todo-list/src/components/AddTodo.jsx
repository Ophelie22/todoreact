import { useState } from 'react';
            //Le composant AddTodo a en état local la valeur du champ avec une double liaison :
            //lorsque nous modifions l'état avec setValue(), la valeur du champ est modifié grâce à la liaison value={value}.
            //lorsque l'utilisateur modifie la valeur du champ, l'état local est modifié grâce à onChange={handleChange}.

            ///Notez bien que le composant reçoit en prop la fonction addTodo() 
            //et qu'il l'invoque lorsque nous voulons ajouter une tâche, 
            //et donc modifier l'état du composant parent.
export default function AddTodo({ addTodo }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && value.length) {
            addTodo(value);
            setValue('');
        }
    }

    function handleClick() {
        if (value.length) {
            addTodo(value);
            setValue('');
        }
    }
//on declenche nois la fonction handleClick lorsque l'utilisateur appuie sur le bouton Ajouter.
//on declenche nois la fonction handleKeyDown lorsque l'utilisateur appuie sur la touche Enter.
    return (
        <div className="d-flex justify-content-center align-items-center mb-20">
        <input
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={value}
            className="mr-15 flex-fill"
            placeholder="Ajouter une tâche"
        />
        <button onClick={handleClick} className="btn btn-primary">
            Ajouter
        </button>
        </div>
    );
}