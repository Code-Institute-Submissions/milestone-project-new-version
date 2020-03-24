//index.js  
function submit() {
	Email.send({
	SecureToken : "db40a57d-4ad8-4807-a01d-267cd49a34bc",
	To : 'aleks.whirlpool@gmail.com',
	From : "aleks.whirlpool@gmail.com",
	Subject : "from webpage",
	Body : document.getElementById('contact-form'),
	}).then(
		message => alert("mail sent successfully")
	);
}