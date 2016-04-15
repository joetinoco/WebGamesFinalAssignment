var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Level = (function (_super) {
        __extends(Level, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level(levelElements) {
            _super.call(this);
            this._levelElements = levelElements;
            this.start();
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level.prototype.start = function () {
            var self = this;
            // Set scene gravity
            world.SetGravity(new box2d.b2Vec2(0, this._levelElements.gravity));
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(managers.Assets.loader.getResult(this._levelElements.background));
            this.addChild(this._backgroundImage);
            // Add music
            this._levelMusic = new objects.Sound(this._levelElements.music);
            this._levelMusic.play(-1); // -1 means loop indefinitely
            // Add SFX
            this._lostLife = new objects.Sound('loselife');
            // Add platforms
            this._platformFriction = this._levelElements.defaultFriction;
            this._levelElements.platforms.forEach(function (elem) {
                var wall = new objects.Platform(elem.x, elem.y, elem.width, elem.height, elem.isPlatform);
                self.addChild(wall.view);
            });
            // Add images
            this._levelElements.images.forEach(function (elem) {
                var image = new createjs.Bitmap(managers.Assets.loader.getResult(elem.asset));
                image.x = elem.x;
                image.y = elem.y;
                self.addChild(image);
            });
            // Add hero and enemy
            this._hero = new objects.Hero(this._levelElements.heroStartPoint.x, this._levelElements.heroStartPoint.y, false);
            this.addChild(this._hero.view);
            this._enemy = new objects.Hero(this._levelElements.enemyStartPoint.x, this._levelElements.enemyStartPoint.y, true);
            this.addChild(this._enemy.view);
            // Add exit door
            this._exitDoor = new objects.ExitDoor(this._levelElements.exitDoorLocation.x, this._levelElements.exitDoorLocation.y);
            this.addChild(this._exitDoor.view);
            var fixDef = new box2d.b2FixtureDef;
            fixDef.density = 0.5;
            fixDef.friction = 0.2;
            fixDef.restitution = 0.5;
            var bodyDef = new box2d.b2BodyDef;
            var fixDefShape;
            // Add event listener for collisions
            var listener = new Box2D.Dynamics.b2ContactListener;
            listener.BeginContact = this._evaluateCollision;
            world.SetContactListener(listener);
            // Add event listener for collision resets 
            this.on('playerLost', this._reset, this);
            this.on('playerWon', this._nextLevel, this);
            // Set scene status
            this._playerLost = false;
            // add this scene to the global stage container
            stage.addChild(this);
            // Show score board
            scoreboard.showScoreBoard();
            scoreboard.restartCountdown();
        };
        // LEVEL Scene updates here
        Level.prototype.update = function () {
            if (scoreboard.countdown == 0)
                this._playerLost = true;
            this._hero.update(this._playerLost, this._platformFriction);
            this._enemy.update(this._playerLost, this._platformFriction);
            this._checkGameStatus();
            scoreboard.update();
            reality.update();
        };
        Level.prototype.destroy = function () {
            this._levelMusic.stop();
        };
        Level.prototype._checkGameStatus = function () {
            if (this._playerLost) {
                this._lostLife.play();
                scoreboard.lives--;
                scoreboard.restartCountdown();
                // Reset lost life flag
                this._playerLost = false;
            }
            if (scoreboard.lives < 0) {
                this.destroy();
                scene = config.Scene.GAME_OVER;
                changeScene();
            }
        };
        // Reset the level
        Level.prototype._reset = function () {
            this._playerLost = true;
        };
        // Switch to the next level
        Level.prototype._nextLevel = function () {
            scoreboard.stopCountdown();
            scoreboard.score += scoreboard.countdown;
            if (scene == config.Scene.LEVEL_3) {
                scoreboard.win = false;
                scene = config.Scene.GAME_OVER;
            }
            else {
                scene++;
            }
            changeScene();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Treat collisions 
        Level.prototype._evaluateCollision = function (contact) {
            var objA = contact.GetFixtureA().GetBody().GetUserData();
            var objB = contact.GetFixtureB().GetBody().GetUserData();
            if (objA && objB) {
                var collided = [objA.objType, objB.objType];
                //console.log('Collision between ' + objA.objType + ' and ' + objB.objType);
                // Treat hero collisions
                if (collided.indexOf('hero') > -1) {
                    if (collided.indexOf('enemy') > -1) {
                        console.log('You touched the enemy. Lose a life');
                        currentScene.dispatchEvent('playerLost');
                    }
                    else if (collided.indexOf('exit door') > -1) {
                        console.log('Level complete! You win!');
                        currentScene.dispatchEvent('playerWon');
                    }
                }
                else if (collided.indexOf('enemy') > -1 && collided.indexOf('exit door') > -1) {
                    console.log('The enemy reached the door. Lose a life.');
                    currentScene.dispatchEvent('playerLost');
                }
            }
        };
        return Level;
    })(objects.Scene);
    scenes.Level = Level;
})(scenes || (scenes = {}));
//# sourceMappingURL=level.js.map