var Layout ={
    CANVAS_WIDTH: 1280,
    CANVAS_HEIGHT: 720,
    centerX:0,
    centerY:0,
    stage: null,
    submitButton: null,
    equation: null,
    updateEquation: function(newText){
        this.equation.text = newText;
    },
    addEquation: function(){
        this.equation = new createjs.Text("", "18px Arial", "black");
        this.equation.x = 1150;
        this.equation.y = 50;
        this.stage.addChild(this.equation);
    },
    StartGame: function(){
        var canvas = document.getElementById("easel");
        this.stage = new createjs.Stage(canvas);
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;

        var graphics = new createjs.Graphics()
        .beginStroke("black")
        .drawRect(0, 0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT); 
        var frame = new createjs.Shape(graphics);
        frame.regX =this.CANVAS_WIDTH / 2;
        frame.regY =this.CANVAS_HEIGHT / 2;
        frame.x = this.centerX;
        frame.y = this.centerY;
        this.stage.addChild(frame);

        var graphics = new createjs.Graphics()
        .beginStroke("black")
        .drawRect(0, 0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT); 
        var frame = new createjs.Shape(graphics);
        frame.regX =this.CANVAS_WIDTH / 2;
        frame.regY =this.CANVAS_HEIGHT / 2;
        frame.x = this.centerX;
        frame.y = this.centerY;
        this.stage.addChild(frame);

        var ocean = new createjs.Shape();
        ocean.graphics.beginFill("#7770A0").beginStroke("#7770A0").drawRect(0, this.centerY, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.stage.addChild(ocean);

        graphics.beginFill("black").drawRect(0, 0, 30, this.CANVAS_HEIGHT);
        var bar = new createjs.Shape(graphics);
        this.stage.addChild(bar);

        //draw ticks
        for(let i = -1 ; i <this.CANVAS_HEIGHT - 1; i+=40){
            var tick = new createjs.Shape();
            tick.graphics
            .s("white").ss(2, 1, 1).mt(20, i).lt(35, i).closePath();
        
            tickTextContent = (this.centerY - i -1) / 40;
            var tickText = new createjs.Text(tickTextContent, "12px Arial", "white");
            tickText.x = 5;
            tickText.y = i - 5;
            tickText.align = "center";
        
            this.stage.addChild(tick, tickText);

            this.addEquation();
        }

        //if learning, add submit button
        this.submitButton = new createjs.Container();
        var buttonBox = new createjs.Shape();
        buttonBox.graphics.beginFill("white").beginStroke("black").drawRect(0, 0, 200, 100);
        this.submitButton.addChild(buttonBox);
        this.submitButton.regX = 100;
        this.submitButton.x = this.centerX;
        this.submitButton.y = 600;
        var buttonText = new createjs.Text("SUBMIT", "24px Arial", "black");
        buttonText.x = 50;
        buttonText.y = 50;
        this.submitButton.addChild(buttonText);
        this.submitButton.on("click", function(evt){
            Game.state="runProblem";
        });
        this.stage.addChild(this.submitButton);        
    }
}