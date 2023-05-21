import React, { useState } from 'react';
import './App.css';


//Creamos un componente funcional llamado ImparCounter que no recibe ningún argumento.
const ContadorDeImpares = () => {
  //Declaramos una variable de estado llamada numero utilizando el hook useState. 
  //Inicializamos numero con un arreglo vacío. 
  //setNumbers es la función que utilizaremos para actualizar el valor de numero en el estado.
  const [numero, setNumbers] = useState([]);
  
//Definimos una función llamada handleInputChange que se ejecutará 
//cuando ocurra un evento de cambio en el input.
  const handleInputChange = (e) => {
   // Obtenemos el valor ingresado en el input mediante e.target.value.
    const inputNumbers = e.target.value
    //Luego, utilizamos el metodo split(',')
    // para dividir la cadena en un arreglo en cada aparición de una coma.
      .split(',')
    //Utilizamos map para iterar sobre cada elemento del arreglo resultante 
    //y utilizamos parseInt(num.trim(), 10) para convertir cada elemento en un número entero.
    //trim() se utiliza para eliminar cualquier espacio en blanco alrededor del número. 
    //10, se utiliza para especificar que el número debe ser interpretado en base decimal.
     // .map((num) => parseInt(num.trim(), 10))//num es el parámetro que representa cada elemento del arreglo durante la iteración.
      //Finalmente, aplicamos filter para eliminar cualquier 
      //elemento que no sea un número válido utilizando !isNaN(num).
     // .filter((num) => !isNaN(num)); // Filtrar elementos no numéricos
      //Actualizamos el estado numero con el nuevo arreglo de números obtenido 
      //en inputNumbers utilizando setNumbers.
    setNumbers(inputNumbers);
  };
   //
  const cantidadImpares = () => {
    //Definimos una función llamada countImpares que utiliza filter para 
    //filtrar los números impares del arreglo numbers. 
    //Luego, utilizamos length para obtener la cantidad de elementos impares.
    return numero.filter((num) => num % 2 !== 0).length;
  };
 
  return (
    <div  >
      <h2>Contador de números impares</h2>
      <input
        type="text"
        placeholder="Ingrese los números separados por coma"
        onChange={handleInputChange}
      />

      <p>Cantidad de números impares: {cantidadImpares()}</p>
       
    </div>
    
  );
};


const App = () => {
  return (
    <div>
      <ContadorDeImpares />
    </div>
  );
};


export default App;
