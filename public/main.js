var socket = io.connect ('http://localhost:3002',{'forceNew':true});
/*El cliente manejara datos mediante mensajes, 
esto se llama eventos ye se mostraran por consola en el navegador */
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html = data.map(function(elem, index){
    return(`<div>
        <strong>${elem.autor}</strong>
        <em>${elem.texto}</em>
        </div>`);
    }).join(" ");
    document.getElementById('messages').innerHTML=html;
};

function addMessages(e){
    var payload = {
        autor: document.getElementById('username').value,
        texto: document.getElementById('texto').value
    };
    socket.emit ('new-messages', payload);
    return false;
}