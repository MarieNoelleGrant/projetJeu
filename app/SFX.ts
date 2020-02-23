/**
 * Created by mrouleau on 2017-02-24.
 */

import {Sons} from "./Sons";

export class SFX extends Sons{

    public constructor(strUrlson:string,arrExtAlt:Array<string>, idSon:string , maxNumber:number){
        super(strUrlson,arrExtAlt,idSon, maxNumber, 0);
        //console.log("sonfx");

        // son diminué légèrement pour les effets sonores par programmation
        this.volume = 0.8;
    }

    public demarrerSon():void {
        super.demarrerSon();
    }

    public arreterSon():void {
        super.arreterSon();
    }
}