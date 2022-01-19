function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    var botao = document.getElementById('botao');
    console.log(data);
    document.getElementById('nome').value = data.given_name.toLowerCase(); 
    document.getElementById('email').value = data.email;  
    botao.click();
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "Tirei O iD HAHAHA", /* Eu tirei o meu id por motivos de segurança */
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
    type : "standard",
    shape : "rectangular",
    theme : "outline",
    text : "$ {button.text}",
    size : "large",
    logo_alignment : "left"
    }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}