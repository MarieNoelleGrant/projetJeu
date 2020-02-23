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
define(["require", "exports", "./ObjetCollision"], function (require, exports, ObjetCollision_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Obstacle = (function (_super) {
        __extends(Obstacle, _super);
        function Obstacle(refScene, unX, unY, uneVitesse, unSens, refJeu, refNumeroNiveau, refKoi) {
            var _this = _super.call(this, refScene, unX, unY, uneVitesse, unSens, refKoi, refNumeroNiveau) || this;
            _this.leJeu = null;
            _this.leJeu = refJeu;
            // Pour ajuster la position de départ selon l'obstacle pigé, ainsi que sa grandeur une fois redimensioné
            var rectObstacle = _this.getTransformedBounds();
            _this.x = 800 + rectObstacle.width;
            return _this;
        }
        Obstacle.prototype.dessiner = function () {
            window.lib.mcobstaclesClipObstacle.call(this);
            this.frameBounds = window.lib.mcobstaclesClipObstacle.prototype.frameBounds;
        };
        // *************************************************************************************************************
        // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
        // *************************************************************************************************************
        Obstacle.prototype.changerEtatVisuelSelonNiveau = function () {
            if (this.leNumNiveau == 1) {
                var obstacleHasard = Math.floor(Math.random() * 2);
                this.gotoAndStop(obstacleHasard);
            }
            if (this.leNumNiveau == 2) {
                var obstacleHasard = Math.floor(Math.random() * 2) + 2;
                this.gotoAndStop(obstacleHasard);
            }
        };
        // *************************************************************************************************************
        // GESTION COLLISION AVEC AVATAR +
        // *************************************************************************************************************
        Obstacle.prototype.gererCollisionAvecAvatar = function () {
            this.avatarKoi.gererProgressionNiveau();
        };
        // *************************************************************************************************************
        // FIN SCÈNE + SUPPRESSION
        // *************************************************************************************************************
        Obstacle.prototype.gererFinScene = function () {
            if (this.x < 0) {
                this.leJeu.supprimerObstacle(this);
            }
        };
        Obstacle.prototype.supprimerObstacle = function () {
            this.removeEventListener("tick", this.gererFinScene_lier);
            this.supprimerObjetCollision();
        };
        return Obstacle;
    }(ObjetCollision_1.ObjetCollision));
    exports.Obstacle = Obstacle;
});
//# sourceMappingURL=Obstacle.js.map