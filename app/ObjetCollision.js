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
define(["require", "exports", "./ObjetMobile"], function (require, exports, ObjetMobile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // ***************************************************************************************************************
    // CONSTANTES
    // ***************************************************************************************************************
    var redimensionMax = 1.5;
    var ObjetCollision = (function (_super) {
        __extends(ObjetCollision, _super);
        function ObjetCollision(refStage, unX, unY, uneVitesse, unSens, refKoi, refNumNiveau) {
            var _this = _super.call(this, refStage, unX, unY, uneVitesse, unSens, refNumNiveau) || this;
            _this.refMinuterieCollisionKoi = null;
            _this.avatarKoi = null;
            //this.changerEtatVisuelSelonNiveau();
            _this.avatarKoi = refKoi;
            _this.redimensionner();
            _this.refMinuterieCollisionKoi = window.setInterval(_this.verifierCollisionKoi.bind(_this), 1000 / 30);
            return _this;
        }
        ObjetCollision.prototype.redimensionner = function () {
            var facteurDeRedimensionnement = redimensionMax * (this.y / window.lib.properties.height);
            if (facteurDeRedimensionnement != 0) {
                this.scaleX = facteurDeRedimensionnement;
                this.scaleY = facteurDeRedimensionnement;
            }
        };
        // *************************************************************************************************************
        // VÉRIFICATION COLLISION
        // *************************************************************************************************************
        ObjetCollision.prototype.verifierCollisionKoi = function (evenement) {
            var avatarProche = this.verifierProximiteAvatar();
            var avatarTouche = this.avatarKoi.retournerEstTouche();
            // 1. Vérification si avatar à proximité et s'il est déjà dans son état 'touché' (empêche vérification inutile)
            if (avatarProche == true && avatarTouche == false) {
                // 2.. Vérification de collision des rectangles
                var jeToucheKoi = this.avatarKoi.enCollisionGrossiereAvec(this);
                if (jeToucheKoi == true && avatarTouche == false) {
                    // 3. Vérification de collision des points
                    var indexPointTouche = this.avatarKoi.enCollisionFineAvec(this);
                    if (indexPointTouche != -1) {
                        this.avatarKoi.gererAvatarTouche();
                        // 4. Gestion de l'impact de la collision revient aux enfants (Obstacle ou ManekiNeko).
                        this.gererCollisionAvecAvatar();
                    }
                }
            }
        };
        ObjetCollision.prototype.verifierProximiteAvatar = function () {
            var YAvatar = this.avatarKoi.retournerY();
            var avatarProche = false;
            if (Math.abs(YAvatar - this.y) < 20) {
                avatarProche = true;
            }
            return avatarProche;
        };
        ObjetCollision.prototype.supprimerObjetCollision = function () {
            window.clearInterval(this.refMinuterieCollisionKoi);
            this.refMinuterieCollisionKoi = null;
            this.supprimerObjetMobile();
        };
        return ObjetCollision;
    }(ObjetMobile_1.ObjetMobile));
    exports.ObjetCollision = ObjetCollision;
});
//# sourceMappingURL=ObjetCollision.js.map