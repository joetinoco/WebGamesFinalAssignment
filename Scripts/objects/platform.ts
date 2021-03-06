﻿module objects {
    export class Platform {
        bodyDef: Box2D.Dynamics.b2BodyDef;
        fixDef: Box2D.Dynamics.b2FixtureDef;
        fixDefShape: Box2D.Collision.Shapes.b2PolygonShape;
        view: createjs.Shape;
        body;
        x: number;
        y: number;
        width: number;
        height: number;
        isPlatform: boolean;
        friction: number;
        constructor(x, y, width, height, isPlatform) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.isPlatform = isPlatform;
            this.createFixtureDefinition();
            this.createBodyDefinition();
            this.createPlatform();
        }

        createFixtureDefinition() {
            this.fixDef = new box2d.b2FixtureDef();
            this.fixDef.density = 1.0;
            this.fixDef.friction = 0.5; // Add some Resistance
            this.fixDef.restitution = 0.2; // Add a little bounce

            // Define the shape, which will be a Polygon
            this.fixDefShape = new box2d.b2PolygonShape();
            this.fixDefShape.SetAsBox(this.width, this.height);
            this.fixDef.shape = this.fixDefShape;
        }

        createBodyDefinition() {
            this.bodyDef = new box2d.b2BodyDef();
            this.bodyDef.type = box2d.b2Body.b2_staticBody;
            this.bodyDef.userData = {};
            this.bodyDef.userData.objType = this.isPlatform ? 'platform' : 'wall';
            this.bodyDef.position.x = this.x;
            this.bodyDef.position.y = this.y;
        }

        createPlatform() {
            var position;
            // Add platform to world
            this.body = world.CreateBody(this.bodyDef)
            this.body.CreateFixture(this.fixDef);

            position = this.body.GetPosition();

            // Creates a new Shape object
            this.view = new createjs.Shape();
            this.view.regX = this.width * config.Screen.SCALE;
            this.view.regY = this.height * config.Screen.SCALE;

            this.view.graphics.beginFill("#663300")
            .drawRect(
                position.x * config.Screen.SCALE, 
                position.y * config.Screen.SCALE, 
                this.width * 2 * config.Screen.SCALE, 
                this.height * 2 * config.Screen.SCALE);
        }
    }
} 