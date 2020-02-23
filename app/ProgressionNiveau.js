var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./ObjetVisible"], function (require, exports, ObjetVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressionNiveau = (function (_super) {
        __extends(ProgressionNiveau, _super);
        function ProgressionNiveau(refStage, unX, unY, uneVitesse, refJeu) {
            var _this = _super.call(this, refStage, unX, unY) || this;
            _this.laMinuterieProgressionNiveau = null;
            _this.vitesse = null;
            _this.leJeu = null;
            _this.vitesse = uneVitesse;
            _this.leJeu = refJeu;
            _this.laMinuterieProgressionNiveau = window.setInterval(_this.faireProgresserAvatar.bind(_this), 1000);
            return _this;
        }
        ProgressionNiveau.prototype.dessiner = function () {
            window.lib.mccompteursClipProgressionNiveau.call(this);
            this.frameBounds = window.lib.mccompteursClipProgressionNiveau.prototype.frameBounds;
        };
        // *************************************************************************************************************
        // GESTION PROGRESSION NIVEAU
        // *************************************************************************************************************
        ProgressionNiveau.prototype.faireProgresserAvatar = function () {
            if (this['progression_niveau_avatar'].x < 265) {
                this['progression_niveau_avatar'].x = this['progression_niveau_avatar'].x + this.vitesse;
            }
            else {
                window.clearInterval(this.laMinuterieProgressionNiveau);
                // Appel de la méthode de fin du jeu, niveau réussi
                this.leJeu.demanderEcranNiveauReussi();
            }
        };
        // *************************************************************************************************************
        // GESTION RECUL DE PROGRESSION NIVEAU
        // *************************************************************************************************************
        ProgressionNiveau.prototype.faireReculerAvatar = function () {
            // 1. Arrêter la progression normale le temps de l'animation de recul
            window.clearInterval(this.laMinuterieProgressionNiveau);
            // 2. L'animation de recul
            this['progression_niveau_avatar'].gotoAndPlay('etat_recul');
            for (var intCpt = 1; intCpt <= 80; intCpt++) {
                if (this['progression_niveau_avatar'].x > 79) {
                    this['progression_niveau_avatar'].x = this['progression_niveau_avatar'].x - 0.5;
                }
            }
            // 3. Recréation de la minuterie et retour progression normale
            this.laMinuterieProgressionNiveau = window.setInterval(this.faireProgresserAvatar.bind(this), 1000);
        };
        // *************************************************************************************************************
        // FIN SCÈNE + SUPPRESSION
        // *************************************************************************************************************
        ProgressionNiveau.prototype.supprimerProgressionNiveau = function () {
            if (this.laMinuterieProgressionNiveau != null) {
                window.clearInterval(this.laMinuterieProgressionNiveau);
                this.laMinuterieProgressionNiveau = null;
            }
            this.supprimerObjetVisible();
        };
        return ProgressionNiveau;
    }(ObjetVisible_1.ObjetVisible));
    exports.ProgressionNiveau = ProgressionNiveau;
});
//# sourceMappingURL=ProgressionNiveau.js.map