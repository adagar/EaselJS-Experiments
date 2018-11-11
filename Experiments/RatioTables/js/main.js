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
  COL_HEIGHT: 80,
  TEXT_WIDTH: 60,
  TEXT_HEIGHT: 30
};

export function AddColumn(colCaller) {
  //alert("You clicked on an add button");
  console.log("Add button clicked by column #", colCaller);
  const emptyContent = {
    top: "",
    bottom: ""
  };
  let newColNum; 

  //check if col is going to need to be inserted
  if(colCaller < colList.length - 1)
  {
    console.log("I should be inserting");
    for(let i = colCaller + 1; i < colList.length; i++)
    {
      colList[i].colNum += 1;
    }
    const newCol = stage.addChild(new Column(false, emptyContent, true, colCaller + 1));
    colList.splice(colCaller + 1, 0, newCol);
  }
  else {
    newColNum = colList.length;
    const newCol = stage.addChild(new Column(false, emptyContent, true, newColNum));
    colList.push(newCol);
  }
  
  updateColumns();
}

export function RmColumn(colCaller) {
  //alert("You clicked on an add button");
  console.log("Remove button clicked by column #", colCaller);
  let removed = colList.splice(colCaller, 1)
  console.log(removed);
  stage.removeChild(removed[0]);  
  for(let i = colCaller; i < colList.length; i++)
  {
    colList[i].colNum -= 1;
  }
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
var col1 = stage.addChild(new Column(true, headers, false, 0));

colList.push(col1);

const content = {
  top: "10",
  bottom: "5"
};
var col2 = stage.addChild(new Column(false, content, false, 1));
colList.push(col2);

createjs.Ticker.on("tick", function() {
  stage.update();
  updateColumns();
});
