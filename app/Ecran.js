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
    var Ecran = (function (_super) {
        __extends(Ecran, _super);
        function Ecran(refStage, unX, unY, refJeu) {
            var _this = _super.call(this, refStage, unX, unY) || this;
            _this.leJeu = null;
            _this.changerPageSuivante_lier = null;
            _this.changerPagePrecedente_lier = null;
            _this.commencerFaireDebuterJeu_lier = null;
            _this.faireDebuterJeu_lier = null;
            _this.debuterRecommencerLeJeu_lier = null;
            _this.debuterProchainNiveau_lier = null;
            _this.laMinuterieEcranDebutNiveau = null;
            _this.numeroNiveau = 1;
            // pour contrer un bogue si le niveau d'air se vide trop près de l'arrivée de la fin du niveau
            _this.finActivee = false;
            _this.leJeu = refJeu;
            _this.changerPageSuivante_lier = _this.changerPageSuivante.bind(_this);
            _this.changerPagePrecedente_lier = _this.changerPagePrecedente.bind(_this);
            _this.commencerFaireDebuterJeu_lier = _this.commencerFaireDebuterJeu.bind(_this);
            _this.faireDebuterJeu_lier = _this.faireDebuterJeu.bind(_this);
            _this.debuterRecommencerLeJeu_lier = _this.debuterRecommencerLeJeu.bind(_this);
            _this.debuterProchainNiveau_lier = _this.debuterProchainNiveau.bind(_this);
            _this['btn_pageSuivante'].addEventListener('click', _this.changerPageSuivante_lier);
            return _this;
        }
        Ecran.prototype.dessiner = function () {
            window.lib.mcecransClipEcran.call(this);
            this.frameBounds = window.lib.mcecransClipEcran.prototype.frameBounds;
        };
        Ecran.prototype.changerEtatFinActivee = function () {
            this.finActivee = !this.finActivee;
        };
        // *************************************************************************************************************
        // PREMIERS ÉCRANS - Explications du jeu, page 1 et 2
        // *************************************************************************************************************
        Ecran.prototype.changerPageSuivante = function (evenement) {
            this['btn_pageSuivante'].removeEventListener('click', this.changerPageSuivante_lier);
            this.gotoAndStop('ecran_debutJeu2');
            this['btn_pagePrecedente'].addEventListener('click', this.changerPagePrecedente_lier);
            this['btn_debuter'].addEventListener('click', this.commencerFaireDebuterJeu_lier);
        };
        Ecran.prototype.changerPagePrecedente = function (evenement) {
            this['btn_pagePrecedente'].removeEventListener('click', this.changerPagePrecedente_lier);
            this['btn_debuter'].removeEventListener('click', this.commencerFaireDebuterJeu_lier);
            this.gotoAndStop('ecran_debutJeu1');
            this['btn_pageSuivante'].addEventListener('click', this.changerPageSuivante_lier);
        };
        Ecran.prototype.commencerFaireDebuterJeu = function (evenement) {
            this['btn_pagePrecedente'].removeEventListener('click', this.changerPagePrecedente_lier);
            this['btn_debuter'].removeEventListener('click', this.commencerFaireDebuterJeu_lier);
            this.afficherEcranDebutNiveau();
        };
        // *************************************************************************************************************
        // PROCÉDURE POUR DÉBUT NIVEAU
        // *************************************************************************************************************
        Ecran.prototype.afficherEcranDebutNiveau = function () {
            this.gotoAndStop('ecran_debutNiveau' + this.numeroNiveau);
            this.laMinuterieEcranDebutNiveau = window.setInterval(this.faireDebuterJeu_lier, 1500);
        };
        Ecran.prototype.faireDebuterJeu = function (evenement) {
            window.clearInterval(this.laMinuterieEcranDebutNiveau);
            this.visible = false;
            this.leJeu.faireDebuterLeJeu();
        };
        Ecran.prototype.afficherEcranFinJeu = function (strRaisonMort) {
            if (this.finActivee == false) {
                this.visible = true;
                this.gotoAndStop('ecran_partiePerdue');
                // Pour gestion du message sur l'écran de niveau échoué
                var strMsgNiveauEchoue = "";
                if (strRaisonMort == 'manekiNeko') {
                    strMsgNiveauEchoue = "Koi s'est fait attraper trop souvent par les ManekiNeko !";
                }
                else {
                    strMsgNiveauEchoue = "Koi a manqué d'air avant d'arriver au prochain bocal !";
                }
                this['txt_msgNiveauEchoue'].text = strMsgNiveauEchoue;
                this.leJeu.supprimerComposantesJeu();
                this.leJeu.partirSonSFX('partie_perdue');
                this['btn_reessayer'].addEventListener('click', this.debuterRecommencerLeJeu_lier);
            }
        };
        Ecran.prototype.debuterRecommencerLeJeu = function (evenement) {
            this.leJeu.arreterSonSFX('partie_perdue');
            this['btn_reessayer'].removeEventListener('click', this.debuterRecommencerLeJeu_lier);
            this.visible = false;
            this.changerEtatFinActivee();
            this.leJeu.faireDebuterLeJeu();
        };
        Ecran.prototype.afficherEcranNiveauTermine = function () {
            if (this.finActivee == false) {
                this.changerEtatFinActivee();
                this.visible = true;
                this.gotoAndStop('ecran_partieGagnee');
                this.leJeu.supprimerComposantesJeu();
                this.leJeu.partirSonSFX('partie_gagnee');
                // Si on n'est pas encore au dernier niveau, on rend visible le bouton + ecouteur d'evenement
                if (this.numeroNiveau < 2) {
                    this['btn_prochainNiveau'].visible = true;
                    this['btn_prochainNiveau'].addEventListener('click', this.debuterProchainNiveau_lier);
                    this['txt_msgVictoire'].visible = false;
                }
                else {
                    // Si on est rendu au dernier niveau, on enlève le bouton 'prochain niveau' + affiche texte victoire
                    this['btn_prochainNiveau'].visible = false;
                    this['txt_msgVictoire'].visible = true;
                }
            }
        };
        Ecran.prototype.debuterProchainNiveau = function (evenement) {
            this.leJeu.arreterSonSFX('partie_gagnee');
            this.numeroNiveau = this.numeroNiveau + 1;
            this['btn_prochainNiveau'].removeEventListener('click', this.debuterProchainNiveau_lier);
            this.afficherEcranDebutNiveau();
            this.leJeu.changerNiveau(this.numeroNiveau);
            this.changerEtatFinActivee();
        };
        Ecran.prototype.supprimerEcran = function () {
            this.supprimerObjetVisible();
        };
        return Ecran;
    }(ObjetVisible_1.ObjetVisible));
    exports.Ecran = Ecran;
});
//# sourceMappingURL=Ecran.js.map