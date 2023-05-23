const text = document.getElementById('text');
const tbody = document.getElementById('tbody');
const button = document.getElementById('button');
let row;
const taskUrl = "https://parseapi.back4app.com/classes/Task";


const headers = {
    "X-Parse-Application-Id": "YJiULFab1a0YVgpLyWHVeCqILYVZAcJ4uhDkDYlp",
    "X-Parse-REST-API-Key": "yrV3gCZNMUuft5rx7iHCA19Q0JALmh6i4J07hgzu"
};


const getTasks = () =>{
    fetch(taskUrl, { headers: headers })
        .then((res) => res.json())
        .then((data) => {
            createTable(data);
        });

};

const atualizeTasks = (id, data) => {

    const check = (data) ? true : false;

    const params = {
        method: "PUT",
        headers:{
            ...headers,
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ Done: check })
    };

    fetch(taskUrl + `/${id}`, params)
        .then(() => {
            getTasks();
        })
};


const postTasks = () =>{
    
    const params = {
        method: 'POST',
        headers:{
            "X-Parse-Application-Id": "YJiULFab1a0YVgpLyWHVeCqILYVZAcJ4uhDkDYlp",
            "X-Parse-REST-API-Key": "yrV3gCZNMUuft5rx7iHCA19Q0JALmh6i4J07hgzu",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            Description: text.value,
            Done: false,
        })
    };

    fetch(taskUrl, params)
    .then(() => {
        getTasks();
    })
}
button.onclick = postTasks;


const createTable = (data) => {
    tbody.innerHTML = '';
    for (let i = 0; i < data.results.length; i++) {
        const listTaskDescription = document.createElement("td");
        const listStatus = document.createElement("td");
        const check = document.createElement("input");
        const deleteButton = document.createElement("button")
        const taskId = data.results[i].objectId;
        listStatus.id = taskId;

        deleteButton.innerHTML = `X`

        deleteButton.addEventListener("click", function (event){
            const idToDelete = event.target.parentNode.id;
            deleteTask(idToDelete);

        })

        check.type = "checkbox";
         // Armazena o objectId da tarefa no atributo "data-task-id" do checkbox
        check.checked = data.results[i].Done == true

        check.addEventListener("change", function () {
            atualizeTasks(taskId, check.checked);
        });
            
        const description = document.createTextNode(data.results[i].Description);

        listTaskDescription.appendChild(description);
        listStatus.appendChild(check);
        listStatus.appendChild(deleteButton);

        row = document.createElement("tr");
        row.appendChild(listTaskDescription);
        row.appendChild(listStatus);

        tbody.appendChild(row);
    }
    
};

const deleteTask = (id) =>{
    const params = {
        method: "DELETE",
        headers:{
            ...headers,
        },
    };

    fetch(taskUrl + `/${id}`, params)
        .then(() => {
            getTasks();
        })
}



        
getTasks();




