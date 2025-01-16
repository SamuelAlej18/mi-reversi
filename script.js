//texto a escribirse solo
const palabra='Samuel Alejandro, 6 de diciembre del 2024'
let palabraConParpadeo=''
let letraIndividual=0
const marcaDeAgua = document.getElementById('marcaDeAgua')
function parpadeo(){
    palabraConParpadeo=palabraConParpadeo+palabra[letraIndividual]
    if (letraIndividual<palabra.length-1){
        letraIndividual++
    }
    else{
        clearInterval(intervaloParpadeo)
    }
    marcaDeAgua.innerText=palabraConParpadeo
}
const intervaloParpadeo=setInterval(parpadeo, 70)

//crear el tablero
const tablero=document.getElementById('tablero')

for (let columnaId=1; columnaId<=8; columnaId++){
  for (let filaId=1; filaId<=8; filaId++){
    let elementoAAgregar=document.createElement('div')
    elementoAAgregar.id=String(columnaId)+String(filaId)
    elementoAAgregar.classList.add('divsTablero')
    elementoAAgregar.style.backgroundColor='#8800ff'
    tablero.append(elementoAAgregar)
  }
}
document.getElementById('44').style.backgroundColor='black'
document.getElementById('55').style.backgroundColor='black'
document.getElementById('45').style.backgroundColor='white'
document.getElementById('54').style.backgroundColor='white'
let cantidadTotalNegrasYBlancas=4
let cantidadDeBlancas=2
let cantidadDeNegras=2
//hacer click en el tablero
tablero.addEventListener('click', presionarDivs)


let colorTurno
function modificarCantidadesDeBlancosYNegros(){
  if (colorTurno=='black'){
    cantidadDeNegras++
    cantidadDeBlancas--
  }
  else{
    cantidadDeNegras--
    cantidadDeBlancas++
  }
}


