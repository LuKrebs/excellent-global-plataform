$(document).ready(function() {
	var alunos = [
		"Luciano",
		"carol",
		"aluno1",
		"aluno2",
		"aluno3",
		"aluno4",
		"aluno5",
		"aluno6"
	];

	var psw = [
		"teacher12345",
		"teacher12345",
		"aluno1",
		"aluno2",
		"aluno3",
		"aluno4",
		"aluno5",
		"aluno6"
	];

	$('form').submit(function() {
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
		return false;
	});
	

});

