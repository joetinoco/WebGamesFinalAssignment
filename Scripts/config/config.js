var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.INSTRUCTIONS = 1;
        Scene.GAME_OVER = 2;
        Scene.LEVEL_1 = 3;
        Scene.LEVEL_2 = 4;
        Scene.LEVEL_3 = 5;
        return Scene;
    }());
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 800;
        Screen.HEIGHT = 600;
        Screen.CENTER_X = 400;
        Screen.CENTER_Y = 300;
        Screen.SCALE = 12.5;
        return Screen;
    }());
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        Game.HERO_LIVES = 3;
        Game.LEVEL_COUNTDOWN = 60;
        return Game;
    }());
    config.Game = Game;
    // Canvases
    config.ARCADE_CANVAS = document.getElementById("arcade");
    config.DEBUG_CANVAS = document.getElementById("debug");
})(config || (config = {}));

//# sourceMappingURL=config.js.map
