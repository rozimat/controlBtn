const radios = document.getElementsByClassName('radio');
var checked_id = 1

function left() {
  if (checked_id > 1){
    checked_id = checked_id - 1;
    document.getElementById('radion-'+checked_id).checked =true

  }
}
function right(){
  if (checked_id < radios.length){
    checked_id = checked_id + 1;
    document.getElementById('radion- '+checked_id).checked =true
    
  }
}