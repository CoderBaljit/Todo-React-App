import { motion } from "motion/react";
import React, { useState } from "react";

function Input() {
  const [todoValue, setTodoValue] = useState("First Todo");
  const [todos, setTodos] = useState([]);

  const AddTodo = (e) => {
    e.preventDefault();
    if (todoValue.trim() !== "") {
      setTodos([...todos, {id: Date.now(), text: todoValue}]);
      setTodoValue("");
    }
  };

  const removeTodo = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (
    <div className="w-full h-[100vh] p-6">
      <form onSubmit={AddTodo}>
        <motion.input
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          className={`text-black dark:text-neutral-200 dark:placeholder:text-neutral-200 placeholder:text-black py-1.5 px-1.5  border-1 rounded-sm`}
          type="text"
          placeholder="Enter here text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        ></motion.input>
        <button
          type="submit"
          className=" bg-neutral-300 py-1.5 px-5 cursor-pointer ml-2.5 rounded-b-sm"
        >
          Add Todo
        </button>
      </form>

      <div className="Todo-Container">
        {todos.map((todo) => (
          <p
            className="text-white bg-blue-600 flex justify-between items-center px-2.5 rounded-[6px] mt-5.5"
            key={todo.id}
            
          >
            {todo.text}
            <div className="flex justify-between items-center">
              <svg
              onClick={()=> removeTodo(todo.id)}
                className="w-[40px] cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                    fill="#0F0F0F"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Input;
