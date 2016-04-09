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
            // Add platforms
            this._levelElements.platforms.forEach(function (elem) {
                var wall = new objects.Platform(elem.x, elem.y, elem.width, elem.height);
                stage.addChild(wall.view);
            });
            // Add hero and enemy
            this._hero = new objects.Hero(this._levelElements.heroStartPoint.x, this._levelElements.heroStartPoint.y, false);
            stage.addChild(this._hero.view);
            this._enemy = new objects.Hero(this._levelElements.enemyStartPoint.x, this._levelElements.enemyStartPoint.y, true);
            stage.addChild(this._enemy.view);
            // Add exit door
            this._exitDoor = new objects.ExitDoor(this._levelElements.exitDoorLocation.x, this._levelElements.exitDoorLocation.y);
            stage.addChild(this._exitDoor.view);
            //  scoreboard = new objects.Scoreboard();
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
        };
        // LEVEL Scene updates here
        Level.prototype.update = function () {
            this._hero.update(this._playerLost);
            this._enemy.update(this._playerLost);
            //   //  scoreboard.update();
            reality.update();
            // Reset lost life flag
            if (this._playerLost)
                this._playerLost = false;
        };
        // Reset the level
        Level.prototype._reset = function () {
            this._playerLost = true;
        };
        // Switch to the next level
        Level.prototype._nextLevel = function () {
            scene += 1;
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
    }(objects.Scene));
    scenes.Level = Level;
})(scenes || (scenes = {}));

//# sourceMappingURL=level.js.map
