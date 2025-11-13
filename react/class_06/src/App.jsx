import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo, editTodo } from "./features/todoSlice";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  //   Add Todo
  const addTodoFn = () => {
    if (input.trim() === "") return;
    dispatch(addTodo({ task: input }));
    setInput("");
  };

  //   Save Updated Todo
  const handleEditSave = (id) => {
    if (editText.trim() === "") return;
    dispatch(editTodo({ id, newTask: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
            My Tasks
          </h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 animate-slide-up">
          <div className="flex gap-2 sm:gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodoFn()}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              onClick={addTodoFn}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
            >
              Add
            </button>
          </div>
        </div>

        {/* Todos List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No tasks yet. Add one to get started!
            </p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {todos.map((item, index) => (
                <li
                  key={item.id}
                  className="p-4 sm:p-6 hover:bg-gray-50 transition animate-slide-up flex items-center justify-between group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {editId === item.id ? (
                    <div className="flex-1 flex items-center gap-3">
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-lg"
                      />
                      <button
                        onClick={() => handleEditSave(item.id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <span
                        onClick={() => dispatch(toggleTodo({ id: item.id }))}
                        className={`text-lg cursor-pointer transition ${
                          item.completed
                            ? "line-through text-gray-400"
                            : "text-gray-800"
                        }`}
                      >
                        {item.task}
                      </span>

                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <button
                          onClick={() => {
                            setEditId(item.id);
                            setEditText(item.task);
                          }}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => dispatch(deleteTodo({ id: item.id }))}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
