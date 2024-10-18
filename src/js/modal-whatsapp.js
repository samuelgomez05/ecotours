// SCRIPT QUE ACTIVA EL MODAL PARA ESCRIBIR Y ENVIAR MENSAJE - USADO EN TODAS LAS PAGINAS
function toggleChat() {
    let chatBox = document.getElementById('chat-box');
    let whatsapp = document.getElementById('whatsapp');

    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
        whatsapp.classList.add('after:animate-none');
    } else {
        chatBox.style.display = 'none';
        whatsapp.classList.remove('after:animate-none');
    }
}

function sendMessage() {
    let input = document.getElementById('chat-input');
    let message = input.value;
    
    if (message.trim() === '') return;

    let messages = document.getElementById('chat-messages');
    let newMessage = document.createElement('div');
    newMessage.innerHTML = '<strong>Tú :</strong> ' + message;
    newMessage.classList.add('message');
    messages.appendChild(newMessage);

    // Limpiar el campo de entrada
    input.value = '';

    // Enviar mensaje a WhatsApp
    let phoneNumber = '+59169186788';
    let whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}