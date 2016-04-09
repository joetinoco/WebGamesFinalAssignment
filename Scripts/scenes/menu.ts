// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _btnInstructions: objects.Button;
        private _btnStart: objects.Button;
        private _btnSelectionOverlap: createjs.Bitmap;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {

            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(managers.Assets.loader.getResult("MenuBackground"));
            this.addChild(this._backgroundImage);

            // add instructions button
            this._btnInstructions = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y,
                true
            );
            this.addChild(this._btnInstructions);

            // add start button
            this._btnStart = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100,
                true
            );
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
        }

        // INTRO Scene updates here
        public update(): void {

        }




        //EVENT HANDLERS ++++++++++++++++++++

        private _swapButtons() {
            // Swap buttons when a keypress occurs
            if (this._btnSelectionOverlap.y == config.Screen.CENTER_Y + 100) {
                this._btnSelectionOverlap.y = config.Screen.CENTER_Y;
            } else {
                this._btnSelectionOverlap.y = config.Screen.CENTER_Y + 100;
            }
        }

        private _switchScene() {
            var nextScene: number;
            if (this._btnSelectionOverlap.y == config.Screen.CENTER_Y){
                nextScene = config.Scene.INSTRUCTIONS;
            } else nextScene = config.Scene.LEVEL_1;
            
            //FadeOut 
            currentScene._fadeOut(500, () => {
                // Switch to the selected scene
                scene = nextScene;
                changeScene();
            });
        }

        // any key press
        private _startKeypress(e) {

            switch (e.which) {
                case keys.ENTER:
                case keys.SPACEBAR:
                    currentScene.dispatchEvent("startScene");
                    break;

                default:
                    currentScene.dispatchEvent("selectButton");
                    break;
            }
        }

    }
}