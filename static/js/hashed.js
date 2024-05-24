// var productNameInput = document.getElementById("productNameInput");
// var productPriceInput = document.getElementById("productPriceInput");
// var productCategoryInput = document.getElementById("productCategoryInput");
// var productDescreptionInput = document.getElementById("productDescreptionInput");
// var productsList = [];

// if (localStorage.getItem("myProducts") == null)
// {
//     productsList = [];
// }
// else
// {
//     productsList = JSON.parse(localStorage.getItem("myProducts"));
//     displayProducts();
// }


// function addProduct()
// {
//     var product =
//     {
//         name:productNameInput.value ,
//         price:productPriceInput.value,
//         category:productCategoryInput.value,
//         descreption:productDescreptionInput.value
//     }
//     productsList.push(product);
//     localStorage.setItem("myProducts", JSON.stringify(productsList));
//     displayProducts();
// }

// function displayProducts()
// {
//     var container = "";

//     for (var i = 0; i < productsList.length; i++)
//     {
//         //var productName = productsList[i].name.slice(1,productsList[i].name.length);
//         container +=
//         `<tr>
//         <td>` + i + `</td>
//         <td>` + productsList[i].name + `</td>
//         <td>` + productsList[i].price + `</td>
//         <td>` + productsList[i].category + `</td>
//         <td>` + productsList[i].descreption + `</td>
//         <td><button class="btn btn-warning">update</button></td>
//         <td><button onclick="deleteProduct(`+i+`)" class="btn btn-danger">delete</button></td>
//         </tr>`
//     }
//     document.getElementById("tableBody").innerHTML = container;
// }

// function searchProducts(term)
// {
//     var box = ``;
//     var boxResult = ``;
//     var newText = ``;
//     for ( var i = 0; i < productsList.length; i++)
//     {
//         if (productsList[i].name.includes(term.trim()))
//         {
//             box +=
//             `<tr>
//             <td>` + productsList[i].name + `</td>
//             <td>` + productsList[i].price + `</td>
//             <td>` + productsList[i].category + `</td>
//             <td>` + productsList[i].descreption + `</td>
//             </tr>`
//             newText = productsList[i].name.replace(term, '<span style="color: red">'+ term +'</span>')
//             boxResult += `<p>` + newText + `</p>`   
//         }
//     }
//     document.getElementById("tableBody").innerHTML = box;
//     document.getElementById("searchResults").innerHTML = boxResult;
// }

// function deleteProduct(index)
// {
//     productsList.splice(index,1);
//     productsList = JSON.parse(localStorage.getItem("myProducts"));
//     displayProducts();
// }

