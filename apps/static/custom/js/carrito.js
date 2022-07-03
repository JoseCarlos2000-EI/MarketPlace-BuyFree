$(document).ready(function() {
    var $cart_content = $("#carrito");
    var $subtotal = $("#subtotal");
    var $canti_items = $("#cantidad_items");
    var $total = $("#total");
    var html = "";
    var carrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito); 
    var subtotal = 0;
    carrito.forEach(function(item){
        
        html+='<tr>'
        +'<td class="cart_product_img">'
            +'<a href="#"><img src="'+item.image+'"'
        +'</td>'
        +'<td class="cart_product_desc">'
            +'<h5>'+item.name+'</h5>'
        +'</td>'
        +'<td class="price">'
            +'<span>'+item.price+'</span>'
        +'</td>'
        +'<td class="qty">'
            +'<div class="qty-btn d-flex">'
                +'<p>Unds.</p>'
                +'<div class="quantity">'
                    +'<span class="qty-minus" onclick="disminuirCantidad(\''+item.id+'\')" ><i class="fa fa-minus" aria-hidden="true"></i></span>'
                    +'<input type="number" class="qty" id="qty'+item.id+'" step="1" min="1" max="300" name="quantity" value="'+item.quantity+'">'
                    +'<span class="qty-plus" onclick="aumentarCantidad(\''+item.id+'\')"><i class="fa fa-plus" aria-hidden="true"></i></span>'
                +'</div>'
            +'</div>'
        +'</td>'
    +'</tr>';
    subtotal += item.price*item.quantity;
    });
    localStorage.setItem("subtotal",parseFloat(subtotal.toFixed(2)));
    localStorage.setItem("number_items",carrito.length);
    $subtotal.html(subtotal.toFixed(2));
    $total.html(subtotal.toFixed(2));
    $canti_items.html(carrito.length);
    console.log(subtotal);

    $cart_content.html(html);
    

    

});

function disminuirCantidad(id){
    var $subtotal = $("#subtotal");
    var $total = $("#total");
    var $canti_items = $("#cantidad_items");
    var subtotal = 0;
    var carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach((item,idx)=>{
        if(item.id == id){
            
            if(item.quantity == 1) {
                carrito.splice(idx,1);
                localStorage.setItem("carrito",JSON.stringify(carrito));
                var $cart_content = $("#carrito");
                var html = "";
                carrito.forEach(function(item){
                    html+='<tr>'
                    +'<td class="cart_product_img">'
                        +'<a href="#"><img src="'+item.image+'"'
                    +'</td>'
                    +'<td class="cart_product_desc">'
                        +'<h5>'+item.name+'</h5>'
                    +'</td>'
                    +'<td class="price">'
                        +'<span>'+item.price+'</span>'
                    +'</td>'
                    +'<td class="qty">'
                        +'<div class="qty-btn d-flex">'
                            +'<p>Unds.</p>'
                            +'<div class="quantity">'
                                +'<span class="qty-minus" onclick="disminuirCantidad(\''+item.id+'\')" ><i class="fa fa-minus" aria-hidden="true"></i></span>'
                                +'<input type="number" class="qty" id="qty'+item.id+'" step="1" min="1" max="300" name="quantity" value="'+item.quantity+'">'
                                +'<span class="qty-plus" onclick="aumentarCantidad(\''+item.id+'\')"><i class="fa fa-plus" aria-hidden="true"></i></span>'
                            +'</div>'
                        +'</div>'
                    +'</td>'
                +'</tr>';
                subtotal+= item.price*item.quantity;
                });
                localStorage.setItem("subtotal", parseFloat(subtotal).toFixed(2));
                localStorage.setItem("number_items",carrito.length);
                $subtotal.html(subtotal.toFixed(2));
                $total.html(subtotal.toFixed(2));
                $canti_items.html(carrito.length);
                console.log(subtotal);
                $cart_content.html(html);
                
            }else{
                
                item.quantity --;
                localStorage.setItem("carrito",JSON.stringify(carrito));
                var $cart_content = $("#carrito");
                var html = "";
                carrito.forEach(function(item){
                    html+='<tr>'
                    +'<td class="cart_product_img">'
                        +'<a href="#"><img src="'+item.image+'"'
                    +'</td>'
                    +'<td class="cart_product_desc">'
                        +'<h5>'+item.name+'</h5>'
                    +'</td>'
                    +'<td class="price">'
                        +'<span>'+item.price+'</span>'
                    +'</td>'
                    +'<td class="qty">'
                        +'<div class="qty-btn d-flex">'
                            +'<p>Unds.</p>'
                            +'<div class="quantity">'
                                +'<span class="qty-minus" onclick="disminuirCantidad(\''+item.id+'\')" ><i class="fa fa-minus" aria-hidden="true"></i></span>'
                                +'<input type="number" class="qty" id="qty'+item.id+'" step="1" min="1" max="300" name="quantity" value="'+item.quantity+'">'
                                +'<span class="qty-plus" onclick="aumentarCantidad(\''+item.id+'\')"><i class="fa fa-plus" aria-hidden="true"></i></span>'
                            +'</div>'
                        +'</div>'
                    +'</td>'
                +'</tr>';
                subtotal+= item.price*item.quantity;

                });
                localStorage.setItem("subtotal", parseFloat(subtotal).toFixed(2));
                localStorage.setItem("number_items",carrito.length);
                $subtotal.html(subtotal.toFixed(2));
                $total.html(subtotal.toFixed(2));
                $canti_items.html(carrito.length);
                console.log(subtotal);
                $cart_content.html(html);
                
            }
            return;
        }
    });
}

function aumentarCantidad(id){
    var carrito = JSON.parse(localStorage.getItem("carrito"));
    var subtotal = 0;
    var $subtotal = $("#subtotal");
    var $total = $("#total");
    var $canti_items = $("#cantidad_items");
    carrito.forEach((item,idx)=>{
        if(item.id == id){
                item.quantity++;
                localStorage.setItem("carrito",JSON.stringify(carrito));
                var $cart_content = $("#carrito");
                var html = "";
                carrito.forEach(function(item){
                    html+='<tr>'
                    +'<td class="cart_product_img">'
                        +'<a href="#"><img src="'+item.image+'"'
                    +'</td>'
                    +'<td class="cart_product_desc">'
                        +'<h5>'+item.name+'</h5>'
                    +'</td>'
                    +'<td class="price">'
                        +'<span>'+item.price+'</span>'
                    +'</td>'
                    +'<td class="qty">'
                        +'<div class="qty-btn d-flex">'
                            +'<p>Unds.</p>'
                            +'<div class="quantity">'
                                +'<span class="qty-minus" onclick="disminuirCantidad(\''+item.id+'\')" ><i class="fa fa-minus" aria-hidden="true"></i></span>'
                                +'<input type="number" class="qty" id="qty'+item.id+'" step="1" min="1" max="300" name="quantity" value="'+item.quantity+'">'
                                +'<span class="qty-plus" onclick="aumentarCantidad(\''+item.id+'\')"><i class="fa fa-plus" aria-hidden="true"></i></span>'
                            +'</div>'
                        +'</div>'
                    +'</td>'
                +'</tr>';
                subtotal+= item.price*item.quantity;
                });
                localStorage.setItem("subtotal", parseFloat(subtotal).toFixed(2));
                localStorage.setItem("number_items",carrito.length);
                $subtotal.html(subtotal.toFixed(2));
                $total.html(subtotal.toFixed(2));
                $canti_items.html(carrito.length);
                console.log(subtotal);
                $cart_content.html(html);
                //console.log("test");
          
            return;
        }
    });
    
}