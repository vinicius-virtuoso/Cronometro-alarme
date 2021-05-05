const minutos = document.querySelector('#min-js')
const segundos = document.querySelector('#seg-js')
const selectMin = document.querySelector('#js-select-min')
const selectSeg = document.querySelector('#js-select-seg')
const buttonStart = document.querySelector('#btnStart')
const closeModal = document.querySelector('#btnClose')
const modal = document.querySelector('.box-modal')
const sound = document.querySelector("#sound");



var cronometroSeg;
var minutoAtual; 
var segundoAtual;
var interval;


for(let i = 0; i <= 60; i++){
  selectMin.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

for(let i = 0; i <= 60; i++){
  selectSeg.innerHTML+='<option value="'+i+'">'+i+'</option>';
}



buttonStart.addEventListener('click',() => {
  
  minutoAtual = selectMin.value;
  segundoAtual = selectSeg.value;

  interval = setInterval(() => {

      segundoAtual--;
      if(segundoAtual <= 0){
          if(minutoAtual > 0){
              minutoAtual--;
              segundoAtual = 59;
          }else{
              modal.classList.add('open');
              sound.play();
              clearInterval(interval);
          }
      }
      
      minutos.innerHTML = minutoAtual < 10 ? '0' + minutoAtual : minutoAtual;
      segundos.innerHTML = segundoAtual < 10 ? '0' + segundoAtual : segundoAtual;
  },1000);

  closeModal.addEventListener('click', () => {

    modal.classList.remove('open');
    sound.pause();
  })
})