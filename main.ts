 
import inquirer from "inquirer";


 let todos: string [] = ["minal","zaid","kamran"];

 //async function createTodo(todos: string []){
    do{     
    
 let ans = await inquirer.prompt(
    {
        name: "select",
        type: "list",
        message:  "select one operator",
        choices: ["add","update","view","delete"]
    }
 )
  if(ans.select == "add"){
    let addTodo = await inquirer.prompt (
        {
            type: "input",
            message: "Add items in todos",
            name: "items"
        }
    );
     todos.push(addTodo.items)
    console.log(todos);
   }
  if(ans.select == "update"){
    let updateTodo = await inquirer.prompt (
        {
            name: "todo",
            type: "list",
            message: "select items to update...",
            choices: todos.map(items => items)
        }
    );
    let addTodo = await inquirer.prompt (
        {
            type: "input",
            message: "Add items in todos",
            name: "items"
        });
   let   newTodos = todos.filter(val => val !==  updateTodo.todo)
   todos  = [...newTodos,addTodo.items]
   console.log(todos)

    
  }
  if(ans.select == "view"){
    console.log(todos)
   }
  if(ans.select == "delete"){
    let deleteTodo = await inquirer.prompt(
        {
            name: "todo",
            type: "list",
            message: "delete  your items list...",
            choices: todos.map(items => items)
        })
       let   newTodos = todos.filter(val => val !==  deleteTodo.todo)
       todos = [...newTodos]
       console.log(todos);
    } 
  }
  while (true) 


// }

           

          
    
    
 
    

 