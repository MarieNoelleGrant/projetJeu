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
    var Projectile = (function (_super) {
        __extends(Projectile, _super);
        function Projectile(refStage, unX, unY, uneVitesse, unSens, refNumNiveau, refJeu) {
            var _this = _super.call(this, refStage, unX, unY * -1, uneVitesse, unSens, refNumNiveau) || this;
            _this.leJeu = null;
            _this.laMinuterieProjectile = null;
            _this.leJeu = refJeu;
            _this.laMinuterieProjectile = window.setInterval(_this.gererCollision.bind(_this), 1000 / 30);
            _this.redimensionner();
            return _this;
        }
        Projectile.prototype.dessiner = function () {
            window.lib.mcprojectileClipProjectile.call(this);
            this.frameBounds = window.lib.mcprojectileClipProjectile.prototype.frameBounds;
        };
        Projectile.prototype.redimensionner = function () {
            var facteurDeRedimensionnement = redimensionMax * (this.y / window.lib.properties.height);
            if (facteurDeRedimensionnement != 0) {
                this.scaleX = facteurDeRedimensionnement;
                this.scaleY = facteurDeRedimensionnement;
            }
        };
        // *************************************************************************************************************
        // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
        // *************************************************************************************************************
        Projectile.prototype.changerEtatVisuelSelonNiveau = function () {
            // Vide puisque c'est la seule méthode qui n'est pas solicitée par Projectile.
            // Présente car Projectile doit hériter de toutes les autres attributs et méthodes de ObjetMobile!
        };
        // *************************************************************************************************************
        // GESTION FIN SCÈNE + COLLISION AVEC MANEKINEKO
        // *************************************************************************************************************
        Projectile.prototype.gererFinScene = function () {
            if (this.x > 900) {
                this.leJeu.detruireProjectile(this);
            }
        };
        Projectile.prototype.gererCollision = function () {
            var refTManekiNeko = this.leJeu.retournerTManekiNeko();
            for (var intCpt = 0; intCpt < refTManekiNeko.length; intCpt++) {
                var manekiNekoTouche = refTManekiNeko[intCpt].retournerManekiNekoTouche();
                if (this.verifierProximiteManekiNeko(refTManekiNeko[intCpt]) == true && manekiNekoTouche == false) {
                    var collisionGrossiere = this.retournerCollisionProjectile(refTManekiNeko[intCpt]);
                    if (collisionGrossiere == true) {
                        this.leJeu.detruireProjectile(this);
                        // Début d'un état d'invincibilité pour le manekiNeko tombé
                        refTManekiNeko[intCpt].changerEtatToucheManekiNeko();
                        // Déclanche l'animation de fin de vie du ManekiNeko
                        refTManekiNeko[intCpt].debuterMortManekiNeko();
                    }
                }
            }
        };
        Projectile.prototype.verifierProximiteManekiNeko = function (refManekiNeko) {
            var YManekiNeko = refManekiNeko.retournerY();
            var ManekiNekoProche = false;
            if (Math.abs(YManekiNeko - this.y) < 20) {
                ManekiNekoProche = true;
            }
            return ManekiNekoProche;
        };
        Projectile.prototype.retournerCollisionProjectile = function (refManekiNeko) {
            var monRect = this.getTransformedBounds();
            var rectManekiNeko = refManekiNeko.getTransformedBounds();
            var enCollision = monRect.intersects(rectManekiNeko);
            return enCollision;
        };
        // *************************************************************************************************************
        // SUPPRESSION
        // *************************************************************************************************************
        Projectile.prototype.supprimerProjectile = function () {
            window.clearInterval(this.laMinuterieProjectile);
            this.laMinuterieProjectile = null;
            this.supprimerObjetMobile();
        };
        return Projectile;
    }(ObjetMobile_1.ObjetMobile));
    exports.Projectile = Projectile;
});
//# sourceMappingURL=Projectile.js.map