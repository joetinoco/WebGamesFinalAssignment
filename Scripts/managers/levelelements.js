var managers;
(function (managers) {
    var LevelElements = (function () {
        function LevelElements() {
        }
        LevelElements.Level_1 = {
            heroStartPoint: { x: 30, y: 520 },
            enemyStartPoint: { x: 770, y: 520 },
            exitDoorLocation: { x: 36, y: 43 },
            platforms: [
                { x: 0, y: 48, width: 64, height: 1 },
                { x: 0, y: 0, width: 1, height: 96 },
                { x: 64, y: 0, width: 1, height: 96 },
                // Platforms
                { x: 20, y: 43, width: 5, height: 5 },
                { x: 44, y: 43, width: 5, height: 5 },
                { x: 6, y: 25, width: 5, height: 0.5 },
                { x: 58, y: 25, width: 5, height: 0.5 },
                { x: 20, y: 12, width: 5, height: 0.5 },
                { x: 44, y: 12, width: 5, height: 0.5 },
                { x: 32, y: 20, width: 15, height: 0.5 },
                { x: 44, y: 16, width: 0.5, height: 4 },
            ]
        };
        return LevelElements;
    }());
    managers.LevelElements = LevelElements;
})(managers || (managers = {}));

//# sourceMappingURL=levelelements.js.map
