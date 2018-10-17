import Column from "./tableCol.js";

var Layout = {
  CANVAS_WIDTH: 1280,
  CANVAS_HEIGHT: 720,
  centerX: 640,
  centerY: 200,
  stage: null
};

export var Constants = {
  COL_WIDTH: 70,
  COL_HEIGHT: 80
};

export function AddColumn() {
  //alert("You clicked on an add button");
  //console.log("Add button clicked");
  const emptyContent = {
    top: "",
    bottom: ""
  };
  const newCol = stage.addChild(new Column(false, emptyContent, true));
  colList.push(newCol);
  updateColumns();
}

function updateColumns() {
  let numCols = colList.length;
  for (let i = 0; i < numCols; i++) {
    colList[i].x =
      Layout.centerX +
      (numCols / 2 - numCols + i * Constants.COL_WIDTH) -
      numCols * (Constants.COL_WIDTH / 2);
    colList[i].y = Layout.centerY;
  }
}

const canvas = document.getElementById("easel");
const stage = new createjs.Stage(canvas);
stage.enableMouseOver();

/*
function NewColumn(instance, label, preset) {
  var col = new createjs.Shape();
  col.graphics.beginStroke("black").drawRect(40, 40, 80, 80);
  stage.addChild(col);
  stage.update();
}

NewColumn();
*/
let colList = [];

const headers = {
  top: "cheese",
  bottom: "peppers"
};
var col1 = stage.addChild(new Column(true, headers, false));

colList.push(col1);

const content = {
  top: "10",
  bottom: "5"
};
var col2 = stage.addChild(new Column(false, content, false));
colList.push(col2);

createjs.Ticker.on("tick", function() {
  stage.update();
  updateColumns();
});
