
const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io`;


const nameHero = document.querySelector(`#nameHero`)
const createHeroes = document.querySelector(`#formHeroes`)
const selectComics = document.querySelector(`#selectComics`)
const checkFavourite = document.querySelector(`#checkFavourite`)

const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.reject();

    return response;
}

const renderComics = async () => {
    try{
        let reporters = await controller(API+`/universes`);
        selectComics.innerHTML = reporters
            .map(item => `<option value="${item.name}">${item.name}</option>`)
            .join(``);
        
    } catch(err){}
}
renderComics();




createHeroes.addEventListener(`submit`, async e=>{
    e.preventDefault();

    let newTask = {
        name: nameHero.value,
        comics: selectComics.value,
        favourite: 
        
        
        

        
    }

    let storageTasks = await controller(API+`/heroes`);
    let assigneeAlreadyBusy = storageTasks.find(task => task.name === newTask.name);
    
    if(assigneeAlreadyBusy){
        console.log(`Hero ${newTask.name} already created 🥵.`);
        return;
    } else{
        let taskAdded = await controller(API+`/heroes`, `POST`, newTask);
        renderHeroes(taskAdded);
    }

})




const renderTable = () => {
    let tableHeroes = document.createElement(`table`);
    tableHeroes.id = `tableHeroes`;
    tableHeroes.innerHTML = `<thead>
        <tr>
            <th>Name</th>
            <th>Comics</th>
            <th>Favourite</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody></tbody>`;

    document.body.append(tableHeroes);
}

const renderHeroes = obj => {
    const tbody = document.querySelector(`#tableHeroes tbody`);

    const tr = document.createElement(`tr`);
    
    tr.innerHTML = `<td>${obj.name}</td>
    <td>${obj.comics}</td>`;

    let tdFavourite = document.createElement(`td`);
   
    // create favourite checkbox
    let favInput = document.createElement("input");
    favInput.type = "checkbox";
    favInput.checked = obj.favourite;

    tdFavourite.append(favInput);

    let tdBtn = document.createElement(`td`);
    let btnDelete = document.createElement(`button`);
    btnDelete.innerHTML = `Delete`;
    btnDelete.addEventListener(`click`, async ()=>{
        await controller(API+`/heroes/${obj.id}`, `DELETE`);
        tr.remove();
    })

    tdBtn.append(btnDelete);

    tr.append(tdFavourite, tdBtn);
    
    tbody.append(tr);

    favInput.addEventListener(`change`, ()=>{
        controller(API+`/heroes/${obj.id}`, `PUT`);
        obj.favourite
    })
        
        
}



const renderStorageHeroes = async () => {
    let heroes = await controller(API+`/heroes`);
    if(heroes.length){
        renderTable(); // тільки якщо в базі є герої, то ренедеримо табличку на сторінку
        heroes.forEach(hero => renderHeroes(hero));
    }
}

renderStorageHeroes();




