var Enemy = {
    enemyList: [],
    randomHeight: 0,
    SpawnEnemy: function() {
    let randomHeight = Math.floor((Math.random() * 16)) * 40;
    console.log(randomHeight);
    if(randomHeight <= Layout.centerY){
        var newEnemy = new createjs.Bitmap("_/images/dinosaurEnemy.png");
    } else{
        var newEnemy = new createjs.Bitmap("_/images/sharkEnemy.png");
    }
    newEnemy.regX = 150;
    newEnemy.regY = 75;
    newEnemy.x = 1500;
    newEnemy.y = randomHeight;
    newEnemy.CheckIntersection = function(rect2){
        shipBox = {
        x: rect2.x + 100,
        y: rect2.y,
        width: 200,
        height: 100 
        }
        enemyBox = {
        x: this.x,
        y: this.y,
        width: 250,
        height: 100
        }
    
        //DrawBoundingBox(shipBox);
        //DrawBoundingBox(enemyBox);
        if ( shipBox.x >= enemyBox.x + enemyBox.width || shipBox.x + shipBox.width <= enemyBox.x || shipBox.y >= enemyBox.y + enemyBox.height || shipBox.y + shipBox.height <= enemyBox.y )
        {
        return false;
        }else{
        Game.state = "lost";
        return true;
        } 
    }    
    this.enemyList.push(newEnemy);
    Layout.stage.addChild(newEnemy);
    Layout.stage.setChildIndex(newEnemy, 5);
    },

}