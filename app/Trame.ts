/**
 * Created by mrouleau on 2017-02-24.
 */

import {Sons} from "./Sons";

export class Trame extends Sons{

    public constructor(strUrlson:string,arrExtAlt:Array<string>, idSon:string, maxNumber:number, loops:number){
        super(strUrlson,arrExtAlt,idSon, maxNumber, loops);
        //console.log("trame");
    }

    public demarrerSon():void {
        //Si une trame ne joue pas
        if(this.instanceSon==null){
            super.demarrerSon();
        }
    }

    public arreterSon():void {
        if(this.instanceSon!=null){
            super.arreterSon();
        }
    }
}