$(document).ready(function() {
    function fetch() {
        $.get("/message/get_all", function(get_messages) {
            $("#new_messages").html("")
            get_messages.forEach(function(x){
                var name = x['username'];
                var message = x['body'];
                $("#new_messages").append(`<p><span class="username">${name}</span>:<span>${message}</span></p>`);
            });  
            var objDiv = document.getElementById("new_messages");
            objDiv.scrollTop = objDiv.scrollHeight;    
        });
    }

    $("#submit").click(function(e) {
        e.preventDefault();
        var inputMessage = $("#input_message").val();
        $("#input_message").val("");
        $("#input_message").focus()
        console.log(inputMessage);
        $.post("/message/new_message", {message: inputMessage}, function(post_message) {
            $("#new_messages").append(`<p>${post_message}</p>`);
        });
    });

    $("#target").click(function() {
        $.get("/random", function(data) {
            $("#random-string").append(`<p>${data}</p>`);
        });
    });

    var userHasScrolled = false

    get_new_message = setInterval(function(){ 
        fetch(); 
    }, 300);
    
    if (userHasScrolled == false){
        setInterval(get_new_message)
    }
    
    new_messages.onscroll = function (e) {
        userHasScrolled = true;
        if (userHasScrolled){
            clearInterval(get_new_message)
            userHasScrolled = false
        }
    } 

    
    
});
