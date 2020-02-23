import {Jeu} from "./Jeu";
import {ObjetVisible} from "./ObjetVisible";

export class Ecran extends ObjetVisible {
    private leJeu:Jeu = null;

    private changerPageSuivante_lier:any = null;
    private changerPagePrecedente_lier:any = null;
    private commencerFaireDebuterJeu_lier:any = null;
    private faireDebuterJeu_lier:any = null;
    private debuterRecommencerLeJeu_lier:any = null;
    private debuterProchainNiveau_lier:any = null;
    private laMinuterieEcranDebutNiveau:number = null;
    private numeroNiveau:number = 1;
    // pour contrer un bogue si le niveau d'air se vide trop près de l'arrivée de la fin du niveau
    private finActivee:boolean = false;

    public constructor(refStage:createjs.Stage, unX:number, unY:number, refJeu:Jeu) {
        super(refStage, unX, unY);

        this.leJeu = refJeu;
        this.changerPageSuivante_lier = this.changerPageSuivante.bind(this);
        this.changerPagePrecedente_lier = this.changerPagePrecedente.bind(this);
        this.commencerFaireDebuterJeu_lier = this.commencerFaireDebuterJeu.bind(this);
        this.faireDebuterJeu_lier = this.faireDebuterJeu.bind(this);
        this.debuterRecommencerLeJeu_lier = this.debuterRecommencerLeJeu.bind(this);
        this.debuterProchainNiveau_lier = this.debuterProchainNiveau.bind(this);

        this['btn_pageSuivante'].addEventListener('click', this.changerPageSuivante_lier);

    }

    public dessiner():void {
        window.lib.mcecransClipEcran.call(this);
        this.frameBounds = window.lib.mcecransClipEcran.prototype.frameBounds;
    }

    public changerEtatFinActivee():void {
        this.finActivee =! this.finActivee;
    }

    // *************************************************************************************************************
    // PREMIERS ÉCRANS - Explications du jeu, page 1 et 2
    // *************************************************************************************************************
    private changerPageSuivante(evenement:createjs.Event):void {
        this['btn_pageSuivante'].removeEventListener('click', this.changerPageSuivante_lier);
        this.gotoAndStop('ecran_debutJeu2');

        this['btn_pagePrecedente'].addEventListener('click', this.changerPagePrecedente_lier);
        this['btn_debuter'].addEventListener('click', this.commencerFaireDebuterJeu_lier);
    }

    private changerPagePrecedente(evenement:createjs.Event):void {
        this['btn_pagePrecedente'].removeEventListener('click', this.changerPagePrecedente_lier);
        this['btn_debuter'].removeEventListener('click', this.commencerFaireDebuterJeu_lier);

        this.gotoAndStop('ecran_debutJeu1');
        this['btn_pageSuivante'].addEventListener('click', this.changerPageSuivante_lier);
    }

    private commencerFaireDebuterJeu(evenement:createjs.Event):void {
        this['btn_pagePrecedente'].removeEventListener('click', this.changerPagePrecedente_lier);
        this['btn_debuter'].removeEventListener('click', this.commencerFaireDebuterJeu_lier);

        this.afficherEcranDebutNiveau();
    }

    // *************************************************************************************************************
    // PROCÉDURE POUR DÉBUT NIVEAU
    // *************************************************************************************************************

    private afficherEcranDebutNiveau():void {
        this.gotoAndStop('ecran_debutNiveau' + this.numeroNiveau);
        this.laMinuterieEcranDebutNiveau = window.setInterval(this.faireDebuterJeu_lier, 1500);
    }

    private faireDebuterJeu(evenement:createjs.Event):void {
        window.clearInterval(this.laMinuterieEcranDebutNiveau);
        this.visible = false;
        this.leJeu.faireDebuterLeJeu();
    }

    public afficherEcranFinJeu(strRaisonMort:string):void {
        if (this.finActivee == false) {
            this.visible = true;
            this.gotoAndStop('ecran_partiePerdue');

            // Pour gestion du message sur l'écran de niveau échoué
            let strMsgNiveauEchoue:string = "";
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
    }

    private debuterRecommencerLeJeu(evenement:createjs.Event):void {
        this.leJeu.arreterSonSFX('partie_perdue');

        this['btn_reessayer'].removeEventListener('click', this.debuterRecommencerLeJeu_lier);
        this.visible = false;
        this.changerEtatFinActivee();
        this.leJeu.faireDebuterLeJeu();
    }

    public afficherEcranNiveauTermine():void {
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
    }

    private debuterProchainNiveau(evenement:createjs.Event):void {
        this.leJeu.arreterSonSFX('partie_gagnee');
        this.numeroNiveau = this.numeroNiveau + 1;

        this['btn_prochainNiveau'].removeEventListener('click', this.debuterProchainNiveau_lier);
        this.afficherEcranDebutNiveau();

        this.leJeu.changerNiveau(this.numeroNiveau);
        this.changerEtatFinActivee();
    }

    public supprimerEcran():void {
        this.supprimerObjetVisible();
    }
}
