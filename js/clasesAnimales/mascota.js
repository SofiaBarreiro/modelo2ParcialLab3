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
var general;
(function (general) {
    var Mascota = /** @class */ (function () {
        function Mascota(nombreA) {
            this.nombre = nombreA;
        }
        Mascota.prototype.getNombre = function () {
            return this.nombre;
        };
        Mascota.prototype.setNombre = function (nombreA) {
            this.nombre = nombreA;
        };
        return Mascota;
    }());
    general.Mascota = Mascota;
    var Gato = /** @class */ (function (_super) {
        __extends(Gato, _super);
        function Gato(nombreA, cantVidasA) {
            var _this = _super.call(this, nombreA) || this;
            _this.nombreA = nombreA;
            _this.cantVidasA = cantVidasA;
            _this.cantVidas = cantVidasA;
            return _this;
        }
        Gato.prototype.getVidasGato = function () {
            return this.cantVidas;
        };
        Gato.prototype.setVidasGato = function (cantVidasA) {
            this.cantVidas = cantVidasA;
        };
        return Gato;
    }(Mascota));
    general.Gato = Gato;
    var Pajaro = /** @class */ (function (_super) {
        __extends(Pajaro, _super);
        function Pajaro(nombreA, tipoA) {
            var _this = _super.call(this, nombreA) || this;
            _this.nombreA = nombreA;
            _this.tipoA = tipoA;
            _this.tipo = tipoA;
            return _this;
        }
        Pajaro.prototype.getTipo = function () {
            return this.tipo;
        };
        Pajaro.prototype.setTipo = function (tipoA) {
            this.tipo = tipoA;
        };
        return Pajaro;
    }(Mascota));
    general.Pajaro = Pajaro;
    var eTipo;
    (function (eTipo) {
        eTipo[eTipo["Rapi\u00F1a"] = 0] = "Rapi\u00F1a";
        eTipo[eTipo["Loro"] = 1] = "Loro";
    })(eTipo = general.eTipo || (general.eTipo = {}));
    var Perro = /** @class */ (function (_super) {
        __extends(Perro, _super);
        function Perro(nombreA, razaA) {
            var _this = _super.call(this, nombreA) || this;
            _this.nombreA = nombreA;
            _this.razaA = razaA;
            _this.raza = razaA;
            return _this;
        }
        Perro.prototype.getRaza = function () {
            return this.raza;
        };
        Perro.prototype.setRaza = function (razaA) {
            this.raza = razaA;
        };
        return Perro;
    }(Mascota));
    general.Perro = Perro;
})(general || (general = {}));
