const main = document.querySelector("#main-content")
console.log(main)

const taskForm = document.querySelector("#create-task-form")
const tasklist = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
    e.preventDefault()
   const newTask = document.querySelector("#new-task-description").value

   tasklist.innerHTML += `
   <li> ${newTask}
   <button> x for delete </button>

    </li>
   `



   
   //tasklist.appendChild(taskItem)
   taskForm.reset()
})

tasklist.addEventListener("click", function(e){
    console
})




