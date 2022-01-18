Ver_Senha = document.querySelector('.Isenha');
Input_senha = document.getElementById('senha');

Ver_Senha.addEventListener('click', function(){
    // Ver senha 
    if(Input_senha.type == 'password'){
        Ver_Senha.className = 'far fa-eye-slash Isenha2';
        Input_senha.type = 'text';
    }
    // Não ver a senha
    else{
        Ver_Senha.className = 'far fa-eye Isenha';
        Input_senha.type = 'password';
    }
});