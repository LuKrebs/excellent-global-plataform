alunos = [
	"luciano",
	"carol"
];

psw = [
	"12345",
	"12345"
];




function testLogin() {
	var a = document.getElementById('login').value;
	var b = document.getElementById('senha').value;

	for (var i = 0; i < alunos.length; i++) {
		if (a === alunos[i] && b === psw[i]) {
			window.open('../platform/platform.html');
			document.getElementById('senha').value = "";
			document.getElementById('login').value = "";
		}
		else {
			document.getElementById('fail').style.display = 'inline-block';
			document.getElementById('senha').value = "";
			document.getElementById('login').value = "";
		}	
	}
}
