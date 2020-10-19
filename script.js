
//Determinar altura e largura

var height;
var width;
var hp = 1;

function resizeField (){	
	height = window.innerHeight;
	width = window.innerWidth;
}

resizeField()
	

function randomPosition(){

	//caso exista um mosquito na tela, remove antes de gerar outro.
	if (document.getElementById('Fly')) {
		document.getElementById('Fly').remove();

		//caso o usuario não tenha clicado a tempo, um ponto de vida e retirado
		//quando todos os 5 pontos de vida são removidos, redireciona para pagina de game over
		if (hp > 5) {
			
			window.location.href = 'game-over.html'

		}else
		{
			document.getElementById('hp' + hp).src = 'img/HPL.png';
			hp++;
		}
	}

	//Determinar posições randomicas dentro do body
	 var pY = Math.floor(Math.random() * height) - 90;
	 var pX = Math.floor(Math.random() * width) - 90;

	 pX = pX < 0 ? 0 : pX;
	 pY = pY < 0 ? 0 : pY;

	 //Criar elemento dentro do DOM
	 var fly = document.createElement('img');

	 //chamada da função que alterna as imagens
	 fly.src = 'img/' + randomImage();

	 //Chamada da função de tamanho e lado aleatorios
	 fly.className = randomSize() +' '+ randomSide();

	 //Atribuir coordenadas randomicas a imagem
	 fly.style.left = pX + 'px';
	 fly.style.top = pY + 'px';
	 fly.style.position = 'absolute';
	 fly.id = 'Fly'

	 //Detecção do click na mosca
	 fly.onclick = function(){
	 	this.remove()
	 }

	 document.body.appendChild(fly);

	 console.log(pX, pY)
	 
}

function randomSize (){
	//Determina tamanhos aleatorios para as imagens
	var size = Math.floor(Math.random() * 3);

	/*De acordo com os numeros gerados, 
	retorna uma string da classe que dara o tamanho da imagem*/
	switch(size){
		case 0:
			return 'LittleFly'

		case 1:
			return 'MediumFly'

		case 2:
			return 'BigFly'

	}
}

function randomSide (){
	//Determina lados aleatorios para as imagens
	var side = Math.floor(Math.random() * 2);
	console.log(side)
	/*De acordo com os numeros gerados, 
	retorna uma string da classe que dara o lado da imagem*/
	switch(side){
		case 0:
			return 'RightSide'

		case 1:
			return 'LeftSide'
	}
}

function randomImage(){
	//Alterna entre 4 imagens de mosca aleatoriamente
	var img = Math.floor(Math.random() * 4)

	//retorno da string refente a imagem com base no numero gerado
	switch(img){
		case 0: 
			return 'mosca.png'
		case 1: 
			return 'mosca2.png'
		case 2: 
			return 'mosca3.png'
		case 3: 
			return 'mosca4.png'
	}
}

