import readline from "readline";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

//manually create __dirname (since not supported by ES Module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = "tasks.json";
const CURR_PATH = path.join(__dirname,FILE_PATH);

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.setPrompt(
    "\n1. Add a Task\n2. View Tasks\n3. Mark task as done\n4. Delete Task\n5. Exit\nChoose Option: "
);

const handleMenu = async (choice)=>{
    switch (choice) {
        case '1':
            r1.question("Enter the task: ",(task)=>{
                addTask(task);            
            })            
            break;
        case '2':
            viewTasks();
            break;
        case '3':
            await viewTasks();
            r1.question("Enter task number to be marked as completed: ",(id)=>{
                updateTask(id);
            })
            break;
        case '4':
            await viewTasks();
            r1.question("Enter task number to be deleted: ",(id)=>{
                deleteTask(id);
            })
            break;
        case '5':
            r1.close();
            break;
        default:
            console.log("Enter valid option number!");
            r1.prompt();
            break;
    }
}

const fileExists = async() =>{
    try {
        await fs.access(CURR_PATH,fs.constants.F_OK);
        return true;
    } catch (error) {
        return false;
    } 
}

// for json:
// 1. JSON.parse(data) --> convert JSON str to JS Object
// 2. JSON.stringify(data) --> convert JS Object to JSON

const addTask = async(task)=>{
    //see if file exists else create file with []
    if(! await fileExists()){
        try {
            //creating new file with []
            await fs.writeFile(CURR_PATH,"[]");
            console.log("File created!");
        } catch (error) {
            console.error(`Error creating the file: ${error}`);
            return;
        }
    }
    try {
        const data = await fs.readFile(CURR_PATH,"utf-8");
        let arr = JSON.parse(data);
        arr.push({"task":task,"status":"Pending"});
        await fs.writeFile(CURR_PATH,JSON.stringify(arr,null,2));  
        console.log(`Task "${task}" has been successfully added!`);
        r1.prompt();
    } catch (error) {
        console.error(`Error handling the file: ${error}`);
        return;
    }    
};

const viewTasks = async () =>{
    let arr;
    try {
        const data = await fs.readFile(CURR_PATH,"utf-8");
        arr = JSON.parse(data);
    } catch (error) {
        console.error(`Error reading from the file: ${error}`);
        return;        
    }
    if(arr.length===0){
        console.log("You have not entered any task yet!");
        return;
    }
    console.log("Tasks:");
    console.table(arr);
    r1.prompt();
}

const updateTask = async(id)=>{
    let arr;
    try {
        const data = await fs.readFile(CURR_PATH,"utf-8");
        arr = JSON.parse(data); 
        arr[id]["status"]="Completed";
        await fs.writeFile(CURR_PATH,JSON.stringify(arr,null,2));
        console.log(`Task has been updated successfully!`);
    } catch (error) {
        console.error(`Error updating the file: ${error}`);
        return;        
    }    
    r1.prompt();
}

const deleteTask = async(id)=>{
    let arr;
    try {
        const data = await fs.readFile(CURR_PATH,"utf-8");
        arr = JSON.parse(data); 
        arr.splice(id,1);
        await fs.writeFile(CURR_PATH,JSON.stringify(arr,null,2));
        console.log(`Task has been deleted successfully!`);
    } catch (error) {
        console.error(`Error updating the file: ${error}`);
        return;        
    }    
    r1.prompt();
}

r1.on("line", handleMenu);
r1.on("close",()=>{
    console.log("GoodBye!");
})

r1.prompt();



