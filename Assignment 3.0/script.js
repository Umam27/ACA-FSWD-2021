let gettoken=document.getElementById("button1");

gettoken.onclick= async function(){
    let token = await fetch('http://localhost:12345/get_token');
    let token_text= await token.text();
    console.log(token);
    document.getElementById("show_token_here").innerHTML=token_text;
}


let send_data=document.getElementById("button2");
send_data.onclick= async function(){
    var formdata={
        "username" : document.getElementById("name").value,
        "data" : document.getElementById("data").value,
        "token" : document.getElementById("token").value,
    }

    let response= await fetch('http://localhost:12345/register',{
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formdata)
    });

    console.log(response);

    if(response.ok){
        document.getElementById("confirm").innerHTML="you are successfully registered";
    }
    else{
        let responsetext=response.text();
        document.getElementById("confirm").innerHTML=responsetext;
    }
}

let get_data=document.getElementById("button3");
get_data.onclick= async function(){

    var data={
        "token": document.getElementById("token2").value
    }

    let response_data= await fetch('http://localhost:12345/get_data',{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let response_print_text= await response_data.text();

    if(response_data.ok){
        document.getElementById("data_here").innerHTML=response_print_text;
    }
}