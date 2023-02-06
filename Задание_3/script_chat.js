const url = 'wss://echo-ws-service.herokuapp.com'

    function contentLoaded() {
        const div = document.getElementById("correspondence-window");
        const btn = document.querySelector("#send-message");
        const input = document.querySelector("input");
        const btnGeo = document.querySelector("#geo");
        const mapLink = document.querySelector(".href");

        let websocket = new WebSocket(url);

        function innerTag(data, classValue){
            inOut = classValue ? 'out-send' : 'in-send'
            div.innerHTML += `<div class="send ${inOut}">${data}</div>`
        };

        websocket.onopen = function() {
            console.log("WS CONNECTED");
        };

        websocket.onmessage = (event) => {
            innerTag(event.data, false);
        };

        function sendMessage() {
            if (input.value) {
                websocket.send(input.value);
                innerTag(input.value, true);
                input.value === "";
            }
            else return;
            input.value === "";
        };

        function gLocation() {
            if (!navigator.geolocation) {
                attantion = 'Geolocation не поддерживается вашим браузером';
                innerTag(attantion, true);
            } 
            else {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { coords } = position;
                    console.log(coords.latitude, coords.longitude);
                    const href = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
                    link = `<a href="${href}" class="href" target="_blank">Геолокация</a>`
                    innerTag(link, true);
                });
            } 

        };

        btn.addEventListener("click", sendMessage);
        btnGeo.addEventListener("click", gLocation);

    };


    document.addEventListener("DOMContentLoaded", contentLoaded);