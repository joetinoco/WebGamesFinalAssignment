module managers {
    export class LevelElements {
        public static Level_1: any = {
            heroStartPoint: {x: 30, y: 520},
            enemyStartPoint: {x: 770, y: 520},
            exitDoorLocation: {x: 36, y: 43},
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
            
            background: "FlorestBackground"
        }

        public static Level_2: any = {
            heroStartPoint: { x: 30, y: 520 },
            enemyStartPoint: { x: 770, y: 50 },
            exitDoorLocation: { x: 61, y: 43 },
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
            ]
        }
    }
}