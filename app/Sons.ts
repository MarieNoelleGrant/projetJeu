import Sound = createjs.Sound;
import AbstractSoundInstance = createjs.AbstractSoundInstance;

/**
 * Created by mrouleau on 2017-02-24.
 */
export class Sons {

    protected strURLson:string="";         //chemin vers le son
    protected idSon:string=null;           //identifiant du son
    protected finChargement:boolean=false; //booléen de préchargement terminé
    protected instanceSon:AbstractSoundInstance=null; //instance du son attaché
    protected maxNumber=0;                 //nombre de pistes pour ce son
    protected nbLoops=0;                   //nombre de boucles

    public constructor(strUrlson:string, arrExtAlt:Array<string>, idSon:string, maxNumber:number, loops:number){

        this.strURLson=strUrlson;
        //Identifiant du son
        this.idSon=idSon;
        //Nombre de piste maximum pour ce son...
        this.maxNumber=maxNumber;
        this.nbLoops=loops;
        createjs.Sound.alternateExtensions = arrExtAlt;
        //Précharge le son.
        createjs.Sound.addEventListener("fileload", this.finirChargement.bind(this));
        //Enregistre le son auprès de l'objet Sound
        createjs.Sound.registerSound(this.strURLson, this.idSon, this.maxNumber);
    }

    protected finirChargement():void {
        createjs.Sound.removeEventListener("fileload", this.finirChargement.bind(this));
        this.finChargement=true;
    }

    public demarrerSon():void {
        if(this.finChargement==true) {
            this.instanceSon= createjs.Sound.play(this.idSon, {loop:this.nbLoops});
        }
        else{
            //console.log("Son non chargé, en attente...");
        }
    }

    public set volume(refVolume:number){
        if (this.instanceSon != null){
            this.instanceSon.volume = refVolume;
        }
    }

    public get volume():number{
        if (this.instanceSon != null){
            return this.instanceSon.volume;
        }
    }

    protected

    public arreterSon():void {
        if(this.instanceSon!=null){
            this.instanceSon.stop();
            this.instanceSon=null;
        }
    }
}