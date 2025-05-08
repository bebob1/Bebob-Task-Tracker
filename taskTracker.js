const fs = require('fs')
const path = './task.json'

// Function to read task.json
function loadTasks(){
    if(!fs.existsSync(path)) {
        // If file does not exist, is created with an empty array
        fs.writeFileSync(path, JSON.stringify([]))
    }
    const data = fs.readFileSync(path, 'utf8')
    return JSON.parse(data);
}

// Function to save tasks to the file
function saveTasks(tasks) {
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2))
}

// Create a task
function addTask(description) {
    const tasks = loadTasks()
    const newTask = {
        id: tasks.length + 1,
        description,
        status: 'todo',
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
    }
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`)
}

// Update a task
function updateTask(id, description) {
    const tasks = loadTasks()
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.description = description
        task.updateTask = new Date().toString()
        saveTasks(tasks);
        console.log(`Task ID ${id} updated.`)
    } else {
        console.log('Task not found!')
    }
}

// Delete a task
function deleteTask(id) {
    const tasks = loadTasks()
    const task = tasks.filter(t => t.id !== id)
    saveTasks(task)
    console.log(`Task ID ${id} deleted.`)
}

// Mark task in progress
function markInProgress(id) {
    const tasks = loadTasks()
    const task = tasks.find(t => t.id === id)
    if (task) {
        task.status = 'in progress'
        task.updatedAt = new Date().toISOString()
        saveTasks(tasks)
        console.log(`Task ID ${id} marked as in progress`)
    } else {
        console.log('Task not foun!')
    }
}


// Mark task done
function markDone(id) {
    const tasks = loadTasks()
    const task = tasks.find(t => t.id === id)
    if (task) {
        task.status = 'done'
        task.updatedAt = new Date().toISOString()
        saveTasks(tasks)
        console.log(`Task ID ${id} marked as done`)
    } else {
        console.log('Task not foun!')
    }
}

// List tasks
function listTasks(status = '') {
    const tasks = loadTasks()
    const filteredTasks = status ? tasks.filter(t => t.status === status) : tasks;
    if (filteredTasks.length === 0) {
        console.log('No tasks found.')
    } else {
        filteredTasks.forEach(task => {
            console.log(`${task.id}: ${task.description} - ${task.status}`)
        })
    }
}

const [,, command, ...args] = process.argv

switch (command) {
    case 'add':
        addTask(args.join(' '))
        break
    case 'update':
        updateTask(Number(args[0]), args.slice(1).join(' '))
        break
    case 'delete':
        deleteTask(Number(args[0]))
        break
    case 'mark-in-progress':
        markInProgress(Number(args[0]))
        break
    case 'mark-done':
        markDone(Number(args[0]))
        break
    case 'list':
        if (args.length > 0) {
            listTasks(args[0])
        } else {
            listTasks()
        }
        break
    default:
        console.log('Invalid command. Use add, update, delete, mark-in-progress, mark-done or list.')
}