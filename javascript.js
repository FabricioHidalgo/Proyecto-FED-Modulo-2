



let fecha=new Date();
let mes=fecha.getMonth()+1;
let verano=[12,1,2,3,4];
let invierno=[5,6,7,8,9,10,11];

mes=1
let contador=1;

while(contador<13){

    if (contador==mes && invierno.indexOf(contador)!==-1){
        $('#verano').hide()
    
    }else if(contador==mes && verano.indexOf(contador)!==-1){
        $('#invierno').hide()
    }
    contador+=1;
}



if (verano.indexOf(mes)!=-1){
let xhr = new XMLHttpRequest();
xhr.open('GET', 'summer.json', true);
xhr.response = 'text';
xhr.send(); 
// Producto de Verano
xhr.onload = function() {
    if (xhr.status === 200) {
        let miData = JSON.parse(xhr.responseText)
        console.log(miData);

        for (let i = 0; i < miData.ProductoDeVerano.length; i++) {
            console.log(miData.ProductoDeVerano[i].Producto);
            console.log(miData.ProductoDeVerano[i].Precio);
            console.log(miData.ProductoDeVerano[i].Descripcion);
            console.log(miData.ProductoDeVerano[i].Tallas);           
        } // final de for
        // Inicio info Producto
        let miString = "Producto: ";
        for (let i = 0; i < miData.ProductoDeVerano.length; i++) {
            let x=i+1
            miString += "";
            miString += miData.ProductoDeVerano[i].Producto;
        } 
        document.getElementById('producto').innerHTML = miString
        // final info Producto
        // Inicio info Precio
        let miString2 = "Precio: ";
        for (let i = 0; i < miData.ProductoDeVerano.length; i++) {
            let x=i+1
            miString2 += "";
            miString2 += miData.ProductoDeVerano[i].Precio;
        } 
        document.getElementById('precio').innerHTML = miString2
        // Final info Precio
       // Inicio info Descripcion
        let miString3 = "Descripción: ";
        for (let i = 0; i < miData.ProductoDeVerano.length; i++) {
            let x=i+1
            miString3 += "";
            miString3 += miData.ProductoDeVerano[i].Descripcion;
        } 
        document.getElementById('descripcion').innerHTML = miString3
        // Final info Descripcion
        // Inicio info Tallas
        let miString4 = "Tallas: ";
        for (let i = 0; i < miData.ProductoDeVerano.length; i++) {
            let x=i+1
            miString4 += "";
            miString4 += miData.ProductoDeVerano[i].Tallas;
        } 
        document.getElementById('tallas').innerHTML = miString4
        // Final info Tallas
    }}} else{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'winter.json', true);
        xhr.response = 'text';
        xhr.send(); 
        // Producto de Verano
        xhr.onload = function() {
        if (xhr.status === 200) {{
        let miData = JSON.parse(xhr.responseText)
        console.log(miData);
        for (let i = 0; i < miData.ProductoDeInvierno.length; i++) {
            console.log(miData.ProductoDeInvierno[i].Producto);
            console.log(miData.ProductoDeInvierno[i].Precio);
            console.log(miData.ProductoDeInvierno[i].Descripcion);
            console.log(miData.ProductoDeInvierno[i].Tallas);           
        } // final de for
        // Inicio info Producto
        let invString = "Producto: ";
        for (let i = 0; i < miData.ProductoDeInvierno.length; i++) {
            let x=i+1
            invString += "";
            invString += miData.ProductoDeInvierno[i].Producto;
        } 
        document.getElementById('productoinv').innerHTML = invString
        // final info Producto
        // Inicio info Precio
        let invString2 = "Precio: ";
        for (let i = 0; i < miData.ProductoDeInvierno.length; i++) {
            let x=i+1
            invString2 += "";
            invString2 += miData.ProductoDeInvierno[i].Precio;
        } 
        document.getElementById('precioinv').innerHTML = invString2
        // Final info Precio
        // Inicio info Descripcion
        let invString3 = "Descripción: ";
        for (let i = 0; i < miData.ProductoDeInvierno.length; i++) {
            let x=i+1
            invString3 += "";
            invString3 += miData.ProductoDeInvierno[i].Descripcion;
        } 
        document.getElementById('descripcioninv').innerHTML = invString3
        // Final info Descripcion
        // Inicio info Tallas
        let invString4 = "Tallas: ";
        for (let i = 0; i < miData.ProductoDeInvierno.length; i++) {
            let x=i+1
            invString4 += "";
            invString4 += miData.ProductoDeInvierno[i].Tallas;
        } 
        document.getElementById('tallasinv').innerHTML = invString4
        // Final info Tallas
    }
}}}
