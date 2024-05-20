// Usando la función dragElement 
// para darle propiedades de arrastre 
//a las plantas
dragElement(document.getElementById('plant1')); 
dragElement(document.getElementById('plant2')); 
dragElement(document.getElementById('plant3')); 
dragElement(document.getElementById('plant4')); 
dragElement(document.getElementById('plant5')); 
dragElement(document.getElementById('plant6')); 
dragElement(document.getElementById('plant7')); 
dragElement(document.getElementById('plant8')); 
dragElement(document.getElementById('plant9')); 
dragElement(document.getElementById('plant10')); 
dragElement(document.getElementById('plant11')); 
dragElement(document.getElementById('plant12')); 
dragElement(document.getElementById('plant13')); 
dragElement(document.getElementById('plant14')); 

//Creando la función dragElement 
function dragElement(terrariumElement){
    //Creando unas variables de posición 
    let despX = 0, despY = 0, initPostX = 0, initPostY = 0;
    //Funcion elementDrag
    function elementDrag(e){
     //Se calcula el dezplazamiento del mouse
     despX = e.clientX - initPostX;
     despY = e.clientY - initPostY;
     // Asiganando nueva posicion inicial 
     initPostX = e.clientX;
     initPostY = e.clientY;
     //Se le aplica el dezplazamiento a la planta
     terrariumElement.style.left = `${terrariumElement.offsetLeft + despX}px`;
     terrariumElement.style.top = `${terrariumElement.offsetTop + despY}px`;
    }
    //Prando la funcionalidad de arrastre
    function stopElementDrag(){
        document.onpointerup = null;
        document.onpointermove = null;
    }

    // pointerDrag function
    function pointerDrag(event){
        //Previene el funcionamiento por defecto
        event.preventDefault();
        initPostX = event.clientX;
         initPostY= event.clientY;
        // console.log(`initPosX> ${initPostX}`);
         //console.log(`initPosY> ${initPostY}`);
        //Realizando función de arrastre
        document.onpointermove = elementDrag;
        //Función que se ejecuta cuando 
        // el usuario suleta el botón 
        document.onpointerup = stopElementDrag;
    }
    //Detectando el evento de sujetar
    terrariumElement.onpointerdown = pointerDrag;
}