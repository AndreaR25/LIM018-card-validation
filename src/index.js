import validator from './validator.js';

let payCard= document.getElementById('buttonCredit');

payCard.addEventListener('click', prueba);

function prueba(){
    
 let creditNumber= document.getElementById("creditNumber").value;

  validator.isValid(creditNumber);
  if (validator.isValid(creditNumber)){
      alert("Si es valido");
     }
  else {
          alert("No es valido");
      }
    
    validator.maskify(creditNumber);

    let number = validator.maskify(creditNumber);
    
    alert (number);
    
    document.getElementById("creditNumber").value=number;
    
  }




 







