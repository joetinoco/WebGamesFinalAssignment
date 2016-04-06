// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _startLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {   

            // add background image to the scene
            // this._backgroundImage = new createjs.Bitmap(assets.getResult("MenuBackground"));
            // this.addChild(this._backgroundImage); 


            // add the start label
            this._startLabel = new objects.Label(
                'Press any key to start',
                '30px Consolas',
                '#000000',
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y);
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
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // any key press
        private _startKeypress(event) {
            //FadeOut 
            currentScene._fadeOut(500, () => {
                // Switch to the LEVEL 1 Scene
                scene = config.Scene.LEVEL_1;
                changeScene();
            });
        }

    }
}