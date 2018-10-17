export default function RmColBtn() {
  this.Container_constructor();
  this.setup();
}
var p = createjs.extend(RmColBtn, createjs.Container);

p.setup = function() {
  var icon = new createjs.Bitmap("./images/remBtn.png");

  icon.y += 20;

  this.regX = 44;
  this.regY = -22;
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
  alert("You clicked on an remove button");
  console.log("Remove button clicked");
};

p.handleRollOver = function(event) {
  this.scale = event.type == "rollover" ? 1.1 : 1;
};

window.RmColBtn = createjs.promote(RmColBtn, "Container");
