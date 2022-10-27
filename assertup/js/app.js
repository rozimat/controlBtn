const radios = document.getElementsByClassName('radio');
const left1 =document.querySelector("#left");
const right1 =document.querySelector("#right");


left1.addEventListener('click', ()=>{
  var checked_id = 1
  if (checked_id > 1){
    checked_id = checked_id - 1;
    document.getElementById('radion-'+checked_id).checked =true

  }
})


right1.addEventListener('click', ()=>{
  var checked_id = 1
  if (checked_id < radios.length){
    checked_id = checked_id + 1;
    document.getElementById('radion- '+checked_id).checked =true
    
  }
})
