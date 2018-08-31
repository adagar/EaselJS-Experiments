var Player = {
    dirgibleSystem:null,
    weightList: [],
    balloonList: [],
    addDirgBalloon: function(){
        let newBalloon = new createjs.Bitmap("_/images/soloBalloon.png");
        newBalloon.regX = 27;
        newBalloon.regY = 36;
        newBalloon.x = this.dirgibleSystem.dirgible.x + Math.floor(Math.random() * 150) + 100;
        newBalloon.y = this.dirgibleSystem.dirgible.y - 100;
        this.dirgibleSystem.addChild(newBalloon);
        var balloonString = new createjs.Shape();
        balloonString.graphics
            .clear()
            .s("black")
            .ss(1, 1, 1)
            .mt(newBalloon.x, newBalloon.y+30)
            .lt(this.dirgibleSystem.dirgible.x + 180, this.dirgibleSystem.dirgible.y + 50)
            .closePath();
        newBalloon.personalString = balloonString;
        this.dirgibleSystem.addChild(balloonString);
        this.balloonList.push(newBalloon);
    },
    removeDirgBalloon: function(){
        this.dirgibleSystem.removeChild(this.balloonList[this.balloonList.length - 1].personalString);
        this.dirgibleSystem.removeChild(this.balloonList.pop());
    },
    addDirgWeight: function(){
        let newWeight = new createjs.Bitmap("_/images/soloWeight.png");
        newWeight.x = Math.floor(Math.random() * 100) + 100;
        newWeight.y = 100;
        this.dirgibleSystem.addChild(newWeight);
        this.weightList.push(newWeight);
    },
    removeDirgWeight: function(){
        this.dirgibleSystem.removeChild(this.weightList.pop());
    },
    StartGame: function(){
        this.dirgibleSystem = new createjs.Container();
        var dirgible = new createjs.Bitmap("_/images/dirgible.png");
        dirgible.setBounds(0, 40, 250, 130);
        var linePointer = new createjs.Bitmap("_/images/linePointer.png");
        linePointer.x = -260;
        this.dirgibleSystem.dirgible = dirgible;
        this.dirgibleSystem.addChild(linePointer, dirgible, );
        this.dirgibleSystem.regY = 50;
        this.dirgibleSystem.x = 40;
        this.dirgibleSystem.y = Layout.centerY;
        this.dirgibleSystem.balloonList = [];
        this.dirgibleSystem.weightList = []; 

        Layout.stage.addChild(this.dirgibleSystem);
    },
    netWeight: function(){
        let netWeight = this.balloonList.length - this.weightList.length;
        //console.log(netWeight);
        return netWeight; 
    }
}