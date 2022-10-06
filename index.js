document.querySelector('#add').onclick=function(){
    if(document.querySelector('#input-container input').value.length == 0){
        alert("Enter Any Task!!!");
    }
    else{
        document.querySelector("#list").innerHTML += `
            <div class=task>
                <span id="taskname">
                    ${document.querySelector('#input-container input').value}
                </span>
                <button id="delete">delete</button>
            </div>
        `;
        var current_tasks= document.querySelectorAll("#delete");
        for(var i=0 ; i<current_tasks.length; i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        var list = document.querySelectorAll(".task");
        for(var i=0 ; i<list.length ; i++){
            list[i].onclick=function(){
                this.classList.toggle('done');
            }
        }
        document.querySelector("#input-container input").value = "";
    }
}

