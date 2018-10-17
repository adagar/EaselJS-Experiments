import { AddColumn } from "./main.js";

export default function AddColBtn() {
  this.Container_constructor();
  this.setup();
}

var p = createjs.extend(AddColBtn, createjs.Container);

p.setup = function() {
  var icon = new createjs.Bitmap("./images/addBtn.png");

  icon.x += 35;
  icon.y -= 185;

  this.regX = 50;
  this.regY = -98;
  this.addChild(icon);
  this.on("click", this.handleClick);
  this.on("rollover", this.handleRollOver);
  this.on("rollout", this.handleRollOver);
  this.cursor = "pointer";

  this.mouseChildren = false;

  this.offset = Math.random() * 10;
  this.count = 0;
};

p.handleClick = function(event) {
  AddColumn();
};

p.handleRollOver = function(event) {
  this.scale = event.type == "rollover" ? 1.1 : 1;
};

window.AddColBtn = createjs.promote(AddColBtn, "Container");
