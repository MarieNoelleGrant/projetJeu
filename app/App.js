define(["require", "exports", "./Jeu"], function (require, exports, Jeu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.stage = null;
            this.leJeu = null;
            window.init(this); // Initialiser l'animation avec le méthode générée par Animate CC.
        }
        App.prototype.initialiser = function (refStage) {
            // Initialisation des attributs relatifs à l'animation ------------------------------------------------------------------
            this.stage = refStage; // Récupérer la références de la scène nouvellement créée
            createjs.Ticker.framerate = 30;
            // ----------------------------------------------------------------------------------------------------------------------
            this.leJeu = new Jeu_1.Jeu(this.stage);
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=App.js.map