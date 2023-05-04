var menuIcon = document.querySelector('.menu-icon')
var ul =document.querySelector('.ul')

menuIcon.addEventListener('click',()=>{
   
    if(ul.classList.contains('ativo')){
        ul.classList.remove('ativo')
        document.querySelector('.menu-icon img').src = 'img/menu.png'
    }
    else{
        ul.classList.add('ativo')
        document.querySelector('.menu-icon img').src = 'img/close.png'
    }
})


/*document.querySelector(). A primeira variável menuIcon busca o elemento HTML com a classe .menu-icon, e a segunda variável ul busca o elemento HTML com a classe .ul.

Em seguida, o código adiciona um evento de clique ao elemento menuIcon usando addEventListener(). Quando o usuário clicar no elemento, a função anônima será executada.

Dentro da função anônima, o código verifica se o elemento ul possui a classe ativo usando o método classList.contains(). Se ele possuir a classe ativo, ela será removida usando classList.remove(), e a imagem do ícone do menu será alterada para menu.png.

Por outro lado, se o elemento ul não possuir a classe ativo, ela será adicionada usando classList.add(), e a imagem do ícone do menu será alterada para close.png.*/