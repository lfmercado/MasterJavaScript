'use strict'
                            //sirve para que la conexion se force
var socket = io.connect('http://172.16.10.90:6677',{'forceNew' : true});
    console.log("main.js")
    socket.on('mesasages', function(data){
        render(data);
        console.log(data);
    });

    function render(data){  
                    //el metodo map permite recorrer el contenido de un objeto
        var html = data.map(function(mesasages, index){
            return (`
                    <div class="message">
                        <strong>${mesasages.nickname}</strong> dice:
                        <p>${mesasages.text}</p>
                    </div>
                `);
        }).join(' '); 
        var div_msgs = document.getElementById('message')
        
        div_msgs.innerHTML = html;
        div_msgs.scrollTop = div_msgs.scrollHeight; 
    }   

    function addMessage(e){
        var message = {
            nickname: document.getElementById('nickname').value,
            text: document.getElementById('text').value
        };
        document.getElementById('nickname').style.display ='none';
        socket.emit('add-message', message);
        return false;
    }