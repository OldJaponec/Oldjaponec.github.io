var myImage = document.querySelector('img');

/*
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://upload.wikimedia.org/wikipedia/commons/5/5f/THC-skeletal.png') {
      myImage.setAttribute ('src','http://s018.radikal.ru/i524/1307/52/9b67a274c513.png');
    } else {
      myImage.setAttribute ('src','https://upload.wikimedia.org/wikipedia/commons/5/5f/THC-skeletal.png');
    }
}
*/
var knop = document.querySelector('button');
var Head = document.querySelector('h1');

function setUserName() {
  var Name = prompt('Please enter your name.');
  localStorage.setItem('name', Name);
  Head.textContent = 'Иди нахуй, ' + Name + '!';
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
      var storedName = localStorage.getItem('name');
      Head.textContent = 'Иди нахуй, ' + storedName + '!';
}

knop.onclick = function() {
    setUserName();
}