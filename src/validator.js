
const validator = {

  isValid: function(creditCardNumber){
    let sumaPar=0;
    let sumaImpar=0;
    let sumaTotal=0;
    let valor;
    const arr=creditCardNumber.split("");
    arr.reverse();
    arr.forEach((element,index)=>{
      element=parseInt(element);
      if(index%2!=0){
        if(element*2>=10){
          sumaPar+=(element*2)%10+1;
        }
        else{
          sumaPar+=element*2;
        }
      }
      else{
          sumaImpar+=element;
      }
       
    })
      sumaTotal= sumaPar + sumaImpar;

    //console.log("la suma es:" + suma);
    if(sumaTotal%10==0){
      valor = true;
    }
    else{
      valor = false;
    }
    return valor;
  },


  maskify: function(creditCardNumber){
  
  let arr2=[];
  let numCard;
  let arr = creditCardNumber.split("");
  arr.forEach((element, index)=>{

  if (index < arr.length-4){
    element="#";  // esto no se visualiaa hasta que se utirlice el push
  }
  arr2.push(element); // agrega elementos al arreglo 
  })
  numCard = arr2.join(""); // para convertir el arreglo en un string y lo () es un separador
  return numCard;
  }
  

}
export default validator;

