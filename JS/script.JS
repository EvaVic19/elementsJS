console.log("¡El archivo JavaScript está vinculado correctamente!");

 / Obtener el elemento con el ID "titulo" y modificar su texto
        const titulo = document.getElementById("Practica JS");
        titulo.textContent = "Aprendiendo JS";

        // Seleccionar el primer elemento con el ID "parrafo" y modificar su contenido HTML
        const parrafo = document.getElementById("parrafo");
        parrafo.innerHTML = "Elementos de tecnologia";

        // Crear un nuevo elemento <li>
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = "Nuevo elemento en la lista";
        
        // Agregar el nuevo elemento a la lista
        document.getElementById("lista").appendChild(nuevoElemento);
        
        // Obtener todos los elementos con la clase "item" y cambiar su color
        const items = document.querySelectorAll(".item");
        items.forEach(item => {
            item.style.color = "red";
        });
        
        // Obtener todas las etiquetas <li>
        const elementosLI = document.getElementsByTagName("li");
        
        // Obtener el valor del atributo "value" del input
        const input = document.getElementById("entrada");
        console.log("Valor del input:", input.value);
        
        // Establecer un nuevo valor al atributo "value"
        input.value = "Nuevo valor";
        
        // Agregar un evento click al botón
        document.getElementById("boton").addEventListener("click", function() {
            alert("Botón clickeado!");
        });
        
        // Seleccionar todos los elementos <li> dentro de la lista
        const listaItems = document.querySelectorAll("#lista li");
        
        // Modificar el estilo CSS del contenedor
        const contenedor = document.getElementById("contenedor");
        contenedor.style.border = "2px solid black";
        contenedor.style.padding = "10px";
        
        // Agregar una clase CSS al contenedor
        contenedor.classList.add("resaltado");
        
        // Quitar una clase CSS del contenedor
        contenedor.classList.remove("resaltado");
        
        // Alternar una clase CSS del contenedor
        contenedor.classList.toggle("resaltado");
        
        // Eliminar el último elemento de la lista
        document.getElementById("lista").lastElementChild.remove();
        
        // Crear un nodo de texto y agregarlo al contenedor
        const nodoTexto = document.createTextNode("Este es un nodo de texto");
        contenedor.appendChild(nodoTexto);
 // Obtener el elemento con el ID "titulo" y modificar su texto
        const titulo = document.getElementById("Practica JS");
        titulo.textContent = "Aprendiendo JS";

        // Seleccionar el primer elemento con el ID "parrafo" y modificar su contenido HTML
        const parrafo = document.getElementById("parrafo");
        parrafo.innerHTML = "Elementos de tecnologia";

        // Crear un nuevo elemento <li>
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = "Nuevo elemento en la lista";
        
        // Agregar el nuevo elemento a la lista
        document.getElementById("lista").appendChild(nuevoElemento);
        
        // Obtener todos los elementos con la clase "item" y cambiar su color
        const items = document.querySelectorAll(".item");
        items.forEach(item => {
            item.style.color = "red";
        });
        
        // Obtener todas las etiquetas <li>
        const elementosLI = document.getElementsByTagName("li");
        
        // Obtener el valor del atributo "value" del input
        const input = document.getElementById("entrada");
        console.log("Valor del input:", input.value);
        
        // Establecer un nuevo valor al atributo "value"
        input.value = "Nuevo valor";
        
        // Agregar un evento click al botón
        document.getElementById("boton").addEventListener("click", function() {
            alert("Botón clickeado!");
        });
        
        // Seleccionar todos los elementos <li> dentro de la lista
        const listaItems = document.querySelectorAll("#lista li");
        
        // Modificar el estilo CSS del contenedor
        const contenedor = document.getElementById("contenedor");
        contenedor.style.border = "2px solid black";
        contenedor.style.padding = "10px";
        
        // Agregar una clase CSS al contenedor
        contenedor.classList.add("resaltado");
        
        // Quitar una clase CSS del contenedor
        contenedor.classList.remove("resaltado");
        
        // Alternar una clase CSS del contenedor
        contenedor.classList.toggle("resaltado");
        
        // Eliminar el último elemento de la lista
        document.getElementById("lista").lastElementChild.remove();
        
        // Crear un nodo de texto y agregarlo al contenedor
        const nodoTexto = document.createTextNode("Este es un nodo de texto");
        contenedor.appendChild(nodoTexto);

        // Obtener el elemento con el ID "titulo" y modificar su texto
        const titulo = document.getElementById("Practica JS");
        titulo.textContent = "Aprendiendo JS";

        // Seleccionar el primer elemento con el ID "parrafo" y modificar su contenido HTML
        const parrafo = document.getElementById("parrafo");
        parrafo.innerHTML = "Elementos de tecnologia";

        // Crear un nuevo elemento <li>
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = "Nuevo elemento en la lista";
        
        // Agregar el nuevo elemento a la lista
        document.getElementById("lista").appendChild(nuevoElemento);
        
        // Obtener todos los elementos con la clase "item" y cambiar su color
        const items = document.querySelectorAll(".item");
        items.forEach(item => {
            item.style.color = "red";
        });
        
        // Obtener todas las etiquetas <li>
        const elementosLI = document.getElementsByTagName("li");
        
        // Obtener el valor del atributo "value" del input
        const input = document.getElementById("entrada");
        console.log("Valor del input:", input.value);
        
        // Establecer un nuevo valor al atributo "value"
        input.value = "Nuevo valor";
        
        // Agregar un evento click al botón
        document.getElementById("boton").addEventListener("click", function() {
            alert("Botón clickeado!");
        });
        
        // Seleccionar todos los elementos <li> dentro de la lista
        const listaItems = document.querySelectorAll("#lista li");
        
        // Modificar el estilo CSS del contenedor
        const contenedor = document.getElementById("contenedor");
        contenedor.style.border = "2px solid black";
        contenedor.style.padding = "10px";
        
        // Agregar una clase CSS al contenedor
        contenedor.classList.add("resaltado");
        
        // Quitar una clase CSS del contenedor
        contenedor.classList.remove("resaltado");
        
        // Alternar una clase CSS del contenedor
        contenedor.classList.toggle("resaltado");
        
        // Eliminar el último elemento de la lista
        document.getElementById("lista").lastElementChild.remove();
        
        // Crear un nodo de texto y agregarlo al contenedor
        const nodoTexto = document.createTextNode("Este es un nodo de texto");
        contenedor.appendChild(nodoTexto);
}