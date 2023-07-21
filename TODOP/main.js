

var list =document.getElementById('task-item')
var input =document.getElementById('m-input');
//body
var body= document.getElementById('body')
// console.log(body)

var submitBtn = document.getElementById('m-btn');

//event listner: hitting enter key
input.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        event.preventDefault();
        addToDo();
    }
})

// submit button
submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    addToDo();   
})
function addToDo() {
    const task=input.value;
    //check if something is presnt in field
    if (task !='') {
        var item=`<div class="task-item">
        <input type="checkbox" id="task-${list.childElementCount + 1}">
        <label for="task-${list.childElementCount + 1}">${task}</label><span class="delete-btn">✖</span>
        </div>`
        list.innerHTML+= item;
        input.value=''; //empty input field
    }
}
//delete butn
list.addEventListener('click', function(event) {
    var deleteBtn = event.target.closest('.delete-btn');
    if (deleteBtn) {
      var listItem = deleteBtn.parentNode;
      listItem.remove();
    }
  });
  