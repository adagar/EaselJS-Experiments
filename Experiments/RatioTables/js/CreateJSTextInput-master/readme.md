# CreateJS Text Input

Typically text fields are not done within canvas, it's usually not practical since you can overlay 
standard HTML Input fields over the canvas object. This is for those cases where you may want to 
tween values, or twist or manipulate your field more than what HTML has to offer.

As it stands, this library is bound to CreateJS (hence the name); mainly EaselJS at the moment. 
See below for more details. 

## Dependencies

> EaselJS v0.8.2 (December 2015)

First and foremost all rendering is handled under the CreateJS/EaselJS framework. For details on 
how that library works, please see the EaselJS [website](http://www.createjs.com/easeljs) or 
[documentation](http://www.createjs.com/docs/easeljs/).

CreateJS comes with several parts, EaselJS (as noted above), TweenJS, PreloadJS, and SoundJS. See 
below for a breakdown of intended uses:
 
* EaselJS is a mandatory inclusion as it is directly being used to handle the textField
* TweenJS is possible if there are default tweens/animations I would like to integrate, but time 
will tell what those will be
* It's unlikely that PreloadJS will need to be used in any regard (no real image or otherwise 
loading)
* It's very unlikely but possible that SoundJS could be used for any "input feedback"

## Usage

Be sure to include EaselJS and this TextInput:

    <script type="text/javascript" src="path/to/easelJS/easelJS.min.js"></script>
    <script type="text/javascript" src="path/to/textInput/TextInput.js"></script>

Basic JavaScript usage:

    // Grab our canvas and setup the stage
    const canvas = document.getElementById('canvasId');
    const stage = new createjs.Stage(canvas);
    
    // Create and place our text field on the canvas
    const textField = new TextInput();
    textField.y = textField.x = 100;
    textField.placeHolder = "Input Field"; // updates the default text
    stage.addChild(textField);
    
    // Updates the text field to the new internal data (ie. placeholder)
    // I may allow an optional internal data watcher, but I feel if there are a large amount of 
    // fields this could become performance slow
    textField.update();
    
    // Standard auto refresh
    createjs.Ticker.on('tick', function () {
      stage.update();
    });

## License

[MIT License](https://opensource.org/licenses/MIT) 
([https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT))
