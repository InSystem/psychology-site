//document.addEventListener("DOMContentLoaded", function(){
//	document.forms["contact-form"].addEventListener("submit",postData);
//});
//
//function postData(formsubmission) {
//
//	var userName = encodeURIComponent(document.getElementById("username").value);
//    var email = encodeURIComponent(document.getElementById("email-address").value);
//   var phone = encodeURIComponent(document.getElementById("phone-number").value);
//    var day = encodeURIComponent(document.getElementById("datepicker").value);
//    var message = encodeURIComponent(document.getElementById("message").value);
//
//	 Checks if fields are filled-in or not, returns response "<p>Please enter your details.</p>" if not.
//        	if(userName == "" || phone == ""){
//        		document.getElementById("response").innerHTML = "<p>Пожалуйста, введите ваши данные</p>";
//        		return;
//        	}
//
//	 Parameters to send to PHP script. The bits in the "quotes" are the POST indexes to be sent to the PHP script.
//        	var params = "username=" + userName + "&email=" + email + "&phone=" + phone + "&day=" + day  + "&message=" + message;
//
//	var http = new XMLHttpRequest();
//	http.open("POST","send.php",true);
//
//	 Set headers
//	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//	http.setRequestHeader("Content-length", params.length);
//	http.setRequestHeader("Connection", "close");
//
//	http.onreadystatechange = function(){
//		if(http.readyState == 4 && http.status == 200){
//			document.getElementById("response").innerHTML = http.responseText;
//		}
//	}
//	http.send(params);
//	formsubmission.preventDefault();
//}
