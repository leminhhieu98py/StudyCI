let inputData = document.getElementById("input-data");
let addBtn = document.getElementById("add-btn");
let footer = document.getElementById("footer");
let toDoTask = document.getElementsByClassName("to-do-task");
let checkbox = document.getElementsByClassName("checkbox");
let taskContent = document.getElementsByClassName("task-content");
let deleteBtn = document.getElementsByClassName("delete-btn");
let noThing = document.getElementById("nothing");

// thêm những việc sẽ diễn ra khi click nút Delete
function deleteTodoTask() {
        deleteBtn[toDoTask.length - 1].addEventListener("click", (e) => {
            // check
            // console.log(e.target.parentElement);
            e.target.parentElement.remove();
        });
}

// thêm những việc sẽ diễn ra khi click checkbox
function checkboxHandle(){
    let state = true;
    checkbox[checkbox.length - 1].addEventListener('click', (e) =>{
        if(state){
            e.target.parentElement.children[1].style.cssText = "text-decoration: line-through; color: grey";
            state = !state;
        }else{
            e.target.parentElement.children[1].style.cssText = "text-decoration: none; color: black";
            state = !state;
        }
        
    })
}

// thêm những việc sẽ diễn ra khi click nút Add
addBtn.addEventListener("click", () => {
    // check
    // console.log(inputData.value);
    // hiện thị to do task
    footer.insertAdjacentHTML("beforeend", `
    <div class="checkboxs">
        <label class="to-do-task"><input style = 'margin: 0 20px;' type="checkbox" value="" class="checkbox"><input type="text" value="${inputData.value}" class = "to-do-tasks"><button class="delete-btn">Delete</button></label>
    </div>
    `);
    // reset data và ẩn dòng thông báo "Nothing to do now!"
    inputData.value = "";
        noThing.style.display = "none";
    // delete
    deleteTodoTask();
    // update stt
    checkboxHandle();
});


// thêm sự kiện bấm Enter sẽ tương đương với việc bấm vào nút Add
inputData.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    addBtn.click();
}
});

