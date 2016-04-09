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
        //private _scoreboard: objects.Scoreboard;
        public paused: boolean;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(levelElements) {
            super();
            this._levelElements = levelElements;
            this.start();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {

            this.paused = false;

            // Add platforms
            this._levelElements.platforms.forEach(function(elem) {
                var wall = new objects.Platform(elem.x, elem.y, elem.width, elem.height);
                stage.addChild(wall.view);
            });

            // Add hero and enemy
            this._hero = new objects.Hero(
                this._levelElements.heroStartPoint.x, 
                this._levelElements.heroStartPoint.y, 
                false);
            stage.addChild(this._hero.view);

            this._enemy = new objects.Hero(
                this._levelElements.enemyStartPoint.x, 
                this._levelElements.enemyStartPoint.y, 
                true);
            stage.addChild(this._enemy.view);

            // Add exit door
            this._exitDoor = new objects.ExitDoor(
                this._levelElements.exitDoorLocation.x, 
                this._levelElements.exitDoorLocation.y)
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

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // LEVEL Scene updates here
        public update(): void {

            if (!this.paused) {
                
                this._hero.update();
                this._enemy.update();

                //   //  scoreboard.update();

                reality.update();

            }


        }

        // Reset the level
        public reset(): void {
            //TODO: this._hero.body.SetPosition does not work for some reason.

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
                        currentScene.reset();
                    } else if (collided.indexOf('exit door') > -1) {
                        console.log('Level complete! You win!');
                        currentScene.reset();
                    }
                } else if (collided.indexOf('enemy') > -1 && collided.indexOf('exit door') > -1) {
                    console.log('The enemy reached the door. Lose a life.');
                    currentScene.reset();
                }
            }
        }
    }
}