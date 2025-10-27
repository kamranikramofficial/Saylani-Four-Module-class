const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// MongoDB Connection
mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err))

// Todo Schema
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

// Todo Model
const Todo = mongoose.model('Todo', todoSchema)

app.use(cors())
app.use(express.json())

app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.json(todos)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos', details: error.message })
  }
})

app.post('/todos', async (req, res) => {
  try {
    const { task } = req.body
    const newTodo = new Todo({ task })
    await newTodo.save()
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo', details: error.message })
  }
})

app.delete('/todos/:id', async (req, res) => {
  try { 
    const { id } = req.params
    const deletedTodo = await Todo.findByIdAndDelete(id)
    
    if (!deletedTodo) {
      return res.status(404).json({ error: 'Todo not found' })
    }
    
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.status(200).json({ message: "Deleted Successfully", data: todos })
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete todo', details: error.message })
  }
})

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { task, completed } = req.body

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { task, completed },
      { new: true }
    )

    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' })
    }

    res.status(200).json(updatedTodo)
  } catch (error) {
    res.status(400).json({ error: 'Failed to update todo', details: error.message })
  }
})
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
} )