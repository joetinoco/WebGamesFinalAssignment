var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
            this.start();
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(managers.Assets.loader.getResult("MenuBackground"));
            this.addChild(this._backgroundImage);
            // add instructions button
            this._btnInstructions = new objects.Button("InstructionsButton", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._btnInstructions);
            // add start button
            this._btnStart = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._btnStart);
            // Add button selection overlap
            this._btnSelectionOverlap = new createjs.Bitmap(managers.Assets.loader.getResult("ButtonSelectionOverlap"));
            this._btnSelectionOverlap.regX = 431 / 2;
            this._btnSelectionOverlap.regY = 100 / 2;
            this._btnSelectionOverlap.x = config.Screen.CENTER_X;
            this._btnSelectionOverlap.y = config.Screen.CENTER_Y;
            this.addChild(this._btnSelectionOverlap);
            // Setup "Background" for fade effect
            this._setupBackground("WhiteBackground");
            // FadeIn
            this._fadeIn(500);
            // Bind start key action
            window.onkeyup = this._startKeypress;
            // Event handler to update the menu selection
            // and trigger the selected scene
            this.on('selectButton', this._swapButtons, this);
            this.on('startScene', this._switchScene, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Menu.prototype._swapButtons = function () {
            // Swap buttons when a keypress occurs
            if (this._btnSelectionOverlap.y == config.Screen.CENTER_Y + 100) {
                this._btnSelectionOverlap.y = config.Screen.CENTER_Y;
            }
            else {
                this._btnSelectionOverlap.y = config.Screen.CENTER_Y + 100;
            }
        };
        Menu.prototype._switchScene = function () {
            var nextScene;
            if (this._btnSelectionOverlap.y == config.Screen.CENTER_Y) {
                nextScene = config.Scene.INSTRUCTIONS;
            }
            else
                nextScene = config.Scene.LEVEL_1;
            //FadeOut 
            currentScene._fadeOut(500, function () {
                // Switch to the selected scene
                scene = nextScene;
                changeScene();
            });
        };
        // any key press
        Menu.prototype._startKeypress = function (e) {
            switch (e.which) {
                case keys.ENTER:
                case keys.SPACEBAR:
                    currentScene.dispatchEvent("startScene");
                    break;
                default:
                    currentScene.dispatchEvent("selectButton");
                    break;
            }
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
