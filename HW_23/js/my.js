const API =  `https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes`

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



let formHeroes = document.querySelector(`#formHeroes`)
let tableHeroes = document.createElement(`table`)
const renderTable = () => {
    
    tableHeroes.innerHTML = (`<thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Comics</th>
                                    <th>Favourite</th>
                                    <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody></tbody>`)
    formHeroes.append(tableHeroes)
}

renderTable()





const renderHeroes = obj => {
    let tr = document.querySelector(`tbody`);
    
    tr.innerHTML = `<td>${obj.name}</td>
    <td>${obj.comics}</td>
    <td>${obj.favourite}</td>`;
    
    tableHeroes.append(tr);
    
}

const renderStorageHeroes = async () => {
    let tasks = await controller(API);
    tasks.map(task => renderHeroes(task));
}
renderStorageHeroes();




