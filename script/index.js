let terminal = document.getElementById('terminal')

let jornal = document.getElementById('jornal')

let terminal_Waring = document.getElementById('terminal-waring')

let loading_Screen = document.getElementById('loading-screen')
let loading_Porcentage = document.getElementById('loading-porcentage')
let loading_Content = document.getElementById('loading-content')

function openJornal() {
    terminal.style.display = "none"
    jornal.style.display = "flex"
    terminal_Waring.style.display="none"
}

function loadingJornal() {
    terminal.style.display="none"
    loading_Screen.style.display="unset"
    for (let index = -1; index < 101; index++) {
        setTimeout(() => {
            loading_Content.style.width = index+"%"    
            loading_Porcentage.innerHTML = index+"%"
            console.log(index)
            if (index==100) {
                setTimeout(() => {
                    openJornal()
                    loading_Screen.style.display="none"
                }, 500);
            }
        }, 50*index);
    }
}

function returnTerminal() {
    terminal.style.display = "flex"
    jornal.style.display = "none"
    terminal_Waring.style.display="none"
}


function terminalWaring() {
    terminal_Waring.style.opacity="1"
    setTimeout(() => {
        terminal_Waring.style.paddingLeft="10px"
    }, 100);
    setTimeout(() => {
        terminal_Waring.style.paddingLeft="0px"
    }, 200);
}