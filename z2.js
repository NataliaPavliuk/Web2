
    str = "hello node";
    var array = str.split(" ");
    var result = array.map(function(str){
    return str[0].toUpperCase()+str.substr(1)
    }).join(" ");
    console.log(result);
    

   
