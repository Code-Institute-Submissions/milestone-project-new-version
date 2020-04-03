//index.js  
function submit() {
	Email.send({
		SecureToken : "db40a57d-4ad8-4807-a01d-267cd49a34bc",
		To : 'aleks.whirlpool@gmail.com',
		From : document.getElementById('email').value,
		Subject :  document.getElementById('subject').value,
		Body : document.getElementById('message').value + ' Regards' + ' ' + document.getElementById('name').value,
	}).then(
		message => alert("mail sent successfully")
	);
}

