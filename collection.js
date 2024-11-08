var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
  var enteredValue = event.target.value.toUpperCase()

  for(count=0;count<productList.length;count=count+1)
  {
    var productname = productlist [count].querySelector("p").textContent
    if(productname.toUpperCase().indexOf(enteredValue)<0)
    {
    productlist [count].style.display="none"
    }
    else{
    productlist [count].style.display="block"
      }
  }
})