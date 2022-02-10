var products =[

    //books
    {
        P_name:"Wings of Fire",
        p_cost: 189,
        p_img:'imgs/admin.jpeg'

    },
    {
        P_name:"Modern History",
        p_cost: 349,

    },
    {
        P_name:"Rich Dad Poor Dad",
        p_cost: 180,

    },
    {
        P_name:"To Kill A Mockingbird",
        p_cost: 170,

    },
    //watches
    //4
    {
        P_name:"David Miller DMRCM314 PU Analog Men's Watch",
        p_cost: 259,

    },
    {
        P_name:"David Miller DMRCM314 PU Analog Men's Watch",
        p_cost: 349,

    },
    {
        P_name:"Lois Caron LCS-8189 Stainless Steel Analog Men's Watch",
        p_cost:339
    },
    {
        P_name:"Lois Caron LCS-8190 Stainless Steel Analog Men's Watch",
        p_cost:329
    },
    //mob
    //8
    {
        P_name:"Mi 11X 5G Cosmic Black 6GB RAM 128GB",
        p_cost:27999
    },
    {
       P_name:"OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)",
       p_cost:24999
    },
    {
       P_name:"OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage)",
       p_cost:12999
    },
    {
       P_name:"OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage)",
       p_cost:16999
    },
    {
       P_name:"realme narzo 50A (Oxygen Green , 4GB RAM + 64 GB Storage)",
       p_cost:11499
    },



]
// localStorage.clear()

// var datas = JSON.parse(localStorage["mydatas"]);

function addToCart(i){
    alert("item added")
    // window.location.reload();
   
    var cart = new Array()
    cart= JSON.parse(localStorage.getItem("cart"));
    //console.log(cart);
   
    if(cart==null)
    {
        cart=new Array();
        cart.push(products[i]);
        
    }else{
        cart.push(products[i])

    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);

    totalItems()

}

function getCart(){

    // var cartItem = new Array()
    cart = JSON.parse(localStorage.getItem("cart"))
   console.log(cart);
    // return "<h1>No Items</h1>"

    if(cart == null){

        return "<h1>No Items</h1>"
        
    }
    else{
        let html="";
        for(let i=0;i<cart.length;i++)
        {
            // console.log(i);
          html= html+ `
          <div class="card" style="width: 48rem;">
            <div class="card-body">
                <h5 class="card-title ml-5">${cart[i].P_name}</h5>
                <h6 class="card-subtitle mb-2 ml-5">${cart[i].p_cost}</h6>
                
                
            </div>
            
          </div>       
         `
        }
        return html;         
    }
}






function total(){
let cartTotal = 0;
 let price = 0;
//  JSON.parse(localStorage.getItem("cart"))
   
 cart = JSON.parse(localStorage.getItem("cart"))
//    console.log(cart);
    // return "<h1>No Items</h1>"

    if(cart == null){

        return 
        
    }
      
    for(let i=0;i<cart.length;i++)
    {
        // console.log(cart[i].p_cost);

        cartTotal=cartTotal+cart[i].p_cost
          
     }
    //  console.log(cartTotal);

     return cartTotal;

    }



    
    function totalItems(){
   
       
     cart = JSON.parse(localStorage.getItem("cart"))
    
    
        if(cart == null){
    
            return 0
            
        }else

            // return cart.length
            document.getElementById("badge").innerText=cart.length
    
        }
    
    //   console.log(totalItems());  




    

totalItems()













// ==================LOGIN===========================
function login(form)
{
 if(form.uname.value == "admin" && form.upwd.value == "admin")
  {
    alert("login successful")
    window.open('index.html')
  }
 else
 {
   alert("Error Password or Username")
  }
}