import { Constants } from "./main.js";
import AddColBtn from "./AddBtn.js";
import RmColBtn from "./RmBtn.js";

export default function Column(isHeader, content, editable, colNum) {
  this.Container_constructor();

  this.isHeader = isHeader;
  this.content = content;
  this.editable = editable;
  this.colNum = colNum;

  this.setup();
}
var p = createjs.extend(Column, createjs.Container);

p.setup = function() {
  var row1Text = new createjs.Text(this.content.top, "12px Arial", "#000");
  row1Text.textBaseline = "top";
  row1Text.textAlign = "center";

  var width = Constants.COL_WIDTH;
  var height = Constants.COL_HEIGHT;

  row1Text.x = 0;
  row1Text.y = 0;

  var row2Text = new createjs.Text(this.content.bottom, "12px Arial", "#000");
  row2Text.textBaseline = "top";
  row2Text.textAlign = "center";
  row2Text.x = 0;
  row2Text.y = 35;

  //draw two cells in one column
  const row1 = this.drawCell(0, 0, width, height / 2);
  //console.log(row1);
  const row2 = this.drawCell(0, height / 2, width, height / 2);

  var addBtn = this.addChild(new AddColBtn());
  addBtn.x = this.x;
  addBtn.y = this.y;

  this.addChild(row1, row2, row1Text, row2Text);

  if (this.editable) {
    var rmBtn = this.addChild(new RmColBtn());
    rmBtn.x = this.x;
    rmBtn.y = this.y;

    //console.log("Adding input");
    const textFieldSpecs = {
      width: Constants.TEXT_WIDTH,
      height: Constants.TEXT_HEIGHT
    }

    const topTextField = new TextInput(textFieldSpecs);
    topTextField.x = this.x - 30;
    topTextField.y = this.y - 15;

    this.addChild(topTextField);
    topTextField.update();

    const bottomTextField = new TextInput(textFieldSpecs);
    bottomTextField.x = this.x - 30;
    bottomTextField.y = this.y + 25;

    this.addChild(bottomTextField);
    bottomTextField.update();
  }

  this.mouseChildren = true;
};

p.drawCell = function(x, y, width, height) {
  var cell = new createjs.Shape();
  cell.graphics.beginStroke("black");
  if (this.isHeader) {
    //console.log("I'm a header!");
    cell.graphics.beginFill("#87CEFA");
  }
  cell.graphics.drawRect(0, 0, width, height);
  cell.regX = width / 2;
  cell.regY = height / 2;

  cell.x = x;
  cell.y = y;

  return cell;
};

window.Column = createjs.promote(Column, "Container");
