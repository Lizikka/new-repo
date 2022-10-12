const jokesCategories = document.querySelector(`#jokesCategories`)
const jokesList = document.querySelector(`#jokesList`)

const getFile = url => fetch(url)
    .then(data => data.ok ? data.json (): Promise.catch(data.statusText))
    .catch(err => console.log(`In catch: ${err}`));



const renderFormCats = () => {
    let cats = getFile(`https://api.chucknorris.io/jokes/categories`)
        .then(cats => jokesCategories.innerHTML = cats
            .map(cat => `<option value="${cat}">${cat}</option>`)
            .join(``)
        )
}
renderFormCats()



jokesCategories.addEventListener(`change`, ()=>{
    getFile(`https://api.chucknorris.io/jokes/random?category=${jokesCategories.value}`)
        .then(data => {
            document
                .querySelector(`option[value="${jokesCategories.value}"]`)
                .setAttribute("disabled", true);

            const li = document.createElement(`li`);
            li.innerHTML = `<p>Category: <b>${data.categories[0]}</b></p>
            <p>${data.value}</p>`;

            const removeBtn = document.createElement(`button`);
            removeBtn.innerHTML = `Remove joke`;
            removeBtn.addEventListener(`click`, ()=>{
                li.remove();
                document
                    .querySelector(`option[value="${data.categories[0]}"]`)
                    .removeAttribute("disabled");
             });

             li.append(removeBtn);

             jokesList.append(li);

        })
        .catch (err => console.log(err))

});

// const API =  `https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes`

// const controller = async (url, method=`GET`, obj) => {
//     let options = {
//         method: method,
//         headers: {
//             "Content-type": "application/json"
//         }
//     }

//     if(obj) options.body = JSON.stringify(obj);

//     let request = await fetch(url, options),
//         response = request.ok ? request.json() : Promise.reject();

//     return response;
// }



// let formHeroes = document.querySelector(`#formHeroes`)
// let tableHeroes = document.createElement(`table`)
// const renderTable = () => {
    
//     tableHeroes.innerHTML = (`<thead>
//                                     <tr>
//                                     <th>Name</th>
//                                     <th>Comics</th>
//                                     <th>Favourite</th>
//                                     <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody></tbody>`)
//     formHeroes.append(tableHeroes)
// }

// renderTable()





// const renderHeroes = obj => {
//     let tr = document.querySelector(`tbody`);
    
//     tr.innerHTML = `<td>${obj.name}</td>
//     <td>${obj.comics}</td>
//     <td>${obj.favourite}</td>`;
    
//     tableHeroes.append(tr);
    
// }

// const renderStorageHeroes = async () => {
//     let tasks = await controller(API);
//     tasks.map(task => renderHeroes(task));
// }
// renderStorageHeroes();