
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    let boutton = document.querySelector("#btn");

    boutton.innerHTML = "..."
    setTimeout(() => {
        boutton.innerHTML = "Login"
        if (email!="" && password!="") {
            setTimeout(() => {
                window.location.href = "./index.html"
                
            }, 700);
        }
        else{
            alert("veuillez remplire le champ😥")
        }
            
        
        }, 5000);
   
}

