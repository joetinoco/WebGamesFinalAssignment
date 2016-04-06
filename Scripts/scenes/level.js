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
        //private _scoreboard: objects.Scoreboard;
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Level.prototype.start = function () {
            this._ground = new objects.Platform(0, 48, 64, 1);
            stage.addChild(this._ground.view);
            var leftWall = new objects.Platform(0, 0, 1, 96);
            stage.addChild(leftWall.view);
            var rightWall = new objects.Platform(64, 0, 1, 96);
            stage.addChild(rightWall.view);
            var platform1 = new objects.Platform(20, 40, 10, 0.5);
            stage.addChild(platform1.view);
            var platform2 = new objects.Platform(28, 30, 10, 0.5);
            stage.addChild(platform2.view);
            var platform3 = new objects.Platform(36, 20, 10, 0.5);
            stage.addChild(platform3.view);
            var platform4 = new objects.Platform(48, 10, 10, 0.5);
            stage.addChild(platform4.view);
            this._hero = new objects.Hero(30, 520, false);
            stage.addChild(this._hero.view);
            this._enemy = new objects.Hero(770, 520, true);
            stage.addChild(this._enemy.view);
            //  scoreboard = new objects.Scoreboard();
            var fixDef = new box2d.b2FixtureDef;
            fixDef.density = 0.5;
            fixDef.friction = 0.2;
            fixDef.restitution = 0.5;
            var bodyDef = new box2d.b2BodyDef;
            var fixDefShape;
            // //create some objects
            // bodyDef.type = box2d.b2Body.b2_dynamicBody;
            // for (var i = 0; i < 10; ++i) {
            //     if (Math.random() > 0.5) {
            //         fixDefShape = new box2d.b2PolygonShape();
            //         fixDefShape.SetAsBox(
            //             Math.random() + 0.1 //half width
            //             , Math.random() + 0.1 //half height
            //             );
            //         fixDef.shape = fixDefShape;
            //     } else {
            //         fixDefShape = new box2d.b2CircleShape(
            //             Math.random() + 0.1 //radius
            //             );
            //         fixDef.shape = fixDefShape;
            //     }
            //     bodyDef.position.x = Math.random() * config.Screen.WIDTH / config.Screen.SCALE;
            //     bodyDef.position.y = Math.random() * config.Screen.HEIGHT / config.Screen.SCALE;
            //     world.CreateBody(bodyDef).CreateFixture(fixDef);
            // } 
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // LEVEL Scene updates here
        Level.prototype.update = function () {
            this._hero.update();
            this._enemy.update();
            //   //  scoreboard.update();
            reality.update();
        };
        return Level;
    }(objects.Scene));
    scenes.Level = Level;
})(scenes || (scenes = {}));

//# sourceMappingURL=level.js.map
