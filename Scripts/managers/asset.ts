﻿module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        // Images
        { id: "loading", src: "Assets/images/loading.jpg" },
        { id: "ButtonSelectionOverlap", src: "Assets/images/BtnSelectionOverlap.png" },
        { id: "StartButton", src: "Assets/images/BtnStart.png" },
        { id: "InstructionsButton", src: "Assets/images/BtnInstructions.png" },
        { id: "BackButton", src: "Assets/images/BtnBack.png" },
        { id: "MenuBackground", src: "Assets/images/MenuBackground.png" },
        { id: "InstructionsBackground", src: "Assets/images/InstructionsBackground.png" },
        { id: "WhiteBackground", src: "Assets/images/WhiteBackground.png" },
        { id: "BlackBackground", src: "Assets/images/BlackBackground.png" },
        
        // Florest tiles
        { id: "FlorestBackground", src: "Assets/images/florest/BG.png" },
        { id: "FlorestBush1", src: "Assets/images/florest/Bush_1.png" },
        { id: "FlorestBush2", src: "Assets/images/florest/Bush_2.png" },
        { id: "FlorestBush3", src: "Assets/images/florest/Bush_3.png" },
        { id: "FlorestBush4", src: "Assets/images/florest/Bush_4.png" },
        { id: "FlorestCrate", src: "Assets/images/florest/Crate.png" },
        { id: "FlorestStone", src: "Assets/images/florest/Stone.png" },
        { id: "FlorestSign1", src: "Assets/images/florest/Sign_1.png" },
        { id: "FlorestSign2", src: "Assets/images/florest/Sign_2.png" },
        { id: "FlorestTree1", src: "Assets/images/florest/Tree_1.png" },
        { id: "FlorestTree2", src: "Assets/images/florest/Tree_2.png" },
        { id: "FlorestTree3", src: "Assets/images/florest/Tree_3.png" },
        { id: "FlorestTile1", src: "Assets/images/florest/tiles/1.png" },
        { id: "FlorestTile2", src: "Assets/images/florest/tiles/2.png" },
        { id: "FlorestTile3", src: "Assets/images/florest/tiles/3.png" },
        { id: "FlorestTile4", src: "Assets/images/florest/tiles/4.png" },
        { id: "FlorestTile5", src: "Assets/images/florest/tiles/5.png" },
        { id: "FlorestTile6", src: "Assets/images/florest/tiles/6.png" },
        { id: "FlorestTile7", src: "Assets/images/florest/tiles/7.png" },
        { id: "FlorestTile8", src: "Assets/images/florest/tiles/8.png" },
        { id: "FlorestTile9", src: "Assets/images/florest/tiles/9.png" },
        { id: "FlorestTile10", src: "Assets/images/florest/tiles/10.png" },
        { id: "FlorestTile11", src: "Assets/images/florest/tiles/11.png" },
        { id: "FlorestTile12", src: "Assets/images/florest/tiles/12.png" },
        { id: "FlorestTile13", src: "Assets/images/florest/tiles/13.png" },
        { id: "FlorestTile14", src: "Assets/images/florest/tiles/14.png" },
        { id: "FlorestTile15", src: "Assets/images/florest/tiles/15.png" },
        { id: "FlorestTile16", src: "Assets/images/florest/tiles/16.png" },
        { id: "FlorestTile17", src: "Assets/images/florest/tiles/17.png" },
        { id: "FlorestTile18", src: "Assets/images/florest/tiles/18.png" },
        
        // Sounds
        { id: "jump", src: "Assets/sounds/jump.mp3" },
        // Music
        { id: "menu", src: "Assets/sounds/menu.ogg" },
        { id: "level1", src: "Assets/sounds/level1.ogg" },
        { id: "level2", src: "Assets/sounds/level2.ogg" },
        { id: "level3", src: "Assets/sounds/level3.ogg" },
        { id: "gameover", src: "Assets/sounds/gameover.ogg" },
        { id: "gamewin", src: "Assets/sounds/gamewin.ogg" }
    ];

    var heroData = {
        "images": ["Assets/images/hero/heroAtlas.png"],
        "frames": [

            [178, 2, 67, 65],
            [178, 69, 67, 65],
            [178, 136, 67, 65],
            [178, 203, 67, 65],
            [178, 270, 67, 65],
            [178, 337, 67, 65],
            [178, 404, 67, 65],
            [2, 938, 67, 65],
            [90, 464, 67, 65],
            [78, 531, 67, 65],
            [78, 598, 67, 65],
            [78, 665, 67, 65],
            [78, 732, 67, 65],
            [78, 799, 67, 65],
            [78, 866, 67, 65],
            [159, 471, 67, 65],
            [147, 538, 67, 65],
            [147, 605, 67, 65],
            [147, 672, 67, 65],
            [147, 739, 67, 65],
            [147, 806, 67, 65],
            [147, 873, 67, 65],
            [71, 940, 67, 65],
            [140, 940, 67, 65],
            [2, 530, 74, 66],
            [2, 598, 74, 66],
            [2, 666, 74, 66],
            [2, 734, 74, 66],
            [2, 802, 74, 66],
            [2, 870, 74, 66],
            [2, 2, 86, 64],
            [2, 68, 86, 64],
            [90, 2, 86, 64],
            [90, 68, 86, 64],
            [2, 134, 86, 64],
            [90, 134, 86, 64],
            [2, 200, 86, 64],
            [90, 200, 86, 64],
            [2, 266, 86, 64],
            [90, 266, 86, 64],
            [2, 332, 86, 64],
            [90, 332, 86, 64],
            [2, 398, 86, 64],
            [90, 398, 86, 64],
            [2, 464, 86, 64]
        ],
        "animations": {

            "heroIdle": {
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                speed: 0.5,
            }, 
            "heroJump": {
                frames: [24, 25, 26, 27, 28, 29],
                speed: 0.2,
            },
            "heroWalk": {
                frames: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                speed: 0.5,
            }
        }

    };

    var enemyData = {
        "images": ["Assets/images/enemy/enemyAtlas.png"],
        "frames": [

            [162, 564, 60, 119],
            [2, 2, 81, 145],
            [85, 2, 81, 145],
            [168, 2, 81, 145],
            [2, 149, 81, 145],
            [85, 149, 81, 145],
            [168, 149, 81, 145],
            [2, 296, 78, 132],
            [82, 296, 78, 132],
            [82, 296, 78, 132],
            [162, 296, 78, 132],
            [2, 430, 78, 132],
            [2, 430, 78, 132],
            [2, 564, 78, 132],
            [82, 430, 78, 132],
            [82, 430, 78, 132],
            [82, 564, 78, 132],
            [162, 430, 78, 132],
            [162, 430, 78, 132]
        ],
        "animations": {

            "enemyIdle": {
                frames: [0],
                speed: 0.5
            },
            "enemyJump": {
                frames: [1, 6],
                speed: 0.5
            },
            "enemyWalk": {
                frames: [7, 18],
                speed: 0.5
            }
        }
    };

    var coinData = {
        "images": ["Assets/images/coin/coinAtlas.png"],
        "frames": [

            [2, 2, 44, 40],
            [48, 2, 44, 40],
            [94, 2, 44, 40],
            [140, 2, 44, 40],
            [186, 2, 44, 40],
            [232, 2, 44, 40],
            [278, 2, 44, 40],
            [324, 2, 44, 40],
            [370, 2, 44, 40],
            [416, 2, 44, 40]
        ],
        "animations": {

            "coin": {
                frames: [0, 9],
                speed: 0.5
            }
        }
    };

    // BitMap Font SpriteSheet Data object
    var bitMapFontData = {
        "images": ["Assets/fonts/fontAtlas.png"],
        "frames": [

            [2, 169, 83, 82],
            [768, 166, 32, 81],
            [218, 168, 60, 83],
            [585, 87, 61, 82],
            [307, 85, 68, 81],
            [651, 166, 57, 82],
            [154, 169, 62, 82],
            [525, 170, 58, 81],
            [87, 169, 65, 82],
            [337, 170, 62, 81],
            [275, 2, 82, 81],
            [518, 87, 65, 81],
            [523, 2, 75, 83],
            [600, 2, 75, 80],
            [401, 170, 61, 81],
            [464, 170, 59, 81],
            [2, 84, 83, 83],
            [234, 86, 71, 80],
            [802, 166, 26, 80],
            [713, 84, 61, 80],
            [87, 86, 71, 81],
            [776, 84, 52, 80],
            [442, 2, 79, 80],
            [377, 84, 70, 80],
            [191, 2, 82, 82],
            [648, 84, 63, 80],
            [106, 2, 83, 82],
            [585, 171, 64, 80],
            [280, 168, 55, 83],
            [710, 166, 56, 80],
            [449, 84, 67, 80],
            [359, 2, 81, 80],
            [2, 2, 102, 80],
            [677, 2, 75, 80],
            [754, 2, 73, 80],
            [160, 86, 72, 80]
        ],
        "animations": {

            "0": [0],
            "1": [1],
            "2": [2],
            "3": [3],
            "4": [4],
            "5": [5],
            "6": [6],
            "7": [7],
            "8": [8],
            "9": [9],
            "a": [10],
            "b": [11],
            "c": [12],
            "d": [13],
            "e": [14],
            "f": [15],
            "g": [16],
            "h": [17],
            "i": [18],
            "j": [19],
            "k": [20],
            "l": [21],
            "m": [22],
            "n": [23],
            "o": [24],
            "p": [25],
            "q": [26],
            "r": [27],
            "s": [28],
            "t": [29],
            "u": [30],
            "v": [31],
            "w": [32],
            "x": [33],
            "y": [34],
            "z": [35]
        }
    };

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader: createjs.LoadQueue;
        public static heroAtlas: createjs.SpriteSheet;
        public static enemyAtlas: createjs.SpriteSheet;
        public static coinAtlas: createjs.SpriteSheet;
        public static bitMapFont: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);

            this.heroAtlas = new createjs.SpriteSheet(heroData);
            this.enemyAtlas = new createjs.SpriteSheet(enemyData);
            this.coinAtlas = new createjs.SpriteSheet(coinData);
            this.bitMapFont = new createjs.SpriteSheet(bitMapFontData);
        }

    }
} 