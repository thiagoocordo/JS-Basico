function siempreTrue(){
    return true
}

const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));
delay(5000)
  .then(() => console.log(`Hola soy una promesa`))
