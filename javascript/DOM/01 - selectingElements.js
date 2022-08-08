// Metodos Tradicionales/Clasicos para realizar busquedas de elementos en el documento:

document.getElementById(id) // Busca el elemento HTML con el id "id". Si no, devuelve "NULL".

    const page = document.getElementById("page"); // <div id="page"></div>

document.getElementsByClassName(class) // Busca elementos con la clase "class". Si no, devuelve [].

    const items = document.getElementsByClassName("item"); // [div, div, div]

    console.log(items[0]); // Primer item encontrado: <div class="item"></div>
    console.log(items.length); // 3

document.getElementsByName(name) // Busca elementos con la clase "class". Si no, devuelve [].

    const nicknames = document.getElementsByName("nickname"); // Obtiene todos los elementos con atributo name="nickname".

document.getElementsByTagName(tag) // Busca elementos "tag". Si no encuentra ninguno, devuelve [].

    const divs = document.getElementsByTagName("div"); // Obtiene todos los elementos <div> de la pagina.





    // Metodos Modernos para realizar busquedas de elementos en el documento:

document.querySelector(sel) // Busca el primer elemento que coincide con el selector CSS "sel". Si no, "NULL".

    const page = document.querySelector("#page"); // <div id="page"></div>
    const info = document.querySelector(".main .info"); // <div class="info"></div>

document.querySelectorAll(sel) // Busca todos los elementos que coinciden con el selector CSS "sel". Si no, [].

    const infos = document.querySelectorAll(".info"); // Obtiene todos los elementos con clase "info".
    const nicknames = document.querySelectorAll('[name="nickname"]'); // Obtiene todos los elementos con atributo name="nickname".
    const divs = document.querySelectorAll("div"); // Obtiene todos los elementos <div> de la pagina HTML.