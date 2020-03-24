function changeImg(age) {
  if(age.name === 'baby'){
  var img1 = document.getElementById("img").src = "adultpudle.jpg";

  age.name = 'adult';
  } else {
  var img1 = document.getElementById("img").src = "babypudle.jpg";

  age.name = 'baby';
  }
}