function presionarDivs(e){
  let idElementoPresionado=Number(e.target.id)
  let ejecutarCambioDeTurno=false
  let colorConPosibilidadDeCambiar=e.target.style.backgroundColor!='white'&&e.target.style.backgroundColor!='black'

  if (document.getElementById('turno').innerText=='Es turno del jugador negro'){
    colorTurno='black'
  }
  else{
    colorTurno='white'
  }

  //Trabajo con fila hacia la izquierda
  let idDelElementoDeLaIzquierda=idElementoPresionado-1

  if (colorConPosibilidadDeCambiar&&document.getElementById(idDelElementoDeLaIzquierda)!=null&&document.getElementById(idDelElementoDeLaIzquierda).style.backgroundColor!=colorTurno){
    let menorelementoDeLaFila=Number(e.target.id[0])*10+1
    
    for (let x=idElementoPresionado-1; x>=menorelementoDeLaFila; x--){
      if (document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor=='rgb(136, 0, 255)'){
        break
      }

      else if(document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor==colorTurno){
        for (let r=x+1; r<idElementoPresionado; r++){
          if (document.getElementById(r)!=null){
          document.getElementById(r).style.backgroundColor=colorTurno
          }
          modificarCantidadesDeBlancosYNegros()
        }
        ejecutarCambioDeTurno=true
        break
      }
    }
  }


  //Trabajo con fila hacia la Derecha
  let idDelElementoDeLaDerecha=idElementoPresionado+1

  if (colorConPosibilidadDeCambiar&&document.getElementById(idDelElementoDeLaDerecha)!=null&&document.getElementById(idDelElementoDeLaDerecha).style.backgroundColor!=colorTurno){
    let mayorElementoDeLaFila=Number(e.target.id[0])*10+8

    for (let x=idElementoPresionado+1; x<=mayorElementoDeLaFila; x++){
      if (document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor=='rgb(136, 0, 255)'){
        break
      }

      else if(document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor==colorTurno){
        for (let r=x-1; r>idElementoPresionado; r--){
          if (document.getElementById(r)!=null){
            document.getElementById(r).style.backgroundColor=colorTurno
            }
          modificarCantidadesDeBlancosYNegros()
        }
        ejecutarCambioDeTurno=true
        break
      }
    }
  }

    //Trabajo con fila hacia arriba
    let idDelElementoDeArriba=idElementoPresionado-10
    if (colorConPosibilidadDeCambiar&&document.getElementById(idDelElementoDeArriba)!=null&&document.getElementById(idDelElementoDeArriba).style.backgroundColor!=colorTurno){
      
      for (let x=idElementoPresionado-10; x>=11; x=x-10){
        if (document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor=='rgb(136, 0, 255)'){
          break
        }
  
        else if(document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor==colorTurno){
          for (let r=x+10; r<idElementoPresionado; r=r+10){
            if (document.getElementById(r)!=null){
              document.getElementById(r).style.backgroundColor=colorTurno
              }
            modificarCantidadesDeBlancosYNegros()
          }
          ejecutarCambioDeTurno=true
          break
        }
      }
    }

    //Trabajo con fila hacia la Derecha
    let idDelElementoDeAbajo=idElementoPresionado+10

    if (colorConPosibilidadDeCambiar&&document.getElementById(idDelElementoDeAbajo)!=null&&document.getElementById(idDelElementoDeAbajo).style.backgroundColor!=colorTurno){
      for (let x=idElementoPresionado+10; x<=88; x=x+10){
        if (document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor=='rgb(136, 0, 255)'){
          break
        }

        else if(document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor==colorTurno){
          for (let r=x-10; r>idElementoPresionado; r=r-10){
            if (document.getElementById(r)!=null){
              document.getElementById(r).style.backgroundColor=colorTurno
              }
            modificarCantidadesDeBlancosYNegros()
          }
          ejecutarCambioDeTurno=true
          break
        }
      }
    }

    //Diagonal izquierda arriba
    let idDelElementoDeDiagonalIzquierdaArriba=idElementoPresionado-11
    if (colorConPosibilidadDeCambiar&&document.getElementById(idDelElementoDeDiagonalIzquierdaArriba)!=null&&document.getElementById(idDelElementoDeDiagonalIzquierdaArriba).style.backgroundColor!=colorTurno){
      for (let x=idElementoPresionado-11; x>=11; x=x-11){

        if (document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor=='rgb(136, 0, 255)'){
          break
        }
  
        else if(document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor==colorTurno){
          for (let r=x+11; r<idElementoPresionado; r=r+11){
            if (document.getElementById(r)!=null){
              document.getElementById(r).style.backgroundColor=colorTurno
              }
            modificarCantidadesDeBlancosYNegros()
          }
          ejecutarCambioDeTurno=true
          break
        }
      }
    }

    //Diagonal derecha abajo
    let idDelElementoDeDiagonalDerechaAbajo=idElementoPresionado+11

    if (colorConPosibilidadDeCambiar&&document.getElementById(idDelElementoDeDiagonalDerechaAbajo)!=null&&document.getElementById(idDelElementoDeDiagonalDerechaAbajo).style.backgroundColor!=colorTurno){
      for (let x=idElementoPresionado+11; x<=88; x=x+11){
        if (document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor=='rgb(136, 0, 255)'){
          break
        }

        else if(document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor==colorTurno){
          for (let r=x-11; r>idElementoPresionado; r=r-11){
            if (document.getElementById(r)!=null){
              document.getElementById(r).style.backgroundColor=colorTurno
              }
            modificarCantidadesDeBlancosYNegros()
          }
          ejecutarCambioDeTurno=true
          break
        }
      }
    }
    
    //Diagonal izquierda abajo
    let idDelElementoDeDiagonalIzquierdaAbajo=idElementoPresionado+9

    if (colorConPosibilidadDeCambiar&&document.getElementById(idDelElementoDeDiagonalIzquierdaAbajo)!=null&&document.getElementById(idDelElementoDeDiagonalIzquierdaAbajo).style.backgroundColor!=colorTurno){
      for (let x=idDelElementoDeDiagonalIzquierdaAbajo; x<=81; x=x+9){
        if (document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor=='rgb(136, 0, 255)'){
        break
        }
  
        else if(document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor==colorTurno){
          for (let r=x-9; r>idElementoPresionado; r=r-9){
            if (document.getElementById(r)!=null){
              document.getElementById(r).style.backgroundColor=colorTurno
              }
            modificarCantidadesDeBlancosYNegros()
          }
          ejecutarCambioDeTurno=true
          break
        }
      }
    }

    //Diagonal derecha arriba
    let idDelElementoDeDiagonalDerechaArriba=idElementoPresionado-9

    if (colorConPosibilidadDeCambiar&&document.getElementById(idDelElementoDeDiagonalDerechaArriba)!=null&&document.getElementById(idDelElementoDeDiagonalDerechaArriba).style.backgroundColor!=colorTurno){
      for (let x=idDelElementoDeDiagonalDerechaArriba; x>=18; x=x-9){
        if (document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor=='rgb(136, 0, 255)'){
        break
        }
  
        else if(document.getElementById(x)!=null&&document.getElementById(x).style.backgroundColor==colorTurno){
          for (let r=x+9; r<idElementoPresionado; r=r+9){
            if (document.getElementById(r)!=null){
              document.getElementById(r).style.backgroundColor=colorTurno
              }
            modificarCantidadesDeBlancosYNegros()
          }
          ejecutarCambioDeTurno=true
          break
        }
      }
    }

  
    if(ejecutarCambioDeTurno){
      e.target.style.backgroundColor=colorTurno
      if (colorTurno=='black'){
        cantidadDeNegras++
      }
      else{
        cantidadDeBlancas++
      }
      cambioDeTurno()
      conteo()
      llegarAlFinal()
    }
}

document.getElementById('cambioDeTurno').addEventListener('click', cambioDeTurno)
function cambioDeTurno(){
  if (document.getElementById('turno').innerText=='Es turno del jugador negro'){
    document.getElementById('turno').innerText='Es turno del jugador blanco'
  }
  else{
    document.getElementById('turno').innerText='Es turno del jugador negro'
  }
}

function conteo(){
  document.getElementById('conteo').innerText='Hay '+cantidadDeBlancas+' blancas y '+cantidadDeNegras+' negras'
}


function llegarAlFinal(){                  
  if (cantidadTotalNegrasYBlancas<63&&cantidadDeBlancas>0&&cantidadDeNegras>0){
    cantidadTotalNegrasYBlancas++
  }
  else{
    document.querySelector('main').style.display='none'
    document.getElementById('final').style.display=''
    let textoFinal
    if (cantidadDeBlancas>cantidadDeNegras){
      textoFinal='Muchas felicidades al jugador de fichas blancas por ganar esta partida con '+cantidadDeBlancas+' piezas, mientras que las negras se quedaron atrás con '+cantidadDeNegras+' fichas. Si deseas volver a jugar recarga la página'
    }
    else{
      textoFinal='Muchas felicidades al jugador de fichas negras por ganar esta partida con '+cantidadDeNegras+' piezas, mientras que las blancas se quedaron atrás con '+cantidadDeBlancas+' fichas. Si deseas volver a jugar recarga la página'
    }
    document.getElementById('resultado').innerText=textoFinal
  }
}

document.getElementById("reglasDelJuego").addEventListener('click', ()=>{
  document.getElementById('divReglas').style.display='flex'
})

document.getElementById("cerrarReglas").addEventListener('click', ()=>{
  document.getElementById('divReglas').style.display='none'
})


