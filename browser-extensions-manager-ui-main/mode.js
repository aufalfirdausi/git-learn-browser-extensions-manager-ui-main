
let light = localStorage.getItem('light') 
const themeSwitch = document.getElementById('theme-switch')

const enableLightMode = () => {
    document.body.classList.add('light')
    localStorage.setItem('light', 'active')
}

const disableLightMode = () => {
    document.body.classList.remove('light')
    localStorage.removeItem('light')
}

if(light === "active"){
    document.body.classList.add('light')    
}

themeSwitch.addEventListener('click', () => {
    light = localStorage.getItem('light')
    if(light !== "active"){
        enableLightMode()
    } else {
        disableLightMode()
    }
})