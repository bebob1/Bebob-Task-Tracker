# Bebob-Task-Tracker

TaskTracker CLI

TaskTracker is a Command Line Interface (CLI) tool that helps you manage your tasks. You can add, update, delete, mark, and list tasks with simple commands. The tasks are stored in a task.json file in JSON format.
Requirements

    Node.js (version 12 or higher)

    Text Editor or IDE (such as VSCode, Sublime Text, etc.)

Installation

    Clone the repository or create a new Node.js project.

    git clone https://github.com/bebob1/Bebob-Task-Tracker.git
    cd Bebob-Task-Tracker

    Install dependencies:

    Since this project doesn't use external libraries, ensure your Node.js environment is set up properly.

Usage

The application uses a simple CLI to manage tasks. Tasks are stored in a task.json file in the current working directory.
Available Commands
1. Add a new task

To add a task, use the add command followed by the task description in quotes.

    node taskTracker.js add "Task description"

Example:

    node taskTracker.js add "Buy groceries"

Expected Output:

    Task added: Buy groceries

2. Update an existing task

To update a task, use the update command followed by the task ID and the new description.

    node taskTracker.js update <id> "New task description"

Example:

    node taskTracker.js update 1 "Buy groceries and cook dinner"

Expected Output:

    ask updated: 1 -> Buy groceries and cook dinner

3. Delete a task

To delete a task, use the delete command followed by the task ID.

    node taskTracker.js delete <id>

Example:

    node taskTracker.js delete 1

Expected Output:

    Task deleted: 1

4. Mark a task as in progress

To mark a task as "in progress," use the mark-in-progress command followed by the task ID.

    node taskTracker.js mark-in-progress <id>

Example:

    node taskTracker.js mark-in-progress 1

Expected Output:

    Task 1 marked as in progress.

5. Mark a task as done

To mark a task as "done," use the mark-done command followed by the task ID.

    node taskTracker.js mark-done <id>

Example:

    node taskTracker.js mark-done 1

Expected Output:

    Task 1 marked as done.

6. List all tasks

To list all tasks, use the list command.

    node taskTracker.js list

Expected Output:

    ID: 1, Description: Buy groceries, Status: todo
    ID: 2, Description: Clean the house, Status: in-progress

7. List tasks by status

You can filter tasks by their status (todo, in-progress, or done).

    node taskTracker.js list <status>

Examples:

    node taskTracker.js list todo

Expected Output (if there are tasks with status todo):

    ID: 1, Description: Buy groceries, Status: todo

    node taskTracker.js list in-progress

Expected Output (if there are tasks with status in-progress):

    ID: 2, Description: Clean the house, Status: in-progress

    node taskTracker.js list done

Expected Output (if there are tasks with status done):

    ID: 3, Description: Complete project, Status: done

Task JSON File Structure

The tasks are stored in the task.json file, which should look like this:

    [
    {
        "id": 1,
        "description": "Buy groceries",
        "status": "todo",
        "createdAt": "2025-05-08T00:00:00Z",
        "updatedAt": "2025-05-08T00:00:00Z"
    },
    {
        "id": 2,
        "description": "Clean the house",
        "status": "in-progress",
        "createdAt": "2025-05-08T01:00:00Z",
        "updatedAt": "2025-05-08T01:00:00Z"
    }
    ]

Task properties:

    id: A unique identifier for the task (integer).

    description: A brief description of the task.

    status: The status of the task, can be todo, in-progress, or done.

    createdAt: The date and time when the task was created.

    updatedAt: The date and time when the task was last updated.

Project URL
    https://roadmap.sh/projects/task-tracker