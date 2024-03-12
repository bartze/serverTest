"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInformacionPais = exports.getPaisesDeUnContinente = exports.getTodosLosPaises = void 0;
const axios_1 = __importDefault(require("axios"));
const getTodosLosPaises = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pais = yield axios_1.default.get('https://restcountries.com/v3.1/all');
        res.status(200).json(pais.data);
    }
    catch (error) {
        return error;
    }
});
exports.getTodosLosPaises = getTodosLosPaises;
const getPaisesDeUnContinente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { continenteSolicitado } = req.params;
    try {
        const continente = yield axios_1.default.get(`https://restcountries.com/v3.1/region/${continenteSolicitado}`);
        res.status(200).json(continente.data);
    }
    catch (error) {
        return error;
    }
});
exports.getPaisesDeUnContinente = getPaisesDeUnContinente;
const getInformacionPais = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { paisSolicitado } = req.params;
    try {
        const paisInfo = yield axios_1.default.get(`https://restcountries.com/v3.1/name/${paisSolicitado}`);
        res.status(200).json(paisInfo.data);
    }
    catch (error) {
        return error;
    }
});
exports.getInformacionPais = getInformacionPais;
//# sourceMappingURL=countriesController.js.map