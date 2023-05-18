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
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        tbody.innerHTML = '';
        getTasks();
    })
}
button.onclick = postTasks;


const createTable = (data) => {
    for(i=0; i < data.results.length; i++){
        const listId = document.createElement("td");
        const listTaskDescription = document.createElement("td");
        const listStatus = document.createElement("td");

        const id = document.createTextNode(data.results[i].objectId);
        const description = document.createTextNode(data.results[i].Description);
        const statusTask = document.createTextNode(data.results[i].Done);

         
        listId.appendChild(id);
        listTaskDescription.appendChild(description);
        listStatus.appendChild(statusTask);

        row = document.createElement("tr");
        row.appendChild(listId);
        row.appendChild(listTaskDescription);
        row.appendChild(listStatus);

        tbody.appendChild(row);
        }
        
    }
        
getTasks();




