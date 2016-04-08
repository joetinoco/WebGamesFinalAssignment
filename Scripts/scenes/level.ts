// MENU SCENE
module scenes {
    export class Level extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _startButton: objects.Button;

        // Game Objects
        private _hero: objects.Hero;
        private _enemy: objects.Hero;
        private _exitDoor: objects.ExitDoor;
        //private _scoreboard: objects.Scoreboard;
        public paused: boolean;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {

            this.paused = false;

            var levelLayout = [
                { x: 0, y: 48, width: 64, height: 1 }, // Floor
                { x: 0, y: 0, width: 1, height: 96 }, // Left wall
                { x: 64, y: 0, width: 1, height: 96 }, // Right wall

                // Platforms
                { x: 20, y: 43, width: 5, height: 5 },
                { x: 44, y: 43, width: 5, height: 5 },

                { x: 6, y: 25, width: 5, height: 0.5 },
                { x: 58, y: 25, width: 5, height: 0.5 },

                { x: 20, y: 12, width: 5, height: 0.5 },
                { x: 44, y: 12, width: 5, height: 0.5 },

                { x: 32, y: 20, width: 15, height: 0.5 },

                { x: 44, y: 16, width: 0.5, height: 4 },

            ];

            levelLayout.forEach(function(elem) {
                var wall = new objects.Platform(elem.x, elem.y, elem.width, elem.height);
                stage.addChild(wall.view);
            });

            // Add hero and enemy
            this._hero = new objects.Hero(30, 520, false);
            stage.addChild(this._hero.view);

            this._enemy = new objects.Hero(770, 520, true);
            stage.addChild(this._enemy.view);

            // Add exit door
            this._exitDoor = new objects.ExitDoor(36, 43);
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