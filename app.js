document.addEventListener('DOMContentLoaded', function(){

//¿Cómo obtengo la informacion de los actores del api?"
//usando fetch
//const promesa = fetch('https://dragonball-api.com/api/characters')
//console.log(promesa);

 fetch('https://dragonball-api.com/api/characters')
  .then(respuesta => respuesta.json())
  .then(data => console.log(data));
})
