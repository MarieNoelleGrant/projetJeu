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
    var ManekiNeko = (function (_super) {
        __extends(ManekiNeko, _super);
        function ManekiNeko(refScene, unX, unY, uneVitesse, unSens, refJeu, refKoi, refNumeroNiveau) {
            var _this = _super.call(this, refScene, unX, unY, uneVitesse, unSens, refKoi, refNumeroNiveau) || this;
            _this.leJeu = null;
            _this.manekiNekoToucheProjectile = false;
            _this.laMinuterieMortManekiNeko = null;
            _this.manekiNekoEstTouche = false;
            _this.laMinuterieArreterBruitCreation = null;
            _this.leJeu = refJeu;
            // Changement esthétique des ombres (ajout alpha par programmation)
            _this['cycleMarche']['ombre'].alpha = 0.7;
            _this['etatTouche']['ombre'].alpha = 0.7;
            _this['etatTombe']['ombre'].alpha = 0.7;
            // Appel du son à la création du manekiNeko
            _this.leJeu.partirSonSFX('antagoniste_creation');
            _this.laMinuterieArreterBruitCreation = window.setInterval(_this.arreterBruitCreation.bind(_this), 1500);
            return _this;
        }
        ManekiNeko.prototype.dessiner = function () {
            window.lib.mcantagonistesClipManekiNeko.call(this);
            this.frameBounds = window.lib.mcantagonistesClipManekiNeko.prototype.frameBounds;
        };
        ManekiNeko.prototype.arreterBruitCreation = function () {
            // arret du son de création
            window.clearInterval(this.laMinuterieArreterBruitCreation);
            this.laMinuterieArreterBruitCreation = null;
            this.leJeu.arreterSonSFX('antagoniste_creation');
        };
        // *************************************************************************************************************
        // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
        // *************************************************************************************************************
        ManekiNeko.prototype.changerEtatVisuelSelonNiveau = function () {
            if (this.leNumNiveau == 2) {
                // Mise à zéro pour la tête de lecture des sous clips, permettant de modifier sans bogue avec gotoAndStop
                // ** Effectuée ici plutôt que dans le constructeur,
                // ** puisque la méthode est appelée dans le constructeur d'ObjetMobile, qui s'exécute APRÈS
                this.miseAZeroTetesLectureSousClips();
                this['cycleMarche']['ombre'].gotoAndStop('foncee');
                this['etatTouche']['ombre'].gotoAndStop('foncee');
                this['etatTombe']['ombre'].gotoAndStop('foncee');
            }
        };
        ManekiNeko.prototype.miseAZeroTetesLectureSousClips = function () {
            this['cycleMarche'].gotoAndStop(0);
            this['cycleMarche']['ombre'].gotoAndStop(0);
            this['cycleMarche'].gotoAndPlay(0);
            this['etatTouche'].gotoAndStop(0);
            this['etatTouche']['ombre'].gotoAndStop(0);
            this['etatTouche'].gotoAndPlay(0);
            this['etatTombe'].gotoAndStop(0);
            this['etatTombe']['ombre'].gotoAndStop(0);
            this['etatTombe'].gotoAndPlay(0);
        };
        // *************************************************************************************************************
        // GESTION COLLISION AVEC AVATAR +
        // *************************************************************************************************************
        ManekiNeko.prototype.gererCollisionAvecAvatar = function () {
            this.avatarKoi.gererPointsVie();
        };
        // *************************************************************************************************************
        // GESTION COLLISION AVEC PROJECTILE
        // *************************************************************************************************************
        ManekiNeko.prototype.retournerManekiNekoTouche = function () {
            return this.manekiNekoEstTouche;
        };
        ManekiNeko.prototype.changerEtatToucheManekiNeko = function () {
            this.manekiNekoEstTouche = !this.manekiNekoEstTouche;
        };
        // *************************************************************************************************************
        // FIN SCÈNE + SUPPRESSION
        // *************************************************************************************************************
        ManekiNeko.prototype.retournerY = function () {
            return this.y;
        };
        ManekiNeko.prototype.gererFinScene = function () {
            if (this.x < -50) {
                this.leJeu.supprimerManekiNeko(this);
            }
            if (this.manekiNekoToucheProjectile == true) {
                this.leJeu.partirSonSFX('contact_projectile');
                this.faireAnimationTouche();
                this.manekiNekoToucheProjectile = false;
            }
        };
        ManekiNeko.prototype.debuterMortManekiNeko = function () {
            this.manekiNekoToucheProjectile = true;
        };
        ManekiNeko.prototype.faireAnimationTouche = function () {
            this.gotoAndStop('etatTouche');
            this.leJeu.partirSonSFX('antagoniste_touche');
            this.laMinuterieMortManekiNeko = window.setInterval(this.faireAnimationMort.bind(this), 1000);
        };
        ManekiNeko.prototype.faireAnimationMort = function () {
            window.clearInterval(this.laMinuterieMortManekiNeko);
            this.laMinuterieMortManekiNeko = null;
            this.gotoAndStop('etatTombe');
            this.leJeu.arreterSonSFX('contact_projectile');
            this.leJeu.arreterSonSFX('antagoniste_touche');
            this.laMinuterieMortManekiNeko = window.setInterval(this.detruireManekiNeko.bind(this), 1000);
        };
        ManekiNeko.prototype.detruireManekiNeko = function () {
            window.clearInterval(this.laMinuterieMortManekiNeko);
            this.laMinuterieMortManekiNeko = null;
            for (var intCpt = 10; intCpt >= 0; intCpt--) {
                this.alpha = this.alpha - 0.1;
                if (this.alpha <= 0) {
                    this.leJeu.supprimerManekiNeko(this);
                }
            }
        };
        ManekiNeko.prototype.supprimerManekiNeko = function () {
            this.removeEventListener("tick", this.gererFinScene_lier);
            if (this.laMinuterieMortManekiNeko != null) {
                window.clearInterval(this.laMinuterieMortManekiNeko);
                this.laMinuterieMortManekiNeko = null;
            }
            if (this.laMinuterieArreterBruitCreation != null) {
                window.clearInterval(this.laMinuterieArreterBruitCreation);
                this.laMinuterieArreterBruitCreation = null;
            }
            this.supprimerObjetCollision();
        };
        return ManekiNeko;
    }(ObjetCollision_1.ObjetCollision));
    exports.ManekiNeko = ManekiNeko;
});
//# sourceMappingURL=ManekiNeko.js.map