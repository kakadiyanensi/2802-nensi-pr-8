let checkUser = JSON.parse(localStorage.getItem('checkUserLogin'));

        if(!checkUser){
            alert("pehla login to karto aav");
            window.location.href = "pages-login.html";
        }