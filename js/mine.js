var productNameInp = document.getElementById("productName");       //get productName 
var productpriceInp = document.getElementById("productPrice");     //get productprice
var productCompanyInp = document.getElementById("productCompany"); //get productCompany
var productDescInp = document.getElementById("productDesc");       //get productDesc
var theBtn = document.getElementById("myBtn");                     //get btn 
var productscontainer                                              //set products containetr 


if(localStorage.getItem("productsContainer") == null)   //check local storage
{
    //reset the array if localstore is null
    var productscontainer = []                                        
}
 //if localstore isn't null set the array with the data in it 
else{
   productscontainer= JSON.parse(localStorage.getItem("productsContainer"))
   // display the data 
   displayData()
}

//on click event 
theBtn.onclick = function(){
    addproduct();
    clearForm();
}

function addproduct(){
    // set product object with input data
    var product = {
        Name : productNameInp.value,
        Price : productpriceInp.value,
        Company : productCompanyInp.value,
        Desc : productDescInp.value
    
    }
    //push  product object to the array
    productscontainer.push(product)
    // store the data in local storage
    localStorage.setItem("productsContainer",JSON.stringify(productscontainer))
    displayData()
}
 // display function 
function displayData(){
    var col = "";
    for(var i=0 ; i< productscontainer.length; i++){

         col += '<div class="col-md-3"><div class="product"><h3>'+productscontainer[i].Name+
         '</h3><p>'+productscontainer[i].Price+
         '</p><p class="text-success">'+productscontainer[i].Company+
         '</p><p class="text-info">'+productscontainer[i].Desc+
         '</p><button class="btn btn-danger mt-3 " onclick= "deletpro('+i+')" >Delete</button></div></div>'
                         
    }
    document.querySelector(".row").innerHTML = col
    
}

function clearForm(){
   productNameInp.value=" "       // reset inputs
   productpriceInp.value=" "      // reset inputs
   productCompanyInp.value=" "    // reset inputs
   productDescInp.value=" "       // reset inputs

}
// delete function
function deletpro(id){
    productscontainer.splice(id,1) //cut this id frome the array
    localStorage.setItem("productsContainer",JSON.stringify(productscontainer)) //after  store new data
    displayData()
}
