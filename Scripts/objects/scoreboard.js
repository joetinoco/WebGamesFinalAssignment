var objects;
(function (objects) {
    // Scoreboard CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    var Scoreboard = (function () {
        function Scoreboard() {
            this.lives = config.Game.HERO_LIVES;
            this.score = 0;
            this.countdown = config.Game.LEVEL_COUNTDOWN;
            this.win = false;
            this.highScore = 0;
            this._background = new createjs.Shape();
            this._background.graphics.beginFill("#352D2B").drawRect(0, 0, config.Screen.WIDTH, 40);
            this._livesLabel = new objects.Label("LIVES:", "20px Consolas", "#FFF", 100, 20);
            this._livesValueLabel = new objects.Label(" ", "20px Consolas", "#FFF", 140, 20);
            this._scoreLabel = new objects.Label("SCORE:", "20px Consolas", "#FFF", 380, 20);
            this._scoreValueLabel = new objects.Label(" ", "20px Consolas", "#FFF", 440, 20);
            this._countdownLabel = new objects.Label("TIME:", "20px Consolas", "#FFF", 620, 20);
            this._countdownValueLabel = new objects.Label(" ", "20px Consolas", "#FFF", 660, 20);
            this.update();
        }
        Scoreboard.prototype.showScoreBoard = function () {
            stage.addChild(this._background);
            stage.addChild(this._livesLabel);
            stage.addChild(this._livesValueLabel);
            stage.addChild(this._scoreLabel);
            stage.addChild(this._scoreValueLabel);
            stage.addChild(this._countdownLabel);
            stage.addChild(this._countdownValueLabel);
        };
        Scoreboard.prototype.update = function () {
            this._livesValueLabel.text = "" + this.lives;
            this._scoreValueLabel.text = "" + this.score;
            this._countdownValueLabel.text = "" + this.countdown;
        };
        Scoreboard.prototype.destroy = function () {
            stage.removeChild(this._background);
            stage.removeChild(this._livesLabel);
            stage.removeChild(this._livesValueLabel);
            stage.removeChild(this._scoreLabel);
            stage.removeChild(this._scoreValueLabel);
            stage.removeChild(this._countdownLabel);
            stage.removeChild(this._countdownValueLabel);
        };
        Scoreboard.prototype.restartCountdown = function () {
            this.countdown = config.Game.LEVEL_COUNTDOWN;
            this._countdownInterval = this._countdownInterval ? this._countdownInterval :
                setInterval(this._updateInterval, 1000, this);
        };
        Scoreboard.prototype.stopCountdown = function () {
            clearInterval(this._countdownInterval);
            this._countdownInterval = null;
        };
        Scoreboard.prototype.reset = function () {
            this.lives = config.Game.HERO_LIVES;
            this.score = 0;
            this.countdown = config.Game.LEVEL_COUNTDOWN;
            this.win = false;
        };
        Scoreboard.prototype._updateInterval = function (self) {
            self.countdown--;
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map