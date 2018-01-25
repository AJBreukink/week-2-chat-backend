/*
var request = new XMLHttpRequest();
var otherName = document.getElementById('theOther').value;
var userMsg = document.getElementById('usermsg').value;
var userName = document.getElementById('username').value;
var chatarea = document.getElementById('chatbox');
var IDarray = [];
var lastID = " ";
var countID = 0;

function myFunction() {
  var userMsg = document.getElementById('usermsg').value;
  var userName = document.getElementById('username').value;
// Returns successful data submission message when the entered information is stored in database.
  var dataString = 'username=' + userName + '&usermsg=' + userMsg + '&submit=Submit';
// AJAX code to submit form.
  $.ajax({
    type: "GET",
    url: "http://localhost/week2/chatbackend.php",
    data: dataString,
    cache: false,
  });
  }
  return false;
}*/


function sendMSG() {
         var xhr = new XMLHttpRequest();
         var userMsg = document.getElementById('usermsg').value;
         var userName = document.getElementById('username').value;
         var urlvalue = 'https://localhost/week2/chatbackend.php?username='+ userName + '&usermsg=' + userMsg + '&submit=Submit';
         xhr.open('get', urlvalue , true);
         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
         xhr.send();
      }

/*function SendMessage(){
  var d = new Date();
  var timestamp = d.toLocaleTimeString();
  var userMsg = document.getElementById('usermsg').value;
  var userName = document.getElementById('username').value;
  var urlsend = "http://localhost/week2/chatbackend.php?username="+userName+"&usermsg="+userMsg+"&submit=Submit";
  //"http://localhost/week2/chatbackend.php?username=naam+140&usermsg=test+140&submit=Submit"
  //var urlsend = "https://codegorilla.nl/read_write/api.php?action=write&mykey="+ userName + "&value="+"<small>"+"(" +timestamp+") "+"</small>"+"<strong>"+ userName+"</strong>"+ " : "+userMsg;
  request.open("get", urlsend, true);
  request.send();
  var IDmsg = request.response;
  //console.log("IDmsg: " +IDmsg);
  chatGet(IDmsg);
  var newMSG = request.response;
  //console.log(request.response);
  chatarea.innerHTML += newMSG+"<br>";
} */

/*function chatGet(id){
    var urlread = "https://codegorilla.nl/read_write/api.php?action=read&mykey="+ userName +"&id="+id;
		  /*request.onreadystatechange = function() {
			if(request.readyState == 4 && request.status == 200){
				document.getElementById('chatbox').innerHTML += request.responseText+"<br>";
			}
		}*/
		//request.open('GET', urlread, false);
		//request.send();
  //console.log(request.response)
	//}
/*function otherChat (){
    var urlList = "https://www.codegorilla.nl/read_write/api.php?action=list&mykey="+otherName;

    request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200){
      //console.log(requestOther.responseText);
      //document.getElementById('chatbox').innerHTML += requestOther.responseText+"<br>";
        }
      }
    request.open('GET', urlList, false);
    request.send();

    IDarray = request.response;
    IDarray = IDarray.split(",");
    //console.log(IDarray);
    for (i = 0 ; i < IDarray.length; i++) {
      IDarray[i] = parseInt(IDarray[i]);
    }
    lastID = IDarray.slice(-1).pop();
    //countID = IDarray.slice(-1).pop();
    console.log ("lastID: " +lastID);
}

function refreshChat(){
    var refreshurl = "https://codegorilla.nl/read_write/api.php?action=read&mykey="+ otherName +"&id="+lastID;
    var refreshrequest = new XMLHttpRequest;

    for (i = 0; i < IDarray.length; i++) {
      if (IDarray[i] >= countID) {
        var messageID = IDarray[i];
        refreshrequest.onreadystatechange = function() {
        if(refreshrequest.readyState == 4 && refreshrequest.status == 200){
          //console.log(request.response);
          document.getElementById('chatbox').innerHTML += refreshrequest.response+"<br>";
            }
          }
        countID = messageID + 1;
      }

    }
    refreshrequest.open('GET', refreshurl, false);
    refreshrequest.send();

    //countID++;
    //console.log("countid: " +countID);
}

//window.setInterval(function(){refreshChat();otherChat()}, 1000);
*/
