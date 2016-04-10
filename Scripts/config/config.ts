module config {

    // Scene Constants
    export class Scene {
        public static MENU:             number = 0;
        public static INSTRUCTIONS:     number = 1;
        public static GAME_OVER:        number = 2;
        public static LEVEL_1:          number = 3;
        public static LEVEL_2:          number = 4;
        public static LEVEL_3:          number = 5;
    }
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 800;
        public static HEIGHT: number = 600;
        public static CENTER_X: number = 400;
        public static CENTER_Y: number = 300;
        public static SCALE: number = 12.5;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
        public static HERO_LIVES: number = 3;
        public static LEVEL_COUNTDOWN: number = 60;
    }
    
    // Canvases
    export var ARCADE_CANVAS = document.getElementById("arcade");
    export var DEBUG_CANVAS = document.getElementById("debug");

}
