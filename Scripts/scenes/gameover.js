var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// GAME_OVER SCENE
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function GameOver() {
            _super.call(this);
            this.start();
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        GameOver.prototype.start = function () {
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(managers.Assets.loader.getResult(scoreboard.win ? "PlainBackground" : "PlainBackgroundGray"));
            this.addChild(this._backgroundImage);
            this._messageImage = new createjs.Bitmap(managers.Assets.loader.getResult(scoreboard.win ? "WinMessage" : "GameOverMessage"));
            this._messageImage.x = config.Screen.CENTER_X - this._messageImage.getBounds().width / 2;
            this._messageImage.y = 100;
            this.addChild(this._messageImage);
            // add play again button
            this._btnPlayAgain = new objects.Button("PlayAgainButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150, true);
            this.addChild(this._btnPlayAgain);
            console.log("Win? " + scoreboard.lives);
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
        GameOver.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // any key press
        GameOver.prototype._startKeypress = function (e) {
            switch (e.which) {
                case keys.ENTER:
                case keys.SPACEBAR:
                    //FadeOut 
                    currentScene._fadeOut(500, function () {
                        // Switch to the LEVEL 1 Scene
                        scoreboard.reset();
                        scene = config.Scene.MENU;
                        changeScene();
                    });
                    break;
                default:
                    currentScene.dispatchEvent("selectButton");
                    break;
            }
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));

//# sourceMappingURL=gameover.js.map
