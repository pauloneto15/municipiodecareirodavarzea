function cliqueMenu () {
    if (menuPrincipal.style.transform == 'translateY(0%)') {
        menuPrincipal.style.transform = 'translateY(-100%)'
    } else {
        menuPrincipal.style.transform = 'translateY(0%)'
    }
}

function exibirMenuCidade () {
    if (menuDaCidade.style.display == 'block') {
        menuDaCidade.style.display = 'none'
    } else {
        menuDaCidade.style.display = 'block'
    }
}