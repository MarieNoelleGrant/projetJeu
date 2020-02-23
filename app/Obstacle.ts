import {Jeu} from "./Jeu";
import {Koi} from "./Koi";
import {ObjetCollision} from "./ObjetCollision";

export class Obstacle extends ObjetCollision {
    protected leJeu:Jeu = null;

    public constructor(refScene:createjs.Stage, unX:number, unY:number, uneVitesse:number, unSens:number, refJeu:Jeu, refNumeroNiveau:number, refKoi:Koi) {
        super(refScene, unX, unY, uneVitesse, unSens, refKoi, refNumeroNiveau);
        this.leJeu = refJeu;

        // Pour ajuster la position de départ selon l'obstacle pigé, ainsi que sa grandeur une fois redimensioné
        let rectObstacle:createjs.Rectangle = this.getTransformedBounds();
        this.x = 800 + rectObstacle.width;
    }

    public dessiner():void {
        window.lib.mcobstaclesClipObstacle.call(this);
        this.frameBounds = window.lib.mcobstaclesClipObstacle.prototype.frameBounds;
    }

    // *************************************************************************************************************
    // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
    // *************************************************************************************************************
    public changerEtatVisuelSelonNiveau():void {
        if (this.leNumNiveau==1) {
            let obstacleHasard:number = Math.floor(Math.random()*2);
            this.gotoAndStop(obstacleHasard);
        }

        if (this.leNumNiveau==2) {
            let obstacleHasard:number = Math.floor(Math.random()*2)+2;
            this.gotoAndStop(obstacleHasard);
        }
    }


    // *************************************************************************************************************
    // GESTION COLLISION AVEC AVATAR +
    // *************************************************************************************************************

    public gererCollisionAvecAvatar():void {
        this.avatarKoi.gererProgressionNiveau();
    }


    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************

    public gererFinScene():void {
        if (this.x < 0) {
            this.leJeu.supprimerObstacle(this);
        }
    }

    public supprimerObstacle():void {
        this.removeEventListener("tick", this.gererFinScene_lier);

        this.supprimerObjetCollision();
    }
}