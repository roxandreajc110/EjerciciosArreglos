var first_name = "Alfonso";
var last_name = "Wilches";
var full_name = first_name + last_name;
console.log(full_name);
var name = "";
name = name.concat(first_name," ",last_name);
console.log(name);

var lorem = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
console.log(lorem.length);
var comilla = "'";
console.log(comilla);

String.jiberish = function (str){
  if(!str){
    str = this;
  }

  for (var i = 0 ; i < str.length ; i++){
    if (str[i] === "a" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
      str = str.replace(str[i],"e");}
  }
    return str;
};

String.prototype.jiberish = String.jiberish;
var amiguita = String.jiberish("Tengo una amiguita que me hace muchas cosquillitas");
console.log(amiguita);

console.log("la cucaracha ya no puede caminar, porque no tiene sus paticas para caminar".jiberish());

var ar1 = [1,2,3,4,5,6];
var ar2 = [7,8,9];

ar3 = ar1.concat(ar1,ar2);
console.log(ar3);
