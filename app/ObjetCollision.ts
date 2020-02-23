import {ObjetMobile} from "./ObjetMobile";
import {Koi} from "./Koi";

// ***************************************************************************************************************
// CONSTANTES
// ***************************************************************************************************************
const redimensionMax:number = 1.5;

export abstract class ObjetCollision extends ObjetMobile {

    protected refMinuterieCollisionKoi:number = null;
    protected avatarKoi:Koi = null;

    public constructor(refStage:createjs.Stage, unX:number, unY:number, uneVitesse:number, unSens:number, refKoi:Koi, refNumNiveau:number) {
        super(refStage, unX, unY, uneVitesse, unSens, refNumNiveau);

        //this.changerEtatVisuelSelonNiveau();
        this.avatarKoi = refKoi;
        this.redimensionner();

        this.refMinuterieCollisionKoi = window.setInterval(this.verifierCollisionKoi.bind(this), 1000/30);
    }

    protected redimensionner():void {
        let facteurDeRedimensionnement = redimensionMax * (this.y/window.lib.properties.height);
        if (facteurDeRedimensionnement != 0) {
            this.scaleX = facteurDeRedimensionnement;
            this.scaleY = facteurDeRedimensionnement;
        }
    }

    // *************************************************************************************************************
    // VÉRIFICATION COLLISION
    // *************************************************************************************************************

    protected verifierCollisionKoi(evenement:createjs.Event):void {
        let avatarProche = this.verifierProximiteAvatar();
        let avatarTouche = this.avatarKoi.retournerEstTouche();

        // 1. Vérification si avatar à proximité et s'il est déjà dans son état 'touché' (empêche vérification inutile)
        if (avatarProche==true && avatarTouche==false) {
            // 2.. Vérification de collision des rectangles
            let jeToucheKoi:boolean = this.avatarKoi.enCollisionGrossiereAvec(this);

            if (jeToucheKoi==true && avatarTouche==false) {
                // 3. Vérification de collision des points
                let indexPointTouche: number = this.avatarKoi.enCollisionFineAvec(this);
                if (indexPointTouche != -1) {
                    this.avatarKoi.gererAvatarTouche();

                    // 4. Gestion de l'impact de la collision revient aux enfants (Obstacle ou ManekiNeko).
                    this.gererCollisionAvecAvatar();
                }
            }
        }
    }

    protected verifierProximiteAvatar():boolean {
        let YAvatar = this.avatarKoi.retournerY();
        let avatarProche = false;

        if (Math.abs(YAvatar - this.y)<20) {
            avatarProche = true;
        }

        return avatarProche;
    }

    // *************************************************************************************************************
    // GESTION COLLISION AVEC AVATAR (abstrait, concrétisé dans Obstacle et ManekiNeko)
    // *************************************************************************************************************

    protected abstract gererCollisionAvecAvatar():void;


    // *************************************************************************************************************
    // FIN SCÈNE + SUPPRESSION
    // *************************************************************************************************************

    protected abstract gererFinScene():void;

    public supprimerObjetCollision():void {
        window.clearInterval(this.refMinuterieCollisionKoi);
        this.refMinuterieCollisionKoi = null;

        this.supprimerObjetMobile();
    }
}

