# CLI Task Manager (Node.js)
A lightweight and interactive Command Line Interface (CLI) Task Manager built with Node.js. It allows you to manage daily tasks from your terminal using a simple text-based menu.
## Features
1. Add new tasks with a description
2. View all tasks in a clean tabular format
3. Mark tasks as completed
4. Delete tasks
5. Persistent task storage using tasks.json
6. Simple, intuitive CLI interface with prompt menu
## Tech Stack
1. Node.js (ES Module)
2. 'readline' for interactive CLI
3. 'fs/promises' for asynchronous file operations
4. 'console.table' for displaying tasks
## Getting Started
### 1. Clone the repository
```cmd
git clone https://github.com/joelljacob/CLI-Task-Manager.git
cd CLI-Task-Manager
```
### 2. Run the app
```cmd
node app.js
```
## Sample Format
```json
[
  {
    "task": "Task Number 1",
    "status": "Pending"
  },
  {
    "task": "Task Number 2",
    "status": "Pending"
  }
]
```
## Example Output
```cmd
1. Add a Task
2. View Tasks
3. Mark task as done
4. Delete Task
5. Exit
Choose Option: 1
Enter the task: Task Number 1
Task "Task Number 1" has been successfully added!
```

```cmd
1. Add a Task
2. View Tasks
3. Mark task as done
4. Delete Task
5. Exit
Choose Option: 2

Tasks:
┌─────────┬─────────────────┬───────────┐
│ (index) │ task            │ status    │
├─────────┼─────────────────┼───────────┤
│ 0       │ 'Task Number 1' │ 'Pending' │
└─────────┴─────────────────┴───────────┘
```
```cmd
1. Add a Task
2. View Tasks
3. Mark task as done
4. Delete Task
5. Exit
Choose Option: 3
Tasks:
┌─────────┬─────────────────┬───────────┐
│ (index) │ task            │ status    │
├─────────┼─────────────────┼───────────┤
│ 0       │ 'Task Number 1' │ 'Pending' │
└─────────┴─────────────────┴───────────┘
Enter task number to be marked as completed: 0
Task has been updated successfully!
```
```cmd
1. Add a Task
2. View Tasks
3. Mark task as done
4. Delete Task
5. Exit
Choose Option: 4
Tasks:
┌─────────┬─────────────────┬─────────────┐
│ (index) │ task            │ status      │
├─────────┼─────────────────┼─────────────┤
│ 0       │ 'Task Number 1' │ 'Completed' │
└─────────┴─────────────────┴─────────────┘
Enter task number to be deleted: 0                                                             
Task has been deleted successfully! 
```
```cmd
1. Add a Task
2. View Tasks
3. Mark task as done
4. Delete Task
5. Exit
Choose Option: 5
GoodBye!
```
## License
This project is licensed under the MIT License.
