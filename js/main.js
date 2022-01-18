window.onload = iniciar

function iniciar() {
	const BTN_CALCULAR = document.getElementById('btn_calcular')
	BTN_CALCULAR.addEventListener('click', clickBtnCalcular)
}

function clickBtnCalcular() {
	const INPUT_PESO = document.getElementById('input_peso').value
	const INPUT_ALTURA = document.getElementById('input_altura').value
	const RESULT = document.getElementById('result')
	
	let imc = INPUT_PESO / (INPUT_ALTURA * INPUT_ALTURA) 
	let imc_round = Math.round((imc + Number.EPSILON) * 100) / 100
	
	isNaN(imc_round) ? RESULT.innerHTML = 'Por favor ingrese numeros' : RESULT.innerHTML = imc_round
}