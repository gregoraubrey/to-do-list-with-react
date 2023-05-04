import React from "react";

import "./index.css";

function Output({ todos, handleDelete, toggleCompleted }) {
  return (
    <ul className="output">
      {todos.length === 0 && (
        <h3 className="no-todos-message">No todos yet!</h3>
      )}
      {todos.map((x) => {
        return (
          <>
            <li key={x.id} className={x.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={x.completed}
                onChange={() => toggleCompleted(x.id)}
              ></input>
              <span className={x.completed ? "text-completed" : ""}>
                {x.text}
              </span>
              <button
                className="delete-button"
                onClick={() => handleDelete(x.id)}
              >
                Delete
              </button>
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default Output;
