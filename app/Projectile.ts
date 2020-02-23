import {ObjetMobile} from "./ObjetMobile";
import {Jeu} from "./Jeu";
import {ManekiNeko} from "./ManekiNeko";

// ***************************************************************************************************************
// CONSTANTES
// ***************************************************************************************************************
const redimensionMax:number = 1.5;

export class Projectile extends ObjetMobile {
    private leJeu:Jeu = null;
    private laMinuterieProjectile:number = null;

    public constructor(refStage:createjs.Stage, unX:number, unY:number, uneVitesse:number, unSens:number, refNumNiveau:number, refJeu:Jeu) {
        super(refStage, unX, unY*-1, uneVitesse, unSens, refNumNiveau);
        this.leJeu = refJeu;
        this.laMinuterieProjectile = window.setInterval(this.gererCollision.bind(this), 1000/30);
        this.redimensionner();
    }

    public dessiner():void {
        window.lib.mcprojectileClipProjectile.call(this);
        this.frameBounds = window.lib.mcprojectileClipProjectile.prototype.frameBounds;
    }

    public redimensionner():void {
        let facteurDeRedimensionnement = redimensionMax * (this.y/window.lib.properties.height);
        if (facteurDeRedimensionnement != 0) {
            this.scaleX = facteurDeRedimensionnement;
            this.scaleY = facteurDeRedimensionnement;
        }
    }

    // *************************************************************************************************************
    // GESTION CHANGEMENT VISUEL SELON LE NIVEAU
    // *************************************************************************************************************

    public changerEtatVisuelSelonNiveau():void {
        // Vide puisque c'est la seule méthode qui n'est pas solicitée par Projectile.
        // Présente car Projectile doit hériter de toutes les autres attributs et méthodes de ObjetMobile!
    }

    // *************************************************************************************************************
    // GESTION FIN SCÈNE + COLLISION AVEC MANEKINEKO
    // *************************************************************************************************************

    public gererFinScene():void {
        if(this.x>900) {
            this.leJeu.detruireProjectile(this);
        }
    }

    public gererCollision():void {
        let refTManekiNeko:Array<ManekiNeko> = this.leJeu.retournerTManekiNeko();

        for (let intCpt:number=0; intCpt < refTManekiNeko.length; intCpt++) {
            let manekiNekoTouche:boolean = refTManekiNeko[intCpt].retournerManekiNekoTouche();

            if (this.verifierProximiteManekiNeko(refTManekiNeko[intCpt])==true && manekiNekoTouche==false) {
                let collisionGrossiere = this.retournerCollisionProjectile(refTManekiNeko[intCpt]);
                if (collisionGrossiere==true) {
                    this.leJeu.detruireProjectile(this);
                    // Début d'un état d'invincibilité pour le manekiNeko tombé
                    refTManekiNeko[intCpt].changerEtatToucheManekiNeko();
                    // Déclanche l'animation de fin de vie du ManekiNeko
                    refTManekiNeko[intCpt].debuterMortManekiNeko();
                }
            }
        }
    }

    private verifierProximiteManekiNeko(refManekiNeko):boolean {
        let YManekiNeko = refManekiNeko.retournerY();
        let ManekiNekoProche = false;

        if (Math.abs(YManekiNeko - this.y)<20) {
            ManekiNekoProche = true;
        }

        return ManekiNekoProche;
    }

    private retournerCollisionProjectile(refManekiNeko):boolean {
        let monRect = this.getTransformedBounds();
        let rectManekiNeko = refManekiNeko.getTransformedBounds();
        let enCollision = monRect.intersects(rectManekiNeko);

        return enCollision;
    }

    // *************************************************************************************************************
    // SUPPRESSION
    // *************************************************************************************************************

    public supprimerProjectile():void {
        window.clearInterval(this.laMinuterieProjectile);
        this.laMinuterieProjectile = null;

        this.supprimerObjetMobile();
    }
}