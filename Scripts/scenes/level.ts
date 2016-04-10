// MENU SCENE
module scenes {
    export class Level extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _startButton: objects.Button;
        private _levelElements: any;

        // Game Objects
        private _hero: objects.Hero;
        private _enemy: objects.Hero;
        private _exitDoor: objects.ExitDoor;

        // Level status flags
        private _playerLost: boolean;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(levelElements) {
            super();
            this._levelElements = levelElements;
            this.start();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            var self = this;
            
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(managers.Assets.loader.getResult(this._levelElements.background));
            this.addChild(this._backgroundImage);

            // Add platforms
            this._levelElements.platforms.forEach(function(elem) {
                var wall = new objects.Platform(elem.x, elem.y, elem.width, elem.height, elem.isPlatform);
                self.addChild(wall.view);
            });

            // Add hero and enemy
            this._hero = new objects.Hero(
                this._levelElements.heroStartPoint.x,
                this._levelElements.heroStartPoint.y,
                false);
            this.addChild(this._hero.view);

            this._enemy = new objects.Hero(
                this._levelElements.enemyStartPoint.x,
                this._levelElements.enemyStartPoint.y,
                true);
            this.addChild(this._enemy.view);

            // Add exit door
            this._exitDoor = new objects.ExitDoor(
                this._levelElements.exitDoorLocation.x,
                this._levelElements.exitDoorLocation.y)
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
        }

        // LEVEL Scene updates here
        public update(): void {
            if(scoreboard.countdown == 0) this._playerLost = true;

            this._hero.update(this._playerLost);
            this._enemy.update(this._playerLost);
            this._checkGameStatus();
            
            scoreboard.update();
            reality.update();
        }
        
        private _checkGameStatus(): void { 
            if(this._playerLost){
                scoreboard.lives--;
                scoreboard.restartCountdown();
                // Reset lost life flag
                this._playerLost = false;
            }
            if(scoreboard.lives < 0){
                scene = config.Scene.GAME_OVER;
                changeScene();
            }
        }

        // Reset the level
        private _reset(): void {
            this._playerLost = true;
        }
        
        // Switch to the next level
        private _nextLevel(): void {
            scoreboard.stopCountdown();
            scoreboard.score += scoreboard.countdown;
            
            scene += 1;
            changeScene();
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // Treat collisions 
        protected _evaluateCollision(contact) {
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
                    } else if (collided.indexOf('exit door') > -1) {
                        console.log('Level complete! You win!');
                        currentScene.dispatchEvent('playerWon');
                    }
                } else if (collided.indexOf('enemy') > -1 && collided.indexOf('exit door') > -1) {
                    console.log('The enemy reached the door. Lose a life.');
                    currentScene.dispatchEvent('playerLost');
                }
            }
        }
    }
}