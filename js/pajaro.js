var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(tipoA, nombreA) {
        var _this = _super.call(this, nombreA) || this;
        _this.tipoA = tipoA;
        _this.nombreA = nombreA;
        _this.tipo = tipoA;
        return _this;
    }
    return Pajaro;
}(Mascota));
var eTipo;
(function (eTipo) {
    eTipo[eTipo["Rapi\u00F1a"] = 0] = "Rapi\u00F1a";
    eTipo[eTipo["Loro"] = 1] = "Loro";
})(eTipo || (eTipo = {}));
