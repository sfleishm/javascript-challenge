// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// console.log(data)
// YOUR CODE HERE!

data.forEach(function(ufo) {
    // console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        // console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});


// TREAD CAREFULLY THIS DIDN'T WORK 


// console.log('hi');

// function myFunction() {
//   // Declare variables
//   console.log('hi');
//   var input, filter, table, tr, td, i, txtValue;
//   input = d3.select("datetime");
//   filter = input.value.toUpperCase();
//   table = d3.select("ufo-table");
//   tr = table.getElementsByTagName("tbody").children;

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

// myFunction;
// var filterSearch = d3.select(".form-control");
// var inputStuff = filterSearch.property("value");

// var filterSearch = d3.select(".form-control");
// // var inputSelect = d3.select(".form-control");
// filterSearch.on("change", function(dateFilter) {
//     var inputStuff = filterSearch.property("value");
//     function filterD(date) {
//         return date.datetime == inputStuff
//     };    
//     var fD = data.filter(filterD);
//     console.log(fD);
    
//     };    
// });

// function filterD(date) {
//     return date.datetime == inputStuff;
// };

// var fD = data.filter(filterD);
// console.log(fD);

// var filterSearch = d3.select(".form-control");
// // var inputSelect = d3.select(".form-control");
// filterSearch.on("change", function(dateFilter) {
//     var inputStuff = filterSearch.property("value");
//     if (inputStuff == data.datetime) {
//         var filteredStuff = tableData.filter(dateFilter);
//         console.log(filteredStuff);
//     }

//     console.log(inputStuff);
// })


// console.log(filteredStuff);
// console.log(inputSelect.value);

// function dateFilter(date) {
//     if 
// }
// function myFunction() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("datetime");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("ufo-table");
//     tr = table.getElementsByTagName("tr");
  
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }

// Testing Stuff Down Here Beware 

// // Get input element
// let filterInput = document.getElementById('filterInput');
// // Add event listener
// filterInput.addEventListener('keyup', filterNames);

// function filterNames(){
//     // Get value of input
//     let filterValue = 
//     document.getElementById('filterInput').value;

//     let 
// }
