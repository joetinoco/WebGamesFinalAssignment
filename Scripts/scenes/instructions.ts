// INSTRUCTIONS SCENE
module scenes {
    export class Instructions extends objects.Scene {
         //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _btnBack: objects.Button;
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
            this._backgroundImage = new createjs.Bitmap(managers.Assets.loader.getResult("InstructionsBackground"));
            this.addChild(this._backgroundImage);
            
            // Add music
            this._instructionsMusic = new objects.Sound('menu');
            this._instructionsMusic.play(-1);
        

            // add back button
            this._btnBack = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 150,
                config.Screen.CENTER_Y + 250,
                true
            );
            this.addChild(this._btnBack);


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
        
        public destroy(): void {
            this._instructionsMusic.stop();
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