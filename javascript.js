

let fecha=new Date();
let mes=fecha.getMonth()+1;
let verano=[12,1,2,3,4];
let invierno=[5,6,7,8,9,10,11];

// mes=1
if (verano.indexOf(mes)==-1){
    $('#verano').hide()
}else{
    $('#invierno').hide()
}