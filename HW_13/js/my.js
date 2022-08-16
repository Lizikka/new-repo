const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
  }; 
  
  const newObj = {};
 
  function  connect (object) {
    
    for ( let key in object) {
        if (typeof obj[key] === `object`){

            for ( let keyObj in object[key]) {
                newObj[keyObj] = object[key][keyObj]
            }
        }  else {
            newObj[key] = obj[key];
        }
        
        
    }
   return (newObj)        
  };
  connect(obj) ;
  console.log(newObj) ;
  

//   function convert(list) {
//     let newObj = {};

//     for (let key in list) {
//         if (typeof(list[key]) === 'object') {

//             for(let childKey in list[key]) {
//                 newObj[childKey] = list[key][childKey];
//             }
//         } else {
//             newObj[key] = list[key];
//         } 
//     }
//     return newObj;
// }