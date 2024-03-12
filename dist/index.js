"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const countriesController_1 = require("./controllers/countriesController");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/countries/paises', countriesController_1.getTodosLosPaises);
app.get('/api/countries/continentes/:continenteSolicitado', countriesController_1.getPaisesDeUnContinente);
app.get('/api/countries/informacion/pais/:paisSolicitado', countriesController_1.getInformacionPais);
app.listen(port, () => {
    console.log('Servidor en ejecución en puerto ' + port);
});
//# sourceMappingURL=index.js.map