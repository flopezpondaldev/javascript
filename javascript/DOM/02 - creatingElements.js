// Crear Elementos HTML

document.createElement(tag, options) // Crea y devuelve el elemento HTML definido por el STRING tag.

    const div = document.createElement("div"); // Creamos un <div></div>
    const span = document.createElement("span"); // Creamos un <span></span>
    const img = document.createElement("img"); // Creamos un <img>

document.createComment(text) // Crea y devuelve un nodo de comentarios HTML <!-- text -->

    const comment = document.createComment("Comentario"); // <!-- Comentario -->
    const text = document.createTextNode("Hola"); // Nodo de texto: "Hola"

document.createTextNode(text) // Crea y devuelve un nodo HTML con el texto "text".
document.cloneNode(deep) // Clona el nodo HTML y devuelve una copia. "deep" es FALSE por defecto.

    const div = document.createElement("div");
    div.textContent = "Elemento 1";

    const div2 = div;   // NO se está haciendo una copia
    div2.textContent = "Elemento 2";

    div.textContent;  // 'Elemento 2'

    const div = document.createElement("div");
    div.textContent = "Elemento 1";

    const div2 = div.cloneNode();   // Ahora SÍ estamos clonando
    div2.textContent = "Elemento 2";

    div.textContent;  // 'Elemento 1'

document.isConnected // Indica si el nodo HTML esta insertado en el documento HTML.




// Atributos HTML de un Elemento

div.hasAttributes() // Indica si el elemento tiene atributos HTML.
div.hasAttribute(Attr) // Indica si el elemento tiene el atributo HTML Attr.
div.getAttributeNames() // Devuelve un ARRAY con los atributos del elemento.
div.getAttribute(Attr) // Devuelve el valor del atributo Attr del elemento o NULL si no existe.
div.removeAttribute(Attr) // Elimina el atributo Attr del elemento.
div.setAttribute(Attr, value) // Añade o cambia el atributo Attr al valor "value".
div.getAttributeNode(Attr) // Idem a getAttribute() pero devuelve el atributo como "nodo".
div.removeAttributeNode(Attr) // Idem a removeAttribute() pero devuelve el atributo como "nodo".
div.setAttributeNode(Attr, value) // Idem a setAttribute() pero devuelve el atributo como "nodo".

const div = document.querySelector("#page"); // Obtenemos <div id="page" class="info data dark" data-number="5"></div>

div.hasAttribute("data-number"); // true (data-number existe)
div.hasAttributes(); // true (tiene 3 atributos)

div.getAttributeNames(); // ["id", "data-number", "class"]
div.getAttribute("id"); // "page"

div.removeAttribute("id"); // class="info data dark" y data-number="5"
div.setAttribute("id", "page"); // Vuelve a añadir id="page"




// Usando Fragmentos

document.createDocumentFragment() // Crea un fragmento aislado (sin padre).

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 5000; i++) {
        const div = document.createElement("div");
        div.textContent = `Item numero ${i}`;
        fragment.appendChild(div);        
    }

    document.body.appendChild(fragment);