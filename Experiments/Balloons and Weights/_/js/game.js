var Game ={
    state: "playing",
    score: 0,
    GenerateProblem: function(){
        //set a height

        console.log(Player.balloonList.length);
        while(Player.balloonList.length > 0){
            
            Player.removeDirgBalloon();
        }
        while(Player.weightList.length > 0){
            Player.removeDirgWeight();
        }
        Layout.stage.update();
        let height = GenerateRandom(-8, 8);
        let balloons = GenerateRandom(0, 8);
        let weights = balloons - height;
        console.log(height);
        for(let i = 0; i < balloons; i++){
            Player.addDirgBalloon();
        }
        for(let i = 0; i < weights; i++){
            Player.addDirgWeight();
        }
        
        Enemy.SpawnEnemy();
        Enemy.enemyList[0].y = Layout.centerY - Player.netWeight() * 40;
    },
    UpdatePlayer: function(){
        let newText = "-"+ Player.balloonList.length + " + " + Player.weightList.length + " = " + Player.netWeight();
        Layout.updateEquation(newText);
        Player.dirgibleSystem.y = Layout.centerY + Player.netWeight() * 40;
    },
    UpdateEnemies: function(){
        for(let enemy in Enemy.enemyList){
            Enemy.enemyList[enemy].x -= 5;
            Enemy.enemyList[enemy].CheckIntersection(Player.dirgibleSystem);
            if(Enemy.enemyList[enemy].x < 0){
                Layout.stage.removeChild(Enemy.enemyList.shift());
                this.UpdateEnemies();
            }
        }
    }
}

function GenerateRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
