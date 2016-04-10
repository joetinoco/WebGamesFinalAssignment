var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
            this.start();
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(managers.Assets.loader.getResult("InstructionsBackground"));
            this.addChild(this._backgroundImage);
            // Add music
            this._instructionsMusic = new objects.Sound('menu');
            this._instructionsMusic.play(-1);
            // add back button
            this._btnBack = new objects.Button("BackButton", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 250, true);
            this.addChild(this._btnBack);
            // Setup "Background" for fade effect
            this._setupBackground("WhiteBackground");
            // FadeIn
            this._fadeIn(500);
            // Bind start key action
            window.onkeyup = this._startKeypress;
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instructions.prototype.update = function () {
        };
        Instructions.prototype.destroy = function () {
            this._instructionsMusic.stop();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // any key press
        Instructions.prototype._startKeypress = function (e) {
            switch (e.which) {
                case keys.ENTER:
                case keys.SPACEBAR:
                    //FadeOut 
                    currentScene._fadeOut(500, function () {
                        // Switch to the LEVEL 1 Scene
                        scene = config.Scene.MENU;
                        changeScene();
                    });
                    break;
                default:
                    currentScene.dispatchEvent("selectButton");
                    break;
            }
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));

//# sourceMappingURL=instructions.js.map
