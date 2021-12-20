var aa={}

function addDetails()
{
var t=parseInt(prompt("Enter the number of products"))
for(let i=0;i<t;i++)
{
var a=prompt("Enter the product name")
var b=parseFloat(prompt("Enter the product price",10))
b=Number(b)
while (Number.isNaN(b)){
    alert("Please enter valid price")
    b=parseInt(prompt("Enter the product price"))
}
aa[a]=b

}

//document.write(aa)
console.log(aa)
}


 function checkDetails()
 {
    var sum=0
    
     for(var key in aa)
     {
         sum += aa[key]
     }
     console.log(sum)
  
    
     document.getElementById("disp").innerHTML="total budget :"+sum
    }
      
    