module managers {
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
        { id: "FlorestMushroom1", src: "Assets/images/florest/Mushroom_1.png" },
        { id: "FlorestMushroom2", src: "Assets/images/florest/Mushroom_2.png" },
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
        
        
        // Winter tiles
        { id: "WinterBackground", src: "Assets/images/winter/BG.png" },
        { id: "WinterCrystal", src: "Assets/images/winter/Crystal.png" },
        { id: "WinterCrate", src: "Assets/images/winter/Crate.png" },
        { id: "WinterIceBox", src: "Assets/images/winter/IceBox.png" },
        { id: "WinterIgloo", src: "Assets/images/winter/Igloo.png" },
        { id: "WinterStone", src: "Assets/images/winter/Stone.png" },
        { id: "WinterSign1", src: "Assets/images/winter/Sign_1.png" },
        { id: "WinterSign2", src: "Assets/images/winter/Sign_2.png" },
        { id: "WinterSnowMan", src: "Assets/images/winter/SnowMan.png" },
        { id: "WinterTree1", src: "Assets/images/winter/Tree_1.png" },
        { id: "WinterTree2", src: "Assets/images/winter/Tree_2.png" },
        { id: "WinterTile1", src: "Assets/images/winter/Tiles/1.png" },
        { id: "WinterTile2", src: "Assets/images/winter/Tiles/2.png" },
        { id: "WinterTile3", src: "Assets/images/winter/Tiles/3.png" },
        { id: "WinterTile4", src: "Assets/images/winter/Tiles/4.png" },
        { id: "WinterTile5", src: "Assets/images/winter/Tiles/5.png" },
        { id: "WinterTile6", src: "Assets/images/winter/Tiles/6.png" },
        { id: "WinterTile7", src: "Assets/images/winter/Tiles/7.png" },
        { id: "WinterTile8", src: "Assets/images/winter/Tiles/8.png" },
        { id: "WinterTile9", src: "Assets/images/winter/Tiles/9.png" },
        { id: "WinterTile10", src: "Assets/images/winter/Tiles/10.png" },
        { id: "WinterTile11", src: "Assets/images/winter/Tiles/11.png" },
        { id: "WinterTile12", src: "Assets/images/winter/Tiles/12.png" },
        { id: "WinterTile13", src: "Assets/images/winter/Tiles/13.png" },
        { id: "WinterTile14", src: "Assets/images/winter/Tiles/14.png" },
        { id: "WinterTile15", src: "Assets/images/winter/Tiles/15.png" },
        { id: "WinterTile16", src: "Assets/images/winter/Tiles/16.png" },
        { id: "WinterTile17", src: "Assets/images/winter/Tiles/17.png" },
        { id: "WinterTile18", src: "Assets/images/winter/Tiles/18.png" },
        
