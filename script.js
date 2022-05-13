    function pesquisarProdutos(){
       let produto = document.getElementById("campo-buscarProduto").value
       alert(produto)
    }

    function mostrarMenu(){
     let menu = document.getElementById("menu")
    

     if(getComputedStyle(menu).display =="none") {
         menu.style.display = "flex"
     } 
     else{
         menu.style.display = "none"
     }
       
    }