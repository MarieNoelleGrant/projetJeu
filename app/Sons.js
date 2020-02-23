define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by mrouleau on 2017-02-24.
     */
    var Sons = (function () {
        function Sons(strUrlson, arrExtAlt, idSon, maxNumber, loops) {
            this.strURLson = ""; //chemin vers le son
            this.idSon = null; //identifiant du son
            this.finChargement = false; //booléen de préchargement terminé
            this.instanceSon = null; //instance du son attaché
            this.maxNumber = 0; //nombre de pistes pour ce son
            this.nbLoops = 0; //nombre de boucles
            this.strURLson = strUrlson;
            //Identifiant du son
            this.idSon = idSon;
            //Nombre de piste maximum pour ce son...
            this.maxNumber = maxNumber;
            this.nbLoops = loops;
            createjs.Sound.alternateExtensions = arrExtAlt;
            //Précharge le son.
            createjs.Sound.addEventListener("fileload", this.finirChargement.bind(this));
            //Enregistre le son auprès de l'objet Sound
            createjs.Sound.registerSound(this.strURLson, this.idSon, this.maxNumber);
        }
        Sons.prototype.finirChargement = function () {
            createjs.Sound.removeEventListener("fileload", this.finirChargement.bind(this));
            this.finChargement = true;
        };
        Sons.prototype.demarrerSon = function () {
            if (this.finChargement == true) {
                this.instanceSon = createjs.Sound.play(this.idSon, { loop: this.nbLoops });
            }
            else {
                //console.log("Son non chargé, en attente...");
            }
        };
        Object.defineProperty(Sons.prototype, "volume", {
            get: function () {
                if (this.instanceSon != null) {
                    return this.instanceSon.volume;
                }
            },
            set: function (refVolume) {
                if (this.instanceSon != null) {
                    this.instanceSon.volume = refVolume;
                }
            },
            enumerable: true,
            configurable: true
        });
        Sons.prototype.arreterSon = function () {
            if (this.instanceSon != null) {
                this.instanceSon.stop();
                this.instanceSon = null;
            }
        };
        return Sons;
    }());
    exports.Sons = Sons;
});
//# sourceMappingURL=Sons.js.map