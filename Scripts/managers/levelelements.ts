module managers {
    export class LevelElements {
        public static Level_1: any = {
            heroStartPoint: {x: 30, y: 520},
            enemyStartPoint: {x: 770, y: 520},
            exitDoorLocation: {x: 36, y: 43},
            music: 'level1',
            platforms: [
                { x: 0,  y: 48, width: 64, height:  1, isPlatform: true }, // Floor
                { x: 0,  y: 0,  width: 1,  height: 96, isPlatform: false }, // Left wall
                { x: 64, y: 0,  width: 1,  height: 96, isPlatform: false }, // Right wall
                { x:  0, y:  -1, width: 64, height:  1, isPlatform: false }, // Ceiling

                // Platforms
                { x: 20, y: 43, width: 5, height: 5 , isPlatform: true },
                { x: 44, y: 43, width: 5, height: 5 , isPlatform: true },

                { x: 6, y: 25, width: 5,  height: 0.5 , isPlatform: true },
                { x: 58, y: 25, width: 5, height: 0.5 , isPlatform: true },

                { x: 20, y: 12, width: 5, height: 0.5 , isPlatform: true },
                { x: 44, y: 12, width: 5, height: 0.5 , isPlatform: true },

                { x: 32, y: 20, width: 15, height: 0.5 , isPlatform: true },

                { x: 44, y: 16, width: 0.5, height: 4 , isPlatform: true },

            ],
            
            background: "FlorestBackground",
            images: [
                
                // obstacle 1
                {asset: "FlorestTile1", x: 184,   y: 474},
                {asset: "FlorestTile2", x: 218,   y: 474},
                {asset: "FlorestTile3", x: 252,   y: 474},
                {asset: "FlorestTile4", x: 184,   y: 538},
                {asset: "FlorestTile5", x: 218,   y: 538},
                {asset: "FlorestTile6", x: 252,   y: 538},
                
                // obstacle 2
                {asset: "FlorestTile1", x: 484,   y: 474},
                {asset: "FlorestTile2", x: 518,   y: 474},
                {asset: "FlorestTile3", x: 552,   y: 474},
                {asset: "FlorestTile4", x: 484,   y: 538},
                {asset: "FlorestTile5", x: 518,   y: 538},
                {asset: "FlorestTile6", x: 552,   y: 538},
                
                {asset: "FlorestTile14", x: 12,   y: 305},
                {asset: "FlorestTile15", x: 76,   y: 305},
                
                {asset: "FlorestTile13", x: 660,   y: 305},
                {asset: "FlorestTile14", x: 724,   y: 305},
                
                // Floor
                {asset: "FlorestTile2", x: 0,   y: 580},
                {asset: "FlorestTile2", x: 64,  y: 580},
                {asset: "FlorestTile2", x: 128, y: 580},
                {asset: "FlorestTile2", x: 192, y: 580},
                {asset: "FlorestTile2", x: 256, y: 580},
                {asset: "FlorestTile2", x: 320, y: 580},
                {asset: "FlorestTile2", x: 384, y: 580},
                {asset: "FlorestTile2", x: 448, y: 580},
                {asset: "FlorestTile2", x: 512, y: 580},
                {asset: "FlorestTile2", x: 576, y: 580},
                {asset: "FlorestTile2", x: 640, y: 580},
                {asset: "FlorestTile2", x: 704, y: 580},
                {asset: "FlorestTile2", x: 768, y: 580},
                
                // cosmetic elements
                {asset: "FlorestSign2", x: 0,  y: 540},
                {asset: "FlorestBush4", x: 64,  y: 555},
                {asset: "FlorestBush2", x: 320,  y: 542},
                {asset: "FlorestTree2", x: 680,  y: 430},
            ]            
        }

        public static Level_2: any = {
            heroStartPoint: { x: 30, y: 520 },
            enemyStartPoint: { x: 770, y: 50 },
            exitDoorLocation: { x: 61, y: 43 },
            music: 'level2',
            platforms: [
                { x:  0, y: 48, width: 64, height: 1  , isPlatform: true }, // Floor
                { x:  0, y:  0, width:  1, height: 96 , isPlatform: false }, // Left wall
                { x: 64, y:  0, width:  1, height: 96 , isPlatform: false }, // Right wall

                // Platforms
                { x: 12, y: 38, width: 5,  height: 0.5 , isPlatform: true },
                { x: 34, y: 27, width: 10, height: 0.5 , isPlatform: true },
                { x: 34, y:37.5, width: 10, height: 10 , isPlatform: false },
                { x:  1, y: 18, width: 16, height: 0.5 , isPlatform: true },
                
                // Enemy part
                { x:  62, y:   10, width:   3, height: 0.5 , isPlatform: true },
                { x:  49, y:   10, width:   3, height: 0.5 , isPlatform: true },
                { x:  35, y:   10, width:   3, height: 0.5 , isPlatform: true },
                { x: 32.5, y: -30, width: 0.5, height:  40 , isPlatform: false },
                { x:  37.5, y:   14, width: 0.5, height:   4 , isPlatform: false }
            ],
            background: "FlorestBackground",
            images: []
        }
    }
}