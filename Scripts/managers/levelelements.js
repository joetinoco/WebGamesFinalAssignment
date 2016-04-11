var managers;
(function (managers) {
    var LevelElements = (function () {
        function LevelElements() {
        }
        LevelElements.Level_1 = {
            heroStartPoint: { x: 30, y: 520 },
            enemyStartPoint: { x: 770, y: 520 },
            exitDoorLocation: { x: 36, y: 43 },
            music: 'level1',
            platforms: [
                { x: 0, y: 48, width: 64, height: 1, isPlatform: true },
                { x: 0, y: 0, width: 1, height: 96, isPlatform: false },
                { x: 64, y: 0, width: 1, height: 96, isPlatform: false },
                { x: 0, y: -1, width: 64, height: 1, isPlatform: false },
                // Platforms
                { x: 20, y: 43, width: 5, height: 5, isPlatform: true },
                { x: 44, y: 43, width: 5, height: 5, isPlatform: true },
                { x: 6, y: 25, width: 5, height: 0.5, isPlatform: true },
                { x: 58, y: 25, width: 5, height: 0.5, isPlatform: true },
                { x: 20, y: 12, width: 5, height: 0.5, isPlatform: true },
                { x: 44, y: 12, width: 5, height: 0.5, isPlatform: true },
                { x: 32, y: 20, width: 15, height: 0.5, isPlatform: true },
                { x: 44, y: 16, width: 0.5, height: 4, isPlatform: true },
            ],
            background: "FlorestBackground",
            images: [
                // obstacle 1
                { asset: "FlorestTile1", x: 184, y: 470 },
                { asset: "FlorestTile2", x: 218, y: 470 },
                { asset: "FlorestTile3", x: 252, y: 470 },
                { asset: "FlorestTile4", x: 184, y: 534 },
                { asset: "FlorestTile5", x: 218, y: 534 },
                { asset: "FlorestTile6", x: 252, y: 534 },
                // obstacle 2
                { asset: "FlorestTile1", x: 484, y: 470 },
                { asset: "FlorestTile2", x: 518, y: 470 },
                { asset: "FlorestTile3", x: 552, y: 470 },
                { asset: "FlorestTile4", x: 484, y: 534 },
                { asset: "FlorestTile5", x: 518, y: 534 },
                { asset: "FlorestTile6", x: 552, y: 534 },
                // left
                { asset: "FlorestTile14", x: 12, y: 300 },
                { asset: "FlorestTile15", x: 76, y: 300 },
                // right
                { asset: "FlorestTile13", x: 660, y: 300 },
                { asset: "FlorestTile14", x: 724, y: 300 },
                // top left
                { asset: "FlorestTile13", x: 186, y: 140 },
                { asset: "FlorestTile15", x: 250, y: 140 },
                // top right
                { asset: "FlorestTile13", x: 486, y: 140 },
                { asset: "FlorestTile15", x: 550, y: 140 },
                // top floor
                { asset: "FlorestTile13", x: 210, y: 240 },
                { asset: "FlorestTile14", x: 274, y: 240 },
                { asset: "FlorestTile14", x: 338, y: 240 },
                { asset: "FlorestTile14", x: 402, y: 240 },
                { asset: "FlorestTile14", x: 466, y: 240 },
                { asset: "FlorestTile15", x: 530, y: 240 },
                // box
                { asset: "FlorestCrate", x: 535, y: 205 },
                { asset: "FlorestCrate", x: 530, y: 160 },
                // Floor
                { asset: "FlorestTile2", x: 0, y: 580 },
                { asset: "FlorestTile2", x: 64, y: 580 },
                { asset: "FlorestTile2", x: 128, y: 580 },
                { asset: "FlorestTile2", x: 192, y: 580 },
                { asset: "FlorestTile2", x: 256, y: 580 },
                { asset: "FlorestTile2", x: 320, y: 580 },
                { asset: "FlorestTile2", x: 384, y: 580 },
                { asset: "FlorestTile2", x: 448, y: 580 },
                { asset: "FlorestTile2", x: 512, y: 580 },
                { asset: "FlorestTile2", x: 576, y: 580 },
                { asset: "FlorestTile2", x: 640, y: 580 },
                { asset: "FlorestTile2", x: 704, y: 580 },
                { asset: "FlorestTile2", x: 768, y: 580 },
                // cosmetic elements
                { asset: "FlorestSign2", x: 0, y: 540 },
                { asset: "FlorestBush4", x: 64, y: 555 },
                { asset: "FlorestBush2", x: 320, y: 542 },
                { asset: "FlorestTree2", x: 680, y: 430 },
                { asset: "FlorestStone", x: 500, y: 445 },
                { asset: "FlorestStone", x: 200, y: 445 },
                { asset: "FlorestBush3", x: 220, y: 442 },
                { asset: "FlorestBush2", x: 380, y: 200 },
                { asset: "FlorestStone", x: 390, y: 215 },
                { asset: "FlorestBush3", x: 360, y: 212 },
                { asset: "FlorestTree1", x: 250, y: 120 },
                { asset: "FlorestTree2", x: -20, y: 150 },
                { asset: "FlorestBush3", x: 10, y: 272 },
                { asset: "FlorestStone", x: 50, y: 275 },
                { asset: "FlorestTree1", x: 720, y: 280 },
                { asset: "FlorestMushroom2", x: 700, y: 275 },
            ]
        };
        LevelElements.Level_2 = {
            heroStartPoint: { x: 30, y: 520 },
            enemyStartPoint: { x: 770, y: 50 },
            exitDoorLocation: { x: 61, y: 43 },
            music: 'level2',
            platforms: [
                { x: 0, y: 48, width: 64, height: 1, isPlatform: true },
                { x: 0, y: 0, width: 1, height: 96, isPlatform: false },
                { x: 64, y: 0, width: 1, height: 96, isPlatform: false },
                // Platforms
                { x: 12, y: 38, width: 5, height: 0.5, isPlatform: true },
                { x: 34, y: 27, width: 10, height: 0.5, isPlatform: true },
                { x: 34, y: 37.5, width: 10, height: 10, isPlatform: false },
                { x: 1, y: 18, width: 16, height: 0.5, isPlatform: true },
                // Enemy part
                { x: 62, y: 10, width: 3, height: 0.5, isPlatform: true },
                { x: 49, y: 10, width: 3, height: 0.5, isPlatform: true },
                { x: 35, y: 10, width: 3, height: 0.5, isPlatform: true },
                { x: 32.5, y: -30, width: 0.5, height: 40, isPlatform: false },
                { x: 37.5, y: 14, width: 0.5, height: 4, isPlatform: false }
            ],
            background: "WinterBackground",
            images: [
                // Floor
                { asset: "WinterTile2", x: 0, y: 580 },
                { asset: "WinterTile2", x: 64, y: 580 },
                { asset: "WinterTile2", x: 128, y: 580 },
                { asset: "WinterTile2", x: 192, y: 580 },
                { asset: "WinterTile2", x: 256, y: 580 },
                { asset: "WinterTile2", x: 320, y: 580 },
                { asset: "WinterTile2", x: 384, y: 580 },
                { asset: "WinterTile2", x: 448, y: 580 },
                { asset: "WinterTile2", x: 512, y: 580 },
                { asset: "WinterTile2", x: 576, y: 580 },
                { asset: "WinterTile2", x: 640, y: 580 },
                { asset: "WinterTile2", x: 704, y: 580 },
                { asset: "WinterTile2", x: 768, y: 580 },
                // big block
                { asset: "WinterTile1", x: 297, y: 325 },
                { asset: "WinterTile2", x: 361, y: 325 },
                { asset: "WinterTile2", x: 425, y: 325 },
                { asset: "WinterTile3", x: 489, y: 325 },
                { asset: "WinterTile4", x: 297, y: 389 },
                { asset: "WinterTile5", x: 361, y: 389 },
                { asset: "WinterTile5", x: 425, y: 389 },
                { asset: "WinterTile6", x: 489, y: 389 },
                { asset: "WinterTile4", x: 297, y: 453 },
                { asset: "WinterTile5", x: 361, y: 453 },
                { asset: "WinterTile5", x: 425, y: 453 },
                { asset: "WinterTile6", x: 489, y: 453 },
                { asset: "WinterTile4", x: 297, y: 517 },
                { asset: "WinterTile5", x: 361, y: 517 },
                { asset: "WinterTile5", x: 425, y: 517 },
                { asset: "WinterTile6", x: 489, y: 517 },
                { asset: "WinterTile4", x: 297, y: 581 },
                { asset: "WinterTile5", x: 361, y: 581 },
                { asset: "WinterTile5", x: 425, y: 581 },
                { asset: "WinterTile6", x: 489, y: 581 },
                // step 1
                { asset: "WinterTile14", x: 88, y: 465 },
                { asset: "WinterTile16", x: 148, y: 465 },
                { asset: "WinterTile15", x: 12, y: 214 },
                { asset: "WinterTile15", x: 54, y: 214 },
                { asset: "WinterTile15", x: 88, y: 214 },
                { asset: "WinterTile16", x: 150, y: 214 },
                { asset: "WinterTile14", x: 724, y: 114 },
                { asset: "WinterTile14", x: 574, y: 114 },
                { asset: "WinterTile16", x: 588, y: 114 },
                { asset: "WinterTile1", x: 380, y: 114 },
                { asset: "WinterTile3", x: 416, y: 114 },
                { asset: "WinterTile13", x: 416, y: 168 },
                { asset: "WinterCrate", x: 385, y: 30 },
                { asset: "WinterCrate", x: 380, y: 75 },
                // cosmetic elements
                { asset: "WinterSign2", x: 0, y: 540 },
                { asset: "WinterTree1", x: 12, y: 100 },
                { asset: "WinterStone", x: 320, y: 285 },
                { asset: "WinterStone", x: 660, y: 540 },
            ]
        };
        return LevelElements;
    }());
    managers.LevelElements = LevelElements;
})(managers || (managers = {}));

//# sourceMappingURL=levelelements.js.map
