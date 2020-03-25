function home() {
  location.href = "index.html";
}

function changeImg1(age) {
  if(age.name === 'baby'){
   document.getElementById("img").src = "adultpudle.jpg";

  age.name = 'adult';
  } else {
   document.getElementById("img").src = "babypudle.jpg";

  age.name = 'baby';
  }
}

function changeImg2(age) {
  if(age.name === 'baby'){
   document.getElementById("img").src = "adultbisyong.jpg";

  age.name = 'adult';
  } else {
   document.getElementById("img").src = "babybisyong.jpg";

  age.name = 'baby';
  }
}

function changeImg3(age) {
  if(age.name === 'baby'){
   document.getElementById("img").src = "adultgoldendudle.jpg";

  age.name = 'adult';
  } else {
   document.getElementById("img").src = "babygoldendudle.jpg";

  age.name = 'baby';
  }
}

function changeImg4(age) {
  if(age.name === 'baby'){
   document.getElementById("img").src = "adultbordercollie.jpg";

  age.name = 'adult';
  } else {
   document.getElementById("img").src = "babybordercollie.jpg";

  age.name = 'baby';
  }
}
