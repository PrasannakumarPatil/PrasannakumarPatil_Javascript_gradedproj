let input = document.getElementById("input");
let todolist = document.getElementById("list");

let list = [];

function del( i ) {
    list.splice( i, 1 );
    console.log( list );
    loadList();
}

function edit( i ) {
    var txt = prompt("Enter updated ToDo: ");
    list.splice( i, 1, txt );
    console.log(list);
    loadList();
}

function loadList() {
    todolist.innerHTML="";
    for (var i = 0; i < list.length; i++) {
        let todo = document.createElement('div');
        todo.className = 'todo';

        let desc = document.createElement('span');
        desc.className = 'desc';
        desc.textContent = list[i];

        let editB = document.createElement('span');
        editB.innerHTML = `
            <button class="edit" onclick="edit( ${i} )">Edit</button>
        `;

        let delB = document.createElement('span');
        delB.innerHTML = `
            <button class="del" onclick="del( ${i} )" data-index="0">Delete</button>
        `;

        todo.appendChild(desc);
        todo.appendChild(editB);
        todo.appendChild(delB);

        todolist.appendChild(todo);
    }
}

function add() {
    txt = input.value;
    if (txt !== "") {
        list.push( txt );
        input.value = "";
        loadList();
    }
}

loadList();