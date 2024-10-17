import React from 'react';
import axios from 'axios';
import './App.css';

function Create() {
    const [task, setTask] = React.useState('');

    const handleAdd = () => {
        axios.post('http://localhost:3001/todos', { task: task })
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <input type="text" onChange={(e) => setTask(e.target.value)} />
            <button type='button' onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;