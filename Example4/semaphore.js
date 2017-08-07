
function semaphore(){
  var semColors = document.getElementsByClassName('semaphore-colors');
  semColors[0].style.background = 'red';
  semColors[1].style.background = 'grey';
  semColors[2].style.background = 'grey';

  function changeToYellow(){
    semColors[1].style.background = 'yellow';
  }

  function changeToGreen(){
    semColors[0].style.background = 'grey';
    semColors[1].style.background = 'grey';
    semColors[2].style.background = 'green';
  }

  var semTimerYellow = setTimeout(changeToYellow, 1000);
  var semTimerGreen = setTimeout(changeToGreen, 3000);
  var start = setInterval(semaphore, 6000);

}

semaphore();
