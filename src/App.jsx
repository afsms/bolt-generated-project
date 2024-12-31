import { useState } from 'react'

    function App() {
      const [todos, setTodos] = useState([])
      const [input, setInput] = useState('')

      const addTodo = () => {
        if (input.trim()) {
          setTodos([...todos, { text: input, completed: false }])
          setInput('')
        }
      }

      const toggleTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
      }

      return (
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                className="flex-1 p-2 border rounded"
                placeholder="Add a new todo"
              />
              <button
                onClick={addTodo}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between p-2 ${
                    todo.completed ? 'bg-gray-50' : ''
                  }`}
                >
                  <span
                    className={`flex-1 ${
                      todo.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => toggleTodo(index)}
                    className={`px-2 py-1 text-sm rounded ${
                      todo.completed
                        ? 'bg-gray-200 text-gray-600'
                        : 'bg-green-200 text-green-600'
                    }`}
                  >
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }

    export default App
