import React, {useCallback, useEffect, useState} from "react";


function PracticeTwo() { 
    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState('');

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `할 일 ${count}`;
    });


    const addTodo = () => {
      if(newTodo.trim() !== ''){
      setTodos([...todos, newTodo]);
      setNewTodo('');
      }
    }

    const increaClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const removeTodo = (index) => {
        const updateTodos=[...todos];
    
        updateTodos.splice(index,1);
        setTodos(updateTodos);
    };
    
      useEffect(() => {
        console.log('todos 변경됨 : ', todos);
    }, [todos]);
      

    
      return (
        <div>
          <h2>useState를 활용한 To do List</h2>
            <div>
                    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                    <button onClick={() => { addTodo(); increaClick();  }}>Add</button>
            
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>
                                {todo}
                                <button onClick={() => removeTodo(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
      );
    }
 
 
export default PracticeTwo;