import {ObjetVisible} from "./ObjetVisible";

export abstract class ObjetMobile extends ObjetVisible {
    protected vitesse:number = null;
    protected sens:number = null;
    protected bouger_lier:any = null;
    protected leNumNiveau:number = null;
    protected laMinuterieFinScene:number = null;
    protected gererFinScene_lier:any = null;
    protected pixelsParSeconde:number = 30;

    public constructor(refStage:createjs.Stage, unX:number, unY:number, uneVitesse:number, unSens:number, refNumNiveau:number) {
        super(refStage, unX, unY);
        this.vitesse = uneVitesse;
        this.sens = unSens;
        this.leNumNiveau = refNumNiveau;
        this.bouger_lier = this.bouger.bind(this);

        this.addEventListener("tick", this.bouger_lier);
        this.laMinuterieFinScene = window.setInterval(this.gererFinScene.bind(this), 1000/30);

        this.changerEtatVisuelSelonNiveau();
    }

    // *************************************************************************************************************
    // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
    // *************************************************************************************************************

    protected abstract changerEtatVisuelSelonNiveau():void;

    // *************************************************************************************************************
    // DÉPLACEMENT
    // *************************************************************************************************************

    protected bouger(evenement:createjs.Event):void {
        this.x = this.x + ((evenement.delta / 1000) * this.pixelsParSeconde) * this.vitesse * this.sens;
        //this.x = this.x + this.vitesse * this.sens;
        this.gererFinScene();
    }


    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************

    protected abstract gererFinScene():void;

    protected supprimerObjetMobile():void {
        this.removeEventListener("tick", this.bouger_lier);
        window.clearInterval(this.laMinuterieFinScene);
        this.laMinuterieFinScene = null;

        this.supprimerObjetVisible();
    }

}