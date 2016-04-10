var objects;
(function (objects) {
    var Hero = (function () {
        function Hero(x, y, mirrored) {
            this.MAX_SPEED = 30;
            this.JUMP_TIMEOUT = 200; // 0.2 second
            this.JUMP_HEIGHT = 70 * config.Screen.SCALE;
            // Sets last jump time to zero, to allow
            // for jumping immediately
            this.lastJumpTime = 0;
            // Set movement type for hero or enemy
            this.mirrored = mirrored;
            // Remember initial position (for scene resets)
            this.initialX = x;
            this.initialY = y;
            this.view = new createjs.Sprite(managers.Assets.heroAtlas, "heroIdle");
            this.width = this.view.getBounds().width / config.Screen.SCALE;
            this.height = this.view.getBounds().height / config.Screen.SCALE;
            this.view.regX = this.width * 0.5 * config.Screen.SCALE;
            this.view.regY = this.height * 0.5 * config.Screen.SCALE;
            this.createFixtureDefinition();
            this.createBodyDefinition();
            this.jumpSound = new objects.Sound('jump');
            this.createHero(x, y);
            // Set up movement and controls
            this.assignControls();
        }
        Hero.prototype.createFixtureDefinition = function () {
            this.fixDef = new box2d.b2FixtureDef();
            this.fixDef.density = 1.0;
            this.fixDef.friction = 0.01; // Add some Resistance
            this.fixDef.restitution = 0.2; // Add a little bounce
            // Define the shape, which will be a Polygon
            this.fixDefShape = new box2d.b2CircleShape();
            this.fixDefShape.SetRadius(this.width * 0.5);
            //this.fixDefShape.SetAsBox(this.width * 0.65, this.height * 0.5);
            this.fixDef.shape = this.fixDefShape;
        };
        Hero.prototype.createBodyDefinition = function () {
            this.bodyDef = new box2d.b2BodyDef();
            this.bodyDef.userData = this.view;
            this.bodyDef.userData.objType = this.mirrored ? 'enemy' : 'hero';
            this.bodyDef.type = box2d.b2Body.b2_dynamicBody;
            this.bodyDef.position.Set(this.view.x / config.Screen.SCALE, this.view.y / config.Screen.SCALE);
            this.bodyDef.fixedRotation = true; // prevent player rotation
        };
        Hero.prototype.createHero = function (x, y) {
            // Add Hero to world
            this.body = world.CreateBody(this.bodyDef);
            this.body.CreateFixture(this.fixDef);
            // Disallows our Hero from being disabled
            // or uncontrollable when he is not moving
            this.body.SetSleepingAllowed(false);
            // A velocity of zero
            this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));
            // And no spin
            this.body.SetAngularVelocity(0);
            // position Hero
            this.body.SetPosition(new box2d.b2Vec2(this.initialX / config.Screen.SCALE, this.initialY / config.Screen.SCALE));
        };
        Hero.prototype.resetPosition = function () {
            console.log('Reset position');
            // A velocity of zero
            this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));
            // And no spin
            this.body.SetAngularVelocity(0);
            // position Hero
            this.body.SetPosition(new box2d.b2Vec2(this.initialX / config.Screen.SCALE, this.initialY / config.Screen.SCALE));
        };
        Hero.prototype.assignControls = function () {
            // Binds key actions
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };
        Hero.prototype.onControlDown = function (e) {
            // Basic switch statement to set
            // our controls to true onKeyDown
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = true;
                    controls.lTally += 5;
                    controls.rTally = 0;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = true;
                    controls.rTally += 5;
                    controls.lTally = 0;
                    break;
                case keys.SPACEBAR:
                case keys.W:
                case keys.UP:
                    controls.jumping = true;
                    break;
            }
        };
        Hero.prototype.onControlUp = function (e) {
            // Basic switch statement to set
            // our controls to true onKeyUp
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = false;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = false;
                    break;
                case keys.SPACEBAR:
                case keys.W:
                case keys.UP:
                    controls.jumping = false;
                    break;
                case keys.GRAVE:
                    reality.enableDebugLayer();
                    break;
            }
        };
        Hero.prototype.onGround = function () {
            // If our Hero body is making contact
            // with a floor-like platform, let him jump.
            var contacts;
            contacts = this.body.GetContactList();
            if (contacts && contacts.contact.IsTouching()) {
                var objTouched = contacts.contact.GetFixtureA().GetBody().GetUserData();
                if (!objTouched || objTouched.objType === this.bodyDef.userData.objType) {
                    objTouched = contacts.contact.GetFixtureB().GetBody().GetUserData();
                }
                return objTouched.objType == 'platform' ? true : false;
            }
            else
                return false;
        };
        Hero.prototype.jumpTimePassed = function () {
            // At least the this.JUMP_TIMEOUT value has
            // passed since the last jump to disable
            // repeatable jumping.
            return createjs.Ticker.getTime() - this.lastJumpTime > this.JUMP_TIMEOUT;
        };
        // Fires on each iteration of our Game Loop
        Hero.prototype.update = function (playerLost) {
            // Return if game currently paused
            var finalVelocity, impulse, position, velocity, direction;
            /*     if (e.paused) {
                     return;
                 } */
            // Get the current position of our Hero
            position = this.body.GetPosition();
            // Get how fast
            velocity = this.body.GetLinearVelocity();
            if (playerLost) {
                // Reset player position
                this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));
                this.body.SetAngularVelocity(0);
                this.body.SetPosition(new box2d.b2Vec2(this.initialX / config.Screen.SCALE, this.initialY / config.Screen.SCALE));
            }
            else {
                // Normal movement:
                // Move our view (Our EaselJS Bitmap)
                // to the new coordinates to match the
                // Box2D Body's position of the hero
                this.view.x = position.x * config.Screen.SCALE;
                this.view.y = position.y * config.Screen.SCALE;
                // Gets the current spinning angle
                this.view.rotation = this.body.GetAngle() * (180 / Math.PI);
                // Jumping
                if (controls.jumping && this.onGround() && this.jumpTimePassed()) {
                    // Assign the last jump time to the current
                    // time of the running game
                    this.lastJumpTime = createjs.Ticker.getTime();
                    // Apply an impulse by defining a new vector
                    // point with a negative Y value-- jump height
                    impulse = new box2d.b2Vec2(0, -this.JUMP_HEIGHT);
                    this.body.ApplyImpulse(impulse, position);
                    this.view.gotoAndPlay("heroJump");
                    this.jumpSound.play();
                    controls.lTally = 0;
                    controls.rTally = 0;
                }
                // Get the current (absolute) X-axis velocity
                // and a direction multiplier
                finalVelocity = Math.abs(velocity.x);
                direction = velocity.x >= 0 ? 1 : -1;
                // Update velocity based on movement
                if (controls.right || controls.left) {
                    if (controls.right)
                        direction = 1;
                    else
                        direction = -1;
                    if (this.mirrored)
                        direction *= -1;
                    // Cap velocity & play animation
                    if (finalVelocity < this.MAX_SPEED) {
                        finalVelocity += (finalVelocity > 0 ? 0.45 : 0.6);
                        this.view.scaleX = direction;
                        // Only Play walk Animation once
                        if (controls.rTally == 5 || controls.lTally == 5) {
                            this.view.gotoAndPlay("heroWalk");
                        }
                    }
                }
                else if (finalVelocity > 0.015) {
                    finalVelocity *= 0.96; // The lower this is the faster our hero will slow down
                }
                else {
                    finalVelocity = 0;
                    this.view.gotoAndPlay("heroIdle");
                }
                // Set a new vector point for the hero
                // and apply the new linear velocity(left
                // and right) to our Hero's Box2D Body.
                velocity = new box2d.b2Vec2(finalVelocity * direction, velocity.y);
                this.body.SetLinearVelocity(velocity);
            }
        };
        return Hero;
    }());
    objects.Hero = Hero;
})(objects || (objects = {}));

//# sourceMappingURL=hero.js.map
