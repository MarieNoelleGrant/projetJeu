import {Jeu} from "./Jeu";

export class App {
    stage = null;
    leJeu = null;

    public constructor() {
        window.init(this); 	// Initialiser l'animation avec le méthode générée par Animate CC.
    }

    public initialiser(refStage:createjs.Stage) {
        // Initialisation des attributs relatifs à l'animation ------------------------------------------------------------------
        this.stage  =  refStage; 					// Récupérer la références de la scène nouvellement créée
        createjs.Ticker.framerate = 30;
        // ----------------------------------------------------------------------------------------------------------------------

        this.leJeu = new Jeu(this.stage);
    }
}