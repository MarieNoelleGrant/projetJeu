export abstract class ObjetVisible extends createjs.MovieClip {
    protected leStage:createjs.Stage = null;

    public constructor(refStage:createjs.Stage, unX:number, unY:number) {
        super();
        this.leStage = refStage;
        this.dessiner();
        // Initialisation à zéro pour la tête de lecture du clip
        this.gotoAndStop(0);
        refStage.addChild(this);

        this.x = unX;
        this.y = unY;
    }

    protected retournerMonClip():createjs.MovieClip {
        return this;
    }

    protected supprimerObjetVisible():void {
        this.leStage.removeChild(this);
    }

    protected abstract dessiner():void;
}