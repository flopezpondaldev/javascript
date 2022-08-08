// Reemplazar Contenido de Elementos en el DOM

div.nodeName // Devuelve el nombre del nodo (etiqueta si es un elemento HTML). Solo lectura.
div.textContent // Devuelve el contenido de texto del elemento. Se puede asignar para modificar.

    const div = document.querySelector("div"); // <div></div>

    div.textContent = "Hola a todos"; // <div>Hola a todos</div>
    div.textContent = // "Hola a todos"

    const div = document.querySelector(".info"); // Obtenemos <div class="info">Hola <strong>amigos</strong></div>

    div.textContent; // "Hola amigos"

div.innerHTML // Devuelve el contenido HTML del elemento. Se puede usar asignar para modificar.

    const div = document.querySelector(".info"); // <div class="info"></div>

    div.innerHTML = "<strong>Importante</strong>"; // Interpreta el HTML
    div.innerHTML;    // "<strong>Importante</strong>"
    div.textContent;  // "Importante"

    div.textContent = "<strong>Importante</strong>";  // No interpreta el HTML

div.outerHTML // Idem a .innerHTML pero incluyendo el HTML del propio elemento HTML.
div.innerText // Verison no estandar de .textContent de Internet Explorer con diferencias. EVITAR!
div.outerText // Version no estandar de .textContent/ .outerHTML de Internet Explorer. EVITAR!

    const data = document.querySelector(".data");
    data.innerHTML = "<h1>Tema 1</h1>";

    data.textContent;   // "Tema 1"
    data.innerHTML;     // "<h1>Tema 1</h1>"
    data.outerHTML;     // "<div class="data"><h1>Tema 1</h1></div>"




// Insertar Elementos

.appendChild(node) // Añade como hijo el nodo "node". Devuelve el nodo insertado.

    const img = document.createElement("img");
    img.src = "https://lenguajejs.com/assets/logo.svg";
    img.alt = "Logo Javascript";

    document.body.appendChild(img);

    const div = document.createElement("div");
    div.textContent = "Esto es un div insertado con JS.";

    const app = document.createElement("div"); // <div></div>
    app.id = "app";       // <div id="app"></div>
    app.appendChild(div); // <div id="app"><div>Esto es un div insertado con JS</div></div>

.insertAdjacentElement(pos, elem) // Inserta el elemento "elem" en la posicion "pos". Si falla, NULL.
.insertAdjacentHTML(pos, str) // Inserta el codigo HTML "str" en la posicion "pos".
.insertAdjacentText(pos, text) // Inserta el texto "text" en la posicion "pos".

    const div = document.createElement("div");  // <div></div>
    div.textContent = "Ejemplo";                // <div>Ejemplo</div>

    const app = document.querySelector("#app"); // <div id="app">App</div>

    app.insertAdjacentElement("beforebegin", div);
    // Opción 1: <div>Ejemplo</div> <div id="app">App</div>

    app.insertAdjacentElement("afterbegin", div);
    // Opción 2: <div id="app"> <div>Ejemplo</div> App</div>

    app.insertAdjacentElement("beforeend", div);
    // Opción 3: <div id="app">App <div>Ejemplo</div> </div>

    app.insertAdjacentElement("afterend", div);
    // Opción 4: <div id="app">App</div> <div>Ejemplo</div>

    app.insertAdjacentElement("beforebegin", div);
    // Opción 1: <div>Ejemplo</div> <div id="app">App</div>

    app.insertAdjacentHTML("beforebegin", '<p>Hola</p>');
    // Opción 2: <p>Hola</p> <div id="app">App</div>

    app.insertAdjacentText("beforebegin", "Hola a todos");
    // Opción 3: Hola a todos <div id="app">App</div>

.insertBefore(new, node) // Inserta el nodo "new" antes de "node" y cmoo hijo del nodo actual.




// Eliminar Elementos

// El Metodo Remove()

.remove() // Elimina el propio nodo de su elemento padre.

    const div = document.querySelector(".deleteme");

    div.isConnected;    // true
    div.remove();
    div.isConnected;    // false

.removeChild() // Elimina y devuelve el nodo hijo "node".

    const div = document.querySelector(".item:nth-child(2)");   // <div class="item">2</div>

    document.body.removeChild(div); // Desconecta el segundo .item

.replaceChild(new, old) // Reemplaza el nodo hijo "old" por "new". Devuelve "old".

    const div = document.querySelector(".item:nth-child(2)");

    const newnode = document.createElement("div");
    newnode.textContent = "DOS";

    document.body.replaceChild(newnode, div);