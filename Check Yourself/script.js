(function(){
'use strict'

fetch('products.json')
  .then(response => response.json())
  .then(data => {

    data.forEach(item => {
        // Create a new div element for each item
        const div = document.createElement('div');
        div.classList.add('item'); 

        div.innerHTML = `
        <p><strong>Day:</strong> ${item.Day}</p>
        <p><strong>Exercise:</strong> ${item.Exercise}</p>
        <p><strong>Intensity:</strong> ${item.Intensity}</p>
        <p><strong>Duration:</strong> ${item.Duration}</p>
        <p><strong>Enjoyment:</strong> ${item.Enjoyment}</p>
      `;

      document.body.appendChild(div);
    });
    // Data loaded successfully, you can use it here
//     console.log(data); // Display data in console for verification
//   })
//   .catch(error => {
//     console.error('Error loading the JSON file:', error);

  });

// fetch("products.json")
// .then (function(response){
//     return response.json
// })

// .then (function(products){
//     let placeholder = document.querySelector("#data-output");
//     let out = "";
//     for(let product of products){
//         out += `
//                 <tr>
//                     <td> <img src '${product.image}'</td>
//                     <td>'${product.days}'</td>
//                     <td>${product.exercise}</td>
//                     <td>${product.activity}</td>
//                     <td>${product.enjoyment}</td>
//                 </tr>
//                 `;
//     }
// })
// function exercise (name, days, frequency){
//     this.name 
// }

// var exercise = {
//     name: ["running","calisthenics", "weightlifting", "running"],
//     days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Rest"],
//     time: ["30mins","1 hour","2 Hours"]
// }

// exercise.name = [0];
// exercise.days = [1,3,4];
// exercise.time = [2]
}());