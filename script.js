function start() {
    let res_msg = document.createElement('div');
    res_msg.innerHTML = "Hello, I am Aliyas Muhammad. How may I help you?";
    res_msg.setAttribute("class", "left");
    document.getElementById('msg_area').appendChild(res_msg); 
}

document.addEventListener("DOMContentLoaded", function() {
    start();

    document.getElementById("send").addEventListener("click", async function(e) {
        e.preventDefault();

        var req = document.getElementById("text").value;
        if (req === undefined || req === "") {
            return;
        } else {
            let res = "";
            await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`)
                .then(data => {
                    res = data.data.response;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                    res = "Error fetching response.";
                });

            let msg_req = document.createElement('div');
            let msg_res = document.createElement('div');

            let Con1 = document.createElement('div');
            let Con2 = document.createElement('div');

            Con1.setAttribute("class", "msgCon1");
            Con2.setAttribute("class", "msgCon2");

            msg_req.innerHTML = req;
            msg_res.innerHTML = res;

            msg_req.setAttribute("class", "right");
            msg_res.setAttribute("class", "left");

            let message = document.getElementById('msg_area');

            message.appendChild(Con1);
            message.appendChild(Con2);

            Con1.appendChild(msg_req);
            Con2.appendChild(msg_res);

            document.getElementById('text').value = "";

            function scroll() {
                var scrollMsg = document.getElementById("msg_area");
                scrollMsg.scrollTop = scrollMsg.scrollHeight;
            }
            scroll();
        }
    });
});
