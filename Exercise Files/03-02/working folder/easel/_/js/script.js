function init() {
	var canvas = document.getElementById("easel");
	var stage = new createjs.Stage(canvas);

	var sentence = new createjs.Text();
	sentence.text = "The quick brown fox jumped over the lazy dog.";
	sentence.font = "bold 30px Times";
	sentence.color = "blue";
	sentence.x = 50;
	sentence.y = 100;
	sentence.lineWidth = "150";

	var sentence2 = new createjs.Text("The quick brown fox jumped even further", "bold 30px Times", "yellow");
	sentence2.y = 200;
	sentence2.rotation = 30;
	sentence2.textAlign = "center";

	stage.addChild(sentence);
	stage.addChild(sentence2);
	stage.update();
}