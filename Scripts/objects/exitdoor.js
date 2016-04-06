var objects;
(function (objects) {
    var ExitDoor = (function () {
        function ExitDoor(x, y) {
            this.x = x;
            this.y = y;
            this.width = 2;
            this.height = 4;
            this.createFixtureDefinition();
            this.createBodyDefinition();
            this.createExitDoor();
        }
        ExitDoor.prototype.createFixtureDefinition = function () {
            this.fixDef = new box2d.b2FixtureDef();
            this.fixDef.density = 1.0;
            // Define the shape, which will be a Polygon
            this.fixDefShape = new box2d.b2PolygonShape();
            this.fixDefShape.SetAsBox(this.width, this.height);
            this.fixDef.shape = this.fixDefShape;
        };
        ExitDoor.prototype.createBodyDefinition = function () {
            this.bodyDef = new box2d.b2BodyDef();
            this.bodyDef.type = box2d.b2Body.b2_staticBody;
            this.bodyDef.userData = {};
            this.bodyDef.userData.objType = 'exit door';
            this.bodyDef.position.x = this.x;
            this.bodyDef.position.y = this.y;
        };
        ExitDoor.prototype.createExitDoor = function () {
            var position;
            // Add door to world
            this.body = world.CreateBody(this.bodyDef);
            this.body.CreateFixture(this.fixDef);
            position = this.body.GetPosition();
            // Creates a new Shape object
            this.view = new createjs.Shape();
            this.view.regX = this.width * config.Screen.SCALE;
            this.view.regY = this.height * config.Screen.SCALE;
            // TODO: It appears this polygon overlaps everything in the stage
            // so I set the alpha to 0.3 to make the exit sign visible
            this.view.graphics.beginFill("rgba(0,255,0,0.3)")
                .drawRect(position.x * config.Screen.SCALE, position.y * config.Screen.SCALE, this.width * 2 * config.Screen.SCALE, this.height * 2 * config.Screen.SCALE);
            var doorLabel = new objects.Label('EXIT', '10px Consolas', "#000000", this.x * config.Screen.SCALE, (this.y * config.Screen.SCALE) - 20);
            stage.addChild(doorLabel);
        };
        return ExitDoor;
    }());
    objects.ExitDoor = ExitDoor;
})(objects || (objects = {}));

//# sourceMappingURL=exitdoor.js.map