        // Sounds
        { id: "jump", src: "Assets/sounds/jump.mp3" },
        { id: "loselife", src: "Assets/sounds/loselife.ogg" },
        // Music
        { id: "menu", src: "Assets/sounds/menu.ogg" },
        { id: "level1", src: "Assets/sounds/level1.ogg" },
        { id: "level2", src: "Assets/sounds/level2.ogg" },
        { id: "level3", src: "Assets/sounds/level3.ogg" },
        { id: "gameover", src: "Assets/sounds/gameover.ogg" },
        { id: "gamewin", src: "Assets/sounds/gamewin.ogg" }
    ];
    
    var heroData = {

        "images": ["Assets/images/newHero/newHeroAtlas.png"],

        "frames": [
            [1, 1, 47, 64, 0, -1, -6],
            [50, 1, 47, 64, 0, -1, -6],
            [99, 1, 47, 64, 0, -1, -6],
            [148, 1, 47, 64, 0, -1, -6],
            [1, 67, 51, 64, 0, -5, -1],
            [54, 67, 47, 65, 0, -3, -6],
            [103, 67, 47, 65, 0, -3, -6],
            [152, 67, 49, 67, 0, -6, -7],
            [1, 133, 49, 67, 0, -9, -2],
            [52, 134, 57, 67, 0, 0, -1],
            [111, 136, 53, 67, 0, -3, -1],
            [166, 136, 53, 67, 0, -5, -2],
            [1, 202, 45, 68, 0, 0, 0],
            [48, 203, 45, 68, 0, 0, 0],
            [95, 205, 45, 68, 0, 0, 0],
            [142, 205, 45, 68, 0, 0, 0],
            [189, 205, 45, 68, 0, 0, 0],
            [1, 272, 45, 68, 0, 0, 0],
            [48, 273, 45, 68, 0, 0, 0],
            [95, 275, 45, 68, 0, 0, 0],
            [142, 275, 45, 68, 0, 0, 0],
            [189, 275, 45, 68, 0, 0, 0],
            [1, 343, 50, 68, 0, -8, -2],
            [53, 345, 58, 68, 0, 0, -2],
            [113, 345, 48, 69, 0, -3, -6],
            [163, 345, 46, 69, 0, -3, -6],
            [1, 413, 46, 69, 0, -3, -6],
            [49, 415, 52, 70, 0, -5, -1],
            [103, 416, 53, 70, 0, -3, -1],
            [158, 416, 51, 70, 0, -6, -1]
        ],

        "animations": {
            "heroWalk": {
                frames: [22, 27, 28, 9, 23, 8, 29, 10, 4, 11],
                speed: 0.2,
            },
            "heroJump": {
                frames: [7, 24, 0, 1, 2, 3, 25, 26, 5, 6],
                speed: 0.2,
            },
            "heroIdle": {
                frames: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
                next: "heroIdle",
                speed: 0.2,
            }
        }

    };

    var enemyData = {
        "images": ["Assets/images/newEnemy/newEnemyAtlas.png"],
        "frames": [
            [1, 1, 51, 62, 0, 0, -1],
            [1, 65, 50, 61, 0, 0, 0],
            [1, 128, 48, 59, 0, 0, -2],
            [1, 189, 48, 59, 0, 0, -2],
            [1, 250, 47, 64, 0, -3, 0],
            [1, 316, 47, 62, 0, -4, -1],
            [1, 380, 47, 61, 0, -4, -1],
            [1, 443, 47, 61, 0, -4, -1],
            [1, 506, 46, 64, 0, -4, 0],
            [1, 572, 46, 63, 0, -4, -1],
            [1, 637, 46, 61, 0, -3, 0],
            [1, 700, 46, 58, 0, -3, 0],
            [1, 760, 44, 61, 0, -2, -2],
            [1, 823, 41, 63, 0, -8, -4],
            [1, 888, 41, 61, 0, -5, -2],
            [1, 951, 39, 66, 0, -7, -2],
            [1, 1019, 38, 63, 0, -5, -2],
            [1, 1084, 38, 62, 0, -5, -2],
            [1, 1148, 38, 62, 0, -5, -2],
            [1, 1212, 38, 62, 0, -5, -2],
            [1, 1276, 32, 61, 0, 0, 0],
            [1, 1339, 32, 61, 0, 0, 0],
            [1, 1402, 32, 61, 0, 0, 0],
            [1, 1465, 32, 61, 0, 0, 0],
            [1, 1528, 32, 61, 0, 0, 0],
            [1, 1591, 32, 61, 0, 0, 0],
            [1, 1654, 32, 61, 0, 0, 0],
            [1, 1717, 32, 61, 0, 0, 0],
            [1, 1780, 32, 61, 0, 0, 0],
            [1, 1843, 32, 61, 0, 0, 0]
        ],
        "animations": {

            "heroIdle": {
                frames: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                next: "heroIdle",
                speed: 0.2
            },
            "heroJump": {
                frames: [13, 15, 16, 17, 18, 19, 14, 12, 2, 3],
                speed: 0.5
            },
            "heroWalk": {
                frames: [5, 9, 4, 1, 0, 6, 8, 10, 11, 7],
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