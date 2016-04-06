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
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // add background image to the scene
            // this._backgroundImage = new createjs.Bitmap(assets.getResult("MenuBackground"));
            // this.addChild(this._backgroundImage); 
            // add the start label
            this._startLabel = new objects.Label('Press any key to start', '30px Consolas', '#000000', config.Screen.CENTER_X, config.Screen.CENTER_Y);
            // Add to global container
            this.addChild(this._startLabel);
            // Setup Background
            this._setupBackground("WhiteBackground");
            // FadeIn
            this._fadeIn(500);
            // Bind start key action
            window.onkeyup = this._startKeypress;
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // any key press
        Menu.prototype._startKeypress = function (event) {
            //FadeOut 
            currentScene._fadeOut(500, function () {
                // Switch to the LEVEL 1 Scene
                scene = config.Scene.LEVEL_1;
                changeScene();
            });
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
