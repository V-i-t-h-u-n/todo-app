import React, { useReducer, useRef, useState } from "react";
import TodoReducer from "../../reducers/TodoReducer";

const Todo = () => {
  const todoInput = useRef("");
  const todoEditInput = useRef("");
  const [todoState, todoDispatch] = useReducer(TodoReducer);
  const [visible, setVisible] = useState(false);
  const [editId, setEditId] = useState();

  const handleAddTodo = () => {
    todoDispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.floor(Math.random() * 100000),
        title: todoInput.current.value,
      },
    });
  };

  const handleEditTodo = (todoEditInput, id) => {
    console.log(id);
    setEditId(id);
    setVisible(!visible);
    todoDispatch({
      type: "EDIT_TODO",
      payload: {
        id,
        title: todoEditInput.current?.value,
      },
    });
  };

  const handleDeleteTodo = (id) => {
    todoDispatch({
      type: "DELETE_TODO",
      payload: {
        id,
      },
    });
  };

  return (
    <div className="col text-center">
      <h1>Todo Application</h1>
      <div className="container">
        <div className="row p-3 bg-secondary bg-gradient">
          <div className="col-lm">
            <input type="text" className="form-control " ref={todoInput} />
          </div>
          <div className="col-lm">
            <button className="btn btn-success" onClick={handleAddTodo}>
              ADD TODO
            </button>
          </div>
        </div>

        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-xl-3 ">
            <div className="card">
              <ul className="list-group list-group-flush ">
                {todoState?.map((todo) => {
                  return (
                    <li key={todo.id} className="list-group-item">
                      {editId === todo.id
                        ? visible && (
                            <input
                              type="text"
                              className="form-control"
                              ref={todoEditInput}
                            />
                          )
                        : ""}
                      {todo.title}
                      <div className="d-inline justify-content-end">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleEditTodo.bind(
                            this,
                            todoEditInput,
                            todo.id
                          )}
                        >
                          {" "}
                          {visible && todo.id === editId
                            ? "Submit"
                            : "Edit Todo"}
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleDeleteTodo.bind(this, todo.id)}
                        >
                          Delete Todo
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
