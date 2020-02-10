const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-square";
const UNCHECK = "far fa-square";
const LINE_THROUGH = "lineThrough";

let LIST,id;

let data = localStorage.getItem("TODO");

if(data){
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
}
else{
    LIST = [];
    id = 0;
}

function loadList(array){
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash)
    });
}


function addToDo(toDo, id, done,trash){

    if(trash){
        return;
    }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH: "";

       const item = `<li class="item">
       <i class="fa ${DONE} co" job="complete" id="${id}"></i>
       <p class="text ${LINE}">${toDo}</p>
       <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
   </li>`;
        

        const position = "beforeend";    

        list.insertAdjacentHTML(position, item);
}


function completeToDo(element){
    element.classList.toggle(CHECK);  
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done =LIST[element.id].done ? false : true;
}

function deleteToDo(element){
     element.parentNode.parentNode.removeChild(element.parentNode);

     LIST[element.id].trash = true;
}



list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        deleteToDo(element);
    }

    localStorage.setItem("TODO", JSON.stringify(LIST));
})



document.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo,id, false, false); 

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });

            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }

        input.value ="";

        if(toDo == ""){
            alert("The field cannot be empty")
        }
    }
})

btn.addEventListener("click", function(){
    const toDo = input.value;
    if(toDo){
        addToDo(toDo,id, false, false); 

        LIST.push({
            name : toDo,
            id : id,
            done : false,
            trash : false
        });

        localStorage.setItem("TODO", JSON.stringify(LIST));

        id++;
    }

    input.value ="";

    if(toDo == ""){
        alert("Field can't be a blank!!!")
    }
    
});


document.addEventListener("keyup", function(event){
    if(event.keyCode == 46){
        localStorage.clear();
        local.reload();
    }
})