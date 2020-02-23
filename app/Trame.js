/**
 * Created by mrouleau on 2017-02-24.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./Sons"], function (require, exports, Sons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Trame = (function (_super) {
        __extends(Trame, _super);
        function Trame(strUrlson, arrExtAlt, idSon, maxNumber, loops) {
            return _super.call(this, strUrlson, arrExtAlt, idSon, maxNumber, loops) || this;
            //console.log("trame");
        }
        Trame.prototype.demarrerSon = function () {
            //Si une trame ne joue pas
            if (this.instanceSon == null) {
                _super.prototype.demarrerSon.call(this);
            }
        };
        Trame.prototype.arreterSon = function () {
            if (this.instanceSon != null) {
                _super.prototype.arreterSon.call(this);
            }
        };
        return Trame;
    }(Sons_1.Sons));
    exports.Trame = Trame;
});
//# sourceMappingURL=Trame.js.map