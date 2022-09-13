const cripto=(str) =>
{
    var letras= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultado ='';
    while(str.length>0)
  {

  for (let i=0;i<=25;i++)
     { 
       if ((letras[i]===str[0]) && (i>13)) {resultado = resultado + letras[i-13];};
       if ((letras[i]===str[0]) && (i<13)) {resultado = resultado + letras[i+13] ;} ;
      };
 if (!  /^[A-Z]*$/.test(str[0]) ) {resultado = resultado+ str[0];}; 
str=str.substring(1);
   };   
  return resultado;          
};

//digite a mensagem(criptografada ou descriptografada) aqui e terá tanto a mensagem decifrada quanto criptografada
console.log(cripto('VASCO'));

//comando para rodar no terminal: node index.js
