var objects;
(function (objects) {
    var Reality = (function () {
        function Reality() {
            this.createPhysics();
            this.createArcadeCanvas();
            this.createDebugCanvas();
            this.createDebugDraw();
        }
        Reality.prototype.createPhysics = function () {
            // Adds gravity to world, no horizontal
            // gravity, but 50 pixel vertical gravity
            this.gravity = new box2d.b2Vec2(0, 50);
            // Creates our Box2D World.CREATION!
            world = new box2d.b2World(this.gravity, true);
        };
        Reality.prototype.createArcadeCanvas = function () {
            this.arcadeCanvas = config.ARCADE_CANVAS;
        };
        Reality.prototype.createDebugCanvas = function () {
            this.debugCanvas = config.DEBUG_CANVAS;
            this.debugContext = this.debugCanvas.getContext("2d"); // set context
        };
        Reality.prototype.createDebugDraw = function () {
            // This is what our box2d bodies get drawn to
            this.debugDraw = new box2d.b2DebugDraw();
            this.debugDraw.SetSprite(this.debugContext);
            this.debugDraw.SetDrawScale(config.Screen.SCALE);
            this.debugDraw.SetFillAlpha(0.3); // Set the Opacity of objects
            this.debugDraw.SetLineThickness(1.0);
            this.debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);
            world.SetDebugDraw(this.debugDraw); // Set world's draw container
        };
        Reality.prototype.update = function () {
            world.Step(1 / 60 //frame-rate
            , 10 //velocity iterations
            , 10 //position iterations
            );
            world.DrawDebugData();
            world.ClearForces();
        };
        return Reality;
    }());
    objects.Reality = Reality;
})(objects || (objects = {}));

//# sourceMappingURL=reality.js.map
