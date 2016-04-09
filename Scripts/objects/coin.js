var objects;
(function (objects) {
    var Coin = (function () {
        function Coin() {
            this.view = new createjs.Sprite(managers.Assets.coinAtlas, "coin");
            this.width = this.view.getBounds().width / config.Screen.SCALE;
            this.height = this.view.getBounds().height / config.Screen.SCALE;
            this.view.regX = this.view.getBounds().width * 0.5 * config.Screen.SCALE;
            this.view.regY = this.view.getBounds().height * 0.5 * config.Screen.SCALE;
            this.createFixtureDefinition();
            this.createBodyDefinition();
            this.createCoin();
        }
        Coin.prototype.createFixtureDefinition = function () {
            this.fixDef = new box2d.b2FixtureDef();
            this.fixDef.density = 1.0;
            this.fixDef.friction = 0.2; // Add some Resistance
            this.fixDef.restitution = 0.2; // Add a little bounce
            // Define the shape, which will be a Polygon
            this.fixDefShape = new box2d.b2PolygonShape();
            this.fixDefShape.SetAsBox(this.width * 0.5, this.height * 0.5);
            this.fixDef.shape = this.fixDefShape;
        };
        Coin.prototype.createBodyDefinition = function () {
            this.bodyDef = new box2d.b2BodyDef();
            this.bodyDef.userData = this.view;
            this.bodyDef.type = box2d.b2Body.b2_dynamicBody;
            this.bodyDef.position.Set(this.view.x / config.Screen.SCALE, this.view.y / config.Screen.SCALE);
            this.bodyDef.fixedRotation = true; // prevent coin rotation
        };
        Coin.prototype.createCoin = function () {
            // Add Coin to world
            this.body = world.CreateBody(this.bodyDef);
            this.body.CreateFixture(this.fixDef);
            // Disallows our Hero from being disabled
            // or uncontrollable when he is not moving
            this.body.SetSleepingAllowed(false);
            // A velocity of zero
            this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));
            // And no spin
            this.body.SetAngularVelocity(0);
            // position Enemy
            var randomX = Math.floor(Math.random() * (config.Screen.WIDTH - 30) + 30);
            this.body.SetPosition(new box2d.b2Vec2(randomX / config.Screen.SCALE, -this.height / config.Screen.SCALE));
        };
        Coin.prototype.update = function () {
            var finalVelocity, impulse, position, velocity;
            // Move our view (Our EaselJS Bitmap)
            // to the new coordinates to match the
            // Box2D Body's position of the hero
            position = this.body.GetPosition();
            console.log(position);
            this.view.x = position.x * config.Screen.SCALE;
            this.view.y = position.y * config.Screen.SCALE;
            // Gets the current spinning angle
            this.view.rotation = this.body.GetAngle() * (180 / Math.PI);
        };
        return Coin;
    }());
    objects.Coin = Coin;
})(objects || (objects = {}));

//# sourceMappingURL=coin.js.map
