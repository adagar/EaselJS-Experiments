function DrawBoundingBox(collider){
    var bb = new createjs.Shape();
    bb.graphics.clear().beginStroke("black").drawRect(collider.x, collider.y, collider.width, collider.height);
    bb.regX = collider.width / 2 + collider.x;
    bb.regY = collider.height / 2 + collider.y;
    bb.x = collider.x;
    bb.y = collider.y;
    stage.addChild(bb);
    stage.update();
}