let btn_aceptar = document.getElementById('btn-aceptar')
let btn_reiniciar = document.getElementById('btn-reiniciar')

btn_aceptar.addEventListener('click', function(){
    let h1 = document.getElementById('h1')
    let foto = document.getElementById('foto')
    let opc1 = document.getElementById('input1').value
    let opc2 = document.getElementById('input2').value
    let opc3 = document.getElementById('input3').value
    let opc4 = document.getElementById('input4').value
    let opc5 = document.getElementById('input5').value
    let opc = new Array()
    let opciones = 0
    let respuesta = 0

    if(opc1 != ''){
        opc[opciones] = opc1
        opciones++
    }
    if(opc2 != ''){
        opc[opciones] = opc2
        opciones++
    }
    if(opc3 != ''){
        opc[opciones] = opc3
        opciones++
    }
    if(opc4 != ''){
        opc[opciones] = opc4
        opciones++
    }
    if(opc5 != ''){
        opc[opciones] = opc5
        opciones++
    }

    if(opc.length === 0){
        h1.innerHTML = 'Primero ingres&#225; las opciones'
    }else{
        foto.src = "extras/decididor1.png"
        h1.innerHTML = 'Mmmm estoy pensando lo mejor para vos'
        setTimeout(() => foto.src = "extras/decididor2.png", 400)
        setTimeout(() => foto.src = "extras/decididor1.png", 800)
        setTimeout(() => foto.src = "extras/decididor2.png", 1200)
        setTimeout(() => foto.src = "extras/decididor1.png", 1600)
        setTimeout(() => foto.src = "extras/decididor3.png", 2000)
        setTimeout(function(){
            respuesta = Math.round(Math.random() * (opc.length - 1))
            h1.innerHTML = 'Elijo que comas: ' + opc[respuesta].toUpperCase()
        }, 2000)
    }
})

btn_reiniciar.addEventListener('click', function(){
    document.getElementById('h1').innerHTML = ''
    document.getElementById('foto').src = "extras/decididor.png"
    document.getElementById('input1').value = ''
    document.getElementById('input2').value = ''
    document.getElementById('input3').value = ''
    document.getElementById('input4').value = ''
    document.getElementById('input5').value = ''

})