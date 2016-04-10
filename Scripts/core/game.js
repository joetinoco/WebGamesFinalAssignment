/// <reference path="_references.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var gameOver;
var instructions;
var level;
var level2;
// Physics Variables # Should be here? (global)
var world;
var reality;
var scoreboard;
// var assetData:objects.Asset[] = [
//     {id: "BackButton", src:"../../Assets/images/BackButton.png"},
//     {id: "Nextbutton", src:"../../Assets/images/Nextbutton.png"},
//     {id: "StartButton", src:"../../Assets/images/StartButton.png"},
//     {id: "MenuBackground", src: "../../Assets/images/MenuBackground.jpg" },
//     {id: "GameOverBackground", src: "../../Assets/images/GameOverBackground.jpg" },
//     {id: "StartOverButton", src:"../../Assets/images/StartOverButton.png"},
//     {id: "ResetButton", src:"../../Assets/images/ResetButton.png"},
//     {id: "QuitButton", src:"../../Assets/images/QuitButton.png"},
//     {id: "BlackBackground", src:"../../Assets/images/BlackBackground.png"},
//     {id: "WhiteBackground", src:"../../Assets/images/WhiteBackground.png"}
// ];
// function preload() {
//     assets = new createjs.LoadQueue();
//     assets.installPlugin(createjs.Sound);
//     assets.on("complete", init, this);
//     assets.loadManifest(assetData);
// }
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = config.ARCADE_CANVAS;
    // Setup box2d reality (here?)
    reality = new objects.Reality();
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // create score board
    scoreboard = new objects.Scoreboard();
    // set initial scene (or skip it depending on the URL)
    if (location.search)
        scene = Number(location.search[1]);
    else
        scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    reality.update(); // (here?)
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTIONS:
            // show the Instructions scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            console.log("Starting INSTRUCTIONS Scene");
            break;
        case config.Scene.LEVEL_1:
            stage.removeAllChildren();
            // Reset reality ¯\_(ツ)_/¯
            reality = new objects.Reality();
            level = new scenes.Level(managers.LevelElements.Level_1);
            currentScene = level;
            console.log("Starting LEVEL_1 Scene");
            break;
        case config.Scene.LEVEL_2:
            stage.removeAllChildren();
            // Reset reality ¯\_(ツ)_/¯
            reality = new objects.Reality();
            level2 = new scenes.Level(managers.LevelElements.Level_2);
            currentScene = level2;
            console.log("Starting LEVEL_2 Scene");
            break;
        case config.Scene.GAME_OVER:
            // show the game OVER scene
            stage.removeAllChildren();
            // Reset reality ¯\_(ツ)_/¯
            reality = new objects.Reality();
            gameOver = new scenes.GameOver();
            currentScene = gameOver;
            console.log("Starting GAME_OVER Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map