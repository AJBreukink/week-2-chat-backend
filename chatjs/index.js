function sendMSG() {
         var xhr = new XMLHttpRequest();
         var userMsg = document.getElementById('usermsg').value;
         var userName = document.getElementById('username').value;
         var urlvalue = 'http://www.wijzijncodegorilla.nl/arendjan/week2_chatbackend/chatbackend.php?mykey='+ userName + '&value=' + userMsg + '&submit=Submit';
         xhr.open('post', urlvalue , true);
         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
         xhr.send();
}

function putMSG () {
      var xhr = new XMLHttpRequest();
      var userMsg = document.getElementById('usermsg').value;
      var userName = document.getElementById('username').value;
      var value = "?mykey=" + userName + "&value=" + userMsg+'&submit=Submit';
      xhr.open('put', "https://localhost/week2/chatbackend.php", true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.send(value);
}

function getMSG () {
  var xhr = new XMLHttpRequest();
  var url = 'http://www.wijzijncodegorilla.nl/arendjan/week2_chatbackend/chatbackend.php?mykey=&value';
  xhr.open('get', url , false);
  xhr.send();
  document.getElementById('display').innerHTML = xhr.response+"<br>"
  console.log(xhr.response);
}

setInterval(function(){getMSG()}, 1000);
