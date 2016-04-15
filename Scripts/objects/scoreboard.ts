module objects {
     // Scoreboard CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    export class Scoreboard {
        public lives: number;
        public score: number;
        public highScore: number;
        public countdown: number;
        public win: boolean;
        
        private _background: createjs.Shape;
        
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _countdownLabel: objects.Label;
        
        private _livesValueLabel: objects.Label;
        private _scoreValueLabel: objects.Label;
        private _countdownValueLabel: objects.Label;
        
        private _countdownInterval: number;

        constructor() {
            this.lives = config.Game.HERO_LIVES;
            this.score = 0;
            this.countdown = config.Game.LEVEL_COUNTDOWN;
            this.win = false;
            
            this._background = new createjs.Shape();
            this._background.graphics.beginFill("#352D2B").drawRect(0, 0, config.Screen.WIDTH, 40);

            this._livesLabel = new objects.Label( 
                "LIFES:", "20px Consolas",
                "#FFF", 100, 20);
            
            this._livesValueLabel = new objects.Label( 
                " ", "20px Consolas",
                "#FFF", 140, 20);
            
            this._scoreLabel = new objects.Label( 
                "SCORE:", "20px Consolas",
                "#FFF", 380, 20);
            
            this._scoreValueLabel = new objects.Label( 
                " ", "20px Consolas",
                "#FFF", 440, 20);
            
            this._countdownLabel = new objects.Label( 
                "TIME:", "20px Consolas",
                "#FFF", 620, 20);
            
            this._countdownValueLabel = new objects.Label( 
                " ", "20px Consolas",
                "#FFF", 660, 20);

            this.update();
        }

         public showScoreBoard(): void {
            stage.addChild(this._background);
            stage.addChild(this._livesLabel);
            stage.addChild(this._livesValueLabel);
            stage.addChild(this._scoreLabel);
            stage.addChild(this._scoreValueLabel);
            stage.addChild(this._countdownLabel);
            stage.addChild(this._countdownValueLabel);
        }

        public update(): void {
            this._livesValueLabel.text = "" + this.lives;
            this._scoreValueLabel.text = "" + this.score;
            this._countdownValueLabel.text = "" + this.countdown;
        }

         public destroy(): void {
            stage.removeChild(this._background);
            stage.removeChild(this._livesLabel);
            stage.removeChild(this._livesValueLabel);
            stage.removeChild(this._scoreLabel);
            stage.removeChild(this._scoreValueLabel);
            stage.removeChild(this._countdownLabel);
            stage.removeChild(this._countdownValueLabel);
        }
        
        public restartCountdown(): void {
            this.countdown = config.Game.LEVEL_COUNTDOWN;
            this._countdownInterval = this._countdownInterval? this._countdownInterval:
                setInterval(this._updateInterval, 1000, this);
        }
        
        public stopCountdown(): void {
            clearInterval(this._countdownInterval);
        }
        
        public reset(): void {
            this.highScore = this.score > this.highScore? this.score : this.highScore;
            this.lives = config.Game.HERO_LIVES;
            this.score = 0;
            this.countdown = config.Game.LEVEL_COUNTDOWN;
        }
        
        private _updateInterval(self): void {
            self.countdown--;
        }
    }
} 