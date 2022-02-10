class Myheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        
        <header > 
        <nav class="navbar navbar-expand-lg fixed-top  navbar-light bg-light py-3"  >
            <div class="container-fluid" >
              
                <div class="navbar-brand" style="cursor: pointer;margin-left:70px;">
                <a class="navbar-brand" href="#" >E-Shop</a>
                  
                </div>
    
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="index.html" aria-current="page">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="mobiles.html" aria-current="page">Mobiles</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link "   href="books.html" aria-current="page" href="index.html" >Books</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link "  href="watches.html" aria-current="page"  >watches</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"  ></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link "   href="#"></a>
                  </li>
                 

                  <li>
                  <form class="d-flex " style="margin-left:70px;">
                     <input class="form-control me-2" type="search" onkeyup="search_words()" placeholder="Search"  aria-label="Search">
                  </form>
                  </li>
                
                <li class="nav-item" style="padding-left:100px;"  >
                <a href="cart.html" class="nav-link">Cart &nbsp;<span><i class="fas fa-shopping-cart fa-lg"><span id="badge" class="badge badge-primary " style="font-size:12px;position:relative;top:-15px;">
             
                </span>
                </i></span></a>      
               </li>


               <li class="nav-item ">
               <a href="login.html" class="nav-link">Sign In  &nbsp;<span><i class="fas fa-user fa-lg"></i></span></a>

               </li>
               </ul>
                
               <div></div>
                
              </div>
            </div>
          </nav>
    </header>
        
        `
    }
}

customElements.define('my-header', Myheader)




class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        
        <footer id="footer">


    <div class="footer2" style="background-color:gray">
      <div class="container">
        <div class="row">         
            <div class="social text-center mt-2"  >
                <a href="#" style=" color: black;"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="#" style=" color: black;"><i class="fab fa-facebook-f fa-2x"></i></a> 
                <a href="#" style=" color: black;"><i class="fab fa-dribbble fa-2x"></i></a>
                <a href="#" style=" color: black;"><i class="fab fa-flickr fa-2x"></i></a>
                <a href="#" style=" color: black;"><i class="fab fa-github fa-2x"></i></a>
            </div>
          <div class=" panel text-center">
            <div >
              <p  class="text-center">Copyright &copy; 2022 E-Shop <br>Designed by Naseer Ahmad</p>

            </div>
          </div>
  
        </div>
        <!-- /row of panels -->
      </div>
    </div>
  </footer>
  
  

        `
    }
}

customElements.define('my-footer',MyFooter)