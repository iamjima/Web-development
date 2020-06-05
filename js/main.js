function details() {
    document.querySelector("#name").value = "rambutan";
    document.querySelector("#amount").value = "200";
    document.querySelector("#type").value = "income";
    document.querySelector("button").innerHTML = "clear";
    document.querySelector("button").style.background = "red";
};

details();

document.querySelector("#sub").addEventListener("click", function(){

    if (document.querySelector("#name").value === "") {
        details();
        
    } else {
        document.querySelector("#name").value = "";
    document.querySelector("#amount").value = "";
    document.querySelector("#type").value = "";
    document.querySelector("button").innerHTML = "genarate";
    document.querySelector("button").style.background = "green";
    
    }
});


