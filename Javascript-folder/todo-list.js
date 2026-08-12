let todoList = [
   {name:'Go to Japan',
   dueDate:'2028-07-07'} ];
   
renderTodoList()

 function renderTodoList(){
   let todoListhtml = '';
   for (let i = 0; i < todoList.length; i++) {
      const element = todoList[i];
      let name = element.name
      let dueDate = element.dueDate
      const html = `<div class="name"> ${name} </div>
         <div> ${dueDate} </div>
         <button class="delete-btn js-dlt-btn">Delete</button> `;
      todoListhtml +=  html;
   }
   document.querySelector('.js-render-list').innerHTML = todoListhtml

   document.querySelectorAll('.js-dlt-btn').forEach((deletebtn,i) => {
      deletebtn.addEventListener('click',()=> {
         todoList.splice(i,1)
         renderTodoList()
      })
   })

}

document.querySelector('.js-add-btn').addEventListener('click',() => {
   addTodo()
})

function addTodo(){
   let todo = document.querySelector('.input-todo');
   let name = todo.value;
   let dateElem = document.querySelector('.js-due-date');
   let dueDate = dateElem.value

   todoList.push({ 
      name:name,
      dueDate:dueDate
   });
   todo.value = ''
   renderTodoList()
}
