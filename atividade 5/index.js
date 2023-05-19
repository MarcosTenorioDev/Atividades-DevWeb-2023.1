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

const atualizeTasks = (id, data) =>{
    let check = (data.results.done) ? false : true;

    const params = {
        method: "PUT",
        headers,
        body: JSON.stringify({done: check})
    };

    fetch(taskUrl+`/${id}`, params)

    getTasks;
}

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
        getTasks();
    })
}
button.onclick = postTasks;


const createTable = (data) => {
    console.log(data);
    tbody.innerHTML = '';
    for(i=0; i < data.results.length; i++){
        const listTaskDescription = document.createElement("td");
        const listStatus = document.createElement("td");
        const check = document.createElement("input")
        check.type = "checkbox"

        const description = document.createTextNode(data.results[i].Description);
        const statusTask = document.createTextNode(data.results[i].Done + "  ");
        
         
        listTaskDescription.appendChild(description);
        listStatus.appendChild(statusTask);
        listStatus.appendChild(check)

        row = document.createElement("tr");
        row.appendChild(listTaskDescription);
        row.appendChild(listStatus);

        tbody.appendChild(row);
        }
        
}


        
getTasks();




