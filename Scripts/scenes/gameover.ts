// GAME_OVER SCENE
module scenes {
    export class GameOver extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _messageImage: createjs.Bitmap;
        private _btnPlayAgain: objects.Button;
        private _btnSelectionOverlap: createjs.Bitmap;
        private _instructionsMusic: objects.Sound;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {

            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(managers.Assets.loader.getResult(scoreboard.win?"PlainBackground":"PlainBackgroundGray"));
            this.addChild(this._backgroundImage);
            
            this._messageImage = new createjs.Bitmap(managers.Assets.loader.getResult(scoreboard.win?"WinMessage":"GameOverMessage"));
            this._messageImage.x = config.Screen.CENTER_X - this._messageImage.getBounds().width/2;
            this._messageImage.y = 100;
            this.addChild(this._messageImage);

            // add play again button
            this._btnPlayAgain = new objects.Button(
                "PlayAgainButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 150,
                true
            );
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
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
       
        //EVENT HANDLERS ++++++++++++++++++++


        // any key press
        private _startKeypress(e) {

            switch (e.which) {
                case keys.ENTER:
                case keys.SPACEBAR:
                    //FadeOut 
                    currentScene._fadeOut(500, () => {
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
        }

    }
}