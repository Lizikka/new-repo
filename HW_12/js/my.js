

const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
   ];



users.forEach(item => `${item.forEach(item => `${item}!`)}`);

let anotherArray = users.map(item => `${item.map(item => `${item}?`)}`);
console.log(anotherArray);

const TABLE_THEAD = [`Name`,`Comand`,`Score`, `Data`];

let filteredArr = users.filter( item=> item[1] === `red` );

const renderThead = list =>{
    return `<thead>
        <tr>
            ${list.map(item => `<th>${item}</th>`).join(``)}
        </tr>
</thead>`
};
const renderTbody = list => {
    return `<tbody>
    ${
      list
          .map(country =>`<tr>
              ${country.map(item => `<td>${item}</td>`).join(``)}
          </tr>`)
          .join(``)
  }
</tbody>`
};

const countryTable = (thead, data) => {

let scoreSum = data 
                  .map(country => country[2])   
                  .reduce((sum, item) => sum+item)

let table = `<table>
        ${renderThead(thead)}
        ${renderTbody(data)}
        <tfoot>
            <tr>
                <td>Total score:</td>
                <td>${scoreSum}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>`
    document.write(table)
};
countryTable( TABLE_THEAD, filteredArr);