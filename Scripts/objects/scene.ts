module objects {
    // Scene Class
    export class Scene extends createjs.Container {
        // PROTECTED INSTANCE VARIABLES
        protected _blackBackground: createjs.Bitmap;
        public paused: boolean;
         
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();            
        }
        
        // Add game objects to my scene in this method
        public start(): void {
            stage.addChild(this);
        }
        
        // update game objects in my scene
        public update(): void {

        }
        
        // remove/disable game objects in my scene
        public destroy(): void {

        }
        
        // Setup Background
        protected _setupBackground(background:string): void {
            this._blackBackground = new createjs.Bitmap(managers.Assets.loader.getResult(background));
            
            this.addChild(this._blackBackground);
        }
        
        
        // FadeIn method
        protected _fadeIn(transitionTime:number): void {
            createjs.Tween.get(this._blackBackground).to({ alpha: 0 }, transitionTime, createjs.Ease.getPowInOut(2));
        }
        
        // FadeOut method
        public _fadeOut(transitionTime:number,callback:any): void {
            this._blackBackground.alpha = 0;
            createjs.Tween.get(this._blackBackground).to({ alpha: 1 }, transitionTime, createjs.Ease.getPowInOut(2)).call(callback);
        }
        
        // Reset method
        public reset(){
            
        }
    }
}