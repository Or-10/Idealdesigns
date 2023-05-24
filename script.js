function sendmail(){
    var parms = {

        firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    };
    const serviceId="service_9ppkg13";
    const templateID="template_erdzgpn";
    emailjs.send(serviceId,templateID,parms)
    .then(
        res =>{
            document.getElementById("firstname").value="";
            document.getElementById("lastname").value="";
            document.getElementById("email").value="";
            console.log(res);
            alert("message sent succesfully ");

        }
    )
      .catch(err=>console.log(err)) 

    

    
}