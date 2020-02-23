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
    // ***************************************************************************************************************
    // CONSTANTES
    // ***************************************************************************************************************
    var redimensionMax = 1.5;
    var Koi = (function (_super) {
        __extends(Koi, _super);
        function Koi(refStage, unX, unY, refTVies, refNumeroNiveau, refProgressionNiveau, refJeu) {
            var _this = _super.call(this, refStage, unX, unY) || this;
            _this.tTouches = new Array();
            _this.laMinuterieKoi = null;
            _this.laMinuterieSiTouche = null;
            _this.enTir = false;
            _this.laMinuterieDebutTir = null;
            _this.laMinuterieBufferTir = null;
            _this.laMinuterieMortKoi = null;
            _this.debuterMinuterie = false;
            _this.debuterMinuterieTir = false;
            _this.tPointsContact = new Array();
            _this.koiEstTouche = false;
            _this.tVies = null;
            _this.nombreViesRestantes = 3;
            _this.numeroNiveau = null;
            _this.laProgressionNiveau = null;
            _this.leJeu = null;
            _this.leNumNiveau = null;
            _this.tTouches = [false, false, false, false, false]; //Touches 37 + 65(gauche + 'a'), 38+ 87(haut + 'w'), 39 + 68(droite + 'd'), 40 + 83(bas + 's'), 37 + 13(espace + enter)
            window.onkeydown = _this.activerTouche.bind(_this);
            window.onkeyup = _this.desactiverTouche.bind(_this);
            _this.tPointsContact[0] = _this['P0_mc'];
            _this.tPointsContact[1] = _this['P1_mc'];
            _this.tPointsContact[2] = _this['P2_mc'];
            _this.tPointsContact[3] = _this['P3_mc'];
            _this.tVies = refTVies;
            _this.numeroNiveau = refNumeroNiveau;
            _this.laProgressionNiveau = refProgressionNiveau;
            _this.leJeu = refJeu;
            _this.leStage = refStage;
            // Mise à zéro pour la tête de lecture des sous clips, permettant de modifier sans bogue avec gotoAndStop
            _this.miseAZeroTetesLectureSousClips();
            _this.leNumNiveau = refNumeroNiveau;
            if (_this.leNumNiveau != 1) {
                _this.changerEtatVisuelSelonNiveau();
            }
            return _this;
        }
        Koi.prototype.miseAZeroTetesLectureSousClips = function () {
            this['avatar_cycleMarche'].gotoAndStop(0);
            this['avatar_cycleMarche']['ombre'].gotoAndStop(0);
            this['avatar_cycleMarche'].gotoAndPlay(0);
            this['avatar_etatTouche'].gotoAndStop(0);
            this['avatar_etatTouche']['ombre'].gotoAndStop(0);
            this['avatar_etatTouche'].gotoAndPlay(0);
            this['avatar_etatTombe'].gotoAndStop(0);
            this['avatar_etatTombe']['ombre'].gotoAndStop(0);
            this['avatar_etatTombe'].gotoAndPlay(0);
            this['avatar_etatTombe_neutre'].gotoAndStop(0);
            this['avatar_etatTombe_neutre']['ombre'].gotoAndStop(0);
            this['avatar_etatTombe_neutre'].gotoAndPlay(0);
            // Changement esthétique des ombres (ajout alpha par programmation)
            this['avatar_cycleMarche']['ombre'].alpha = 0.7;
            this['avatar_etatTouche']['ombre'].alpha = 0.7;
            this['avatar_etatTombe']['ombre'].alpha = 0.7;
            this['avatar_etatTombe_neutre']['ombre'].alpha = 0.7;
        };
        Koi.prototype.dessiner = function () {
            window.lib.mcavatarClipKoi.call(this);
            this.frameBounds = window.lib.mcavatarClipKoi.prototype.frameBounds;
        };
        Koi.prototype.changerEtatVisuelSelonNiveau = function () {
            if (this.leNumNiveau == 2) {
                this['avatar_cycleMarche']['ombre'].gotoAndStop('foncee');
                this['avatar_etatTouche']['ombre'].gotoAndStop('foncee');
                this['avatar_etatTombe']['ombre'].gotoAndStop('foncee');
                this['avatar_etatTombe_neutre']['ombre'].gotoAndStop('foncee');
            }
        };
        // *************************************************************************************************************
        // DÉPLACEMENT
        // *************************************************************************************************************
        Koi.prototype.activerTouche = function (evenement) {
            switch (evenement.keyCode) {
                // Touches 'principales' & 'alternatives'
                case 37: //flèche gauche
                case 65:
                    this.tTouches[0] = true;
                    this.debuterMinuterie = true;
                    evenement.preventDefault();
                    break;
                case 38: //flèche haut
                case 87:
                    this.tTouches[1] = true;
                    this.debuterMinuterie = true;
                    evenement.preventDefault();
                    break;
                case 39: //flèche droite
                case 68:
                    this.tTouches[2] = true;
                    this.debuterMinuterie = true;
                    evenement.preventDefault();
                    break;
                case 40: //flèche bas
                case 83:
                    this.tTouches[3] = true;
                    this.debuterMinuterie = true;
                    evenement.preventDefault();
                    break;
                case 32: //touche 'espace'
                case 13:
                    this.tTouches[4] = true;
                    this.debuterMinuterieTir = true;
                    evenement.preventDefault();
                    break;
            }
            if (this.debuterMinuterie != false && this.laMinuterieKoi == null) {
                this.laMinuterieKoi = window.setInterval(this.bougerAvatar.bind(this), 50);
            }
            if (this.debuterMinuterieTir != false && this.enTir == false) {
                this.enTir = true;
                this.debuterFaireTirerAvatar();
            }
        };
        Koi.prototype.desactiverTouche = function (evenement) {
            switch (evenement.keyCode) {
                // Touches 'principales' & 'alternatives'
                case 37: //flèche gauche
                case 65:
                    this.tTouches[0] = false;
                    break;
                case 38: //flèche haut
                case 87:
                    this.tTouches[1] = false;
                    break;
                case 39: //flèche droite
                case 68:
                    this.tTouches[2] = false;
                    break;
                case 40: //flèche bas
                case 83:
                    this.tTouches[3] = false;
                    break;
                case 32: //touche 'espace'
                case 13:
                    this.tTouches[4] = false;
                    break;
            }
            if (this.tTouches.indexOf(true) == -1) {
                window.clearInterval(this.laMinuterieKoi);
                this.laMinuterieKoi = null;
            }
            if (this.tTouches[4] == false) {
            }
        };
        // *************************************************************************************************************
        // DÉPLACEMENT + REDIMENSION
        // *************************************************************************************************************
        Koi.prototype.bougerAvatar = function () {
            if (this.tTouches[0] != false) {
                if (this.x > Koi.limite.gauche) {
                    this.x = this.x - 6;
                }
            }
            if (this.tTouches[1] != false) {
                if (this.y > Koi.limite.haut) {
                    this.y = this.y - 6;
                    var facteurDeRedimensionnement = redimensionMax * (this.y / window.lib.properties.height);
                    this.scaleX = facteurDeRedimensionnement;
                    this.scaleY = facteurDeRedimensionnement;
                }
            }
            if (this.tTouches[2] != false) {
                if (this.x < Koi.limite.droite) {
                    this.x = this.x + 6;
                }
            }
            if (this.tTouches[3] != false) {
                if (this.y < Koi.limite.bas) {
                    this.y = this.y + 6;
                    var facteurDeRedimensionnement = redimensionMax * (this.y / window.lib.properties.height);
                    this.scaleX = facteurDeRedimensionnement;
                    this.scaleY = facteurDeRedimensionnement;
                }
            }
        };
        // *************************************************************************************************************
        // GESTION + CREATION PROJECTILES
        // *************************************************************************************************************
        Koi.prototype.debuterFaireTirerAvatar = function () {
            this['avatar_cycleMarche']['source_jet_eau'].gotoAndPlay('tir');
            this.laMinuterieDebutTir = window.setInterval(this.faireTirerAvatar.bind(this), 400);
        };
        Koi.prototype.faireTirerAvatar = function () {
            window.clearInterval(this.laMinuterieDebutTir);
            this['avatar_cycleMarche']['source_jet_eau'].gotoAndStop('neutre');
            // Calcul du positionnement à envoyer au constructor du projectile, qui prend en compte le redimentionnement
            var rectAvatarKoi = this.getTransformedBounds();
            var refPositionXSourceProjectile = this.x + (rectAvatarKoi.width / 2);
            var refPositionYSourceProjectile = (this.y * -1) + (rectAvatarKoi.height / 3);
            this.leJeu.creerProjectile(refPositionXSourceProjectile, refPositionYSourceProjectile);
            this.leJeu.partirSonSFX('tir');
            this.laMinuterieBufferTir = window.setInterval(this.permettreNouveauTir.bind(this), 700);
        };
        Koi.prototype.permettreNouveauTir = function () {
            window.clearInterval(this.laMinuterieBufferTir);
            this.leJeu.arreterSonSFX('tir');
            if (this.laMinuterieDebutTir != null) {
                this.laMinuterieDebutTir = null;
            }
            this.laMinuterieBufferTir = null;
            this.enTir = false;
            this.debuterMinuterieTir = false;
        };
        // *************************************************************************************************************
        // GESTION COLLISION
        // *************************************************************************************************************
        Koi.prototype.enCollisionGrossiereAvec = function (refDemandeur) {
            var monRect = this.getTransformedBounds();
            var rectDemandeur = refDemandeur.getTransformedBounds();
            var enCollision = monRect.intersects(rectDemandeur);
            return enCollision;
        };
        Koi.prototype.enCollisionFineAvec = function (refDemandeur) {
            if (this.koiEstTouche != true) {
                // Une valeur 'impossible' à la base, change pour un index réel si point touché
                var indexPointTouche = -1;
                // Pour chacun de mes points de contact
                for (var intCpt = 0; intCpt < this.tPointsContact.length && indexPointTouche == -1; intCpt++) {
                    var monPoint = this.tPointsContact[intCpt];
                    // Convertir mon point en coordonnée locale au demandeur
                    var monPointLocalAuDemandeur = monPoint.localToLocal(monPoint.x, monPoint.y, refDemandeur);
                    if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y)) {
                        indexPointTouche = intCpt;
                    }
                }
                return indexPointTouche;
            }
        };
        Koi.prototype.gererAvatarTouche = function () {
            if (this.koiEstTouche == false) {
                this.debuterInvincibilite();
                // Empêche le son double de collision et de mort de l'avatar
                if (this.nombreViesRestantes > 1) {
                    this.leJeu.partirSonSFX('avatar_touche');
                }
            }
        };
        // *************************************************************************************************************
        // INVINCIBILITÉ + RETOUR NORMALE
        // *************************************************************************************************************
        Koi.prototype.debuterInvincibilite = function () {
            // Bascule état changement, pour évite empilement des écouteurs d'évènement
            this.koiEstTouche = !this.koiEstTouche;
            this.gotoAndStop("etatTouche");
            this.laMinuterieSiTouche = window.setInterval(this.retourEtatNormal.bind(this), 2000);
        };
        Koi.prototype.retourEtatNormal = function () {
            this.leJeu.arreterSonSFX('avatar_touche');
            this.koiEstTouche = !this.koiEstTouche;
            window.clearInterval(this.laMinuterieSiTouche);
            this.laMinuterieSiTouche = null;
            this.gotoAndStop("enMouvement");
        };
        // *************************************************************************************************************
        // GESTION POINTS DE VIE
        // *************************************************************************************************************
        Koi.prototype.gererPointsVie = function () {
            if (this.nombreViesRestantes >= 1) {
                this.nombreViesRestantes = this.nombreViesRestantes - 1;
                this.tVies[this.nombreViesRestantes].changerEtatVisuelVie();
                if (this.nombreViesRestantes == 0) {
                    this.debuterAnimationMortKoi();
                }
            }
        };
        Koi.prototype.debuterAnimationMortKoi = function () {
            this.gotoAndStop('etatSiTombe');
            this.laMinuterieMortKoi = window.setInterval(this.debuterPartieTerminee.bind(this), 2000);
            this.leJeu.partirSonSFX('avatar_mort');
        };
        Koi.prototype.debuterPartieTerminee = function () {
            this.leJeu.arreterSonSFX('avatar_mort');
            window.clearInterval(this.laMinuterieMortKoi);
            this.gotoAndStop('etatMort_neutre');
            // Appel de la méthode de fin du jeu, niveau échoué
            if (this.nombreViesRestantes == 0) {
                this.leJeu.demanderEcranFinJeu('manekiNeko');
            }
            else {
                this.leJeu.demanderEcranFinJeu('manqueDAir');
            }
        };
        // *************************************************************************************************************
        // GESTION PROGRESSION NIVEAU
        // *************************************************************************************************************
        Koi.prototype.gererProgressionNiveau = function () {
            this.laProgressionNiveau.faireReculerAvatar();
        };
        // *************************************************************************************************************
        // RETURNS POUR INFORMATIONS DE L'AVATAR
        // *************************************************************************************************************
        Koi.prototype.retournerY = function () {
            return this.y;
        };
        Koi.prototype.retournerEstTouche = function () {
            return this.koiEstTouche;
        };
        // *************************************************************************************************************
        // FIN SCÈNE + SUPPRESSION
        // *************************************************************************************************************
        Koi.prototype.supprimerKoi = function () {
            window.onkeydown = null;
            window.onkeyup = null;
            window.clearInterval(this.laMinuterieKoi);
            this.laMinuterieKoi = null;
            if (this.laMinuterieSiTouche != null) {
                window.clearInterval(this.laMinuterieSiTouche);
                this.laMinuterieSiTouche = null;
            }
            if (this.laMinuterieDebutTir != null) {
                window.clearInterval(this.laMinuterieDebutTir);
                this.laMinuterieDebutTir = null;
            }
            if (this.laMinuterieBufferTir != null) {
                window.clearInterval(this.laMinuterieBufferTir);
                this.laMinuterieBufferTir = null;
            }
            this.supprimerObjetVisible();
        };
        return Koi;
    }(ObjetVisible_1.ObjetVisible));
    Koi.limite = { haut: 240, bas: 520, gauche: 100, droite: 650 };
    exports.Koi = Koi;
});
//# sourceMappingURL=Koi.js.map