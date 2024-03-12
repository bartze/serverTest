import axios from 'axios';
import { Request, Response } from 'express';
import { IPais } from '../interfaces/countries.interface';

// Urls para obtener todos los países, países de un continente e información de un país concreto
// Todos los países: https://restcountries.com/v3.1/all
// Petición: await axios.get<IPais[]>('https://restcountries.com/v3.1/all');

// Países de un continente: https://restcountries.com/v3.1/region/europe
// Petición: await axios.get<IPais[]>( 'https://restcountries.com/v3.1/region/europe'); (sustituir europe por el argumento(ver chiste de categoria))

// Información de un país concreto: https://restcountries.com/v3.1/name/spain
// Petición: await axios.get<IPais[]>( 'https://restcountries.com/v3.1/name/spain'); (sustituir spain por el argumento(ver chiste de categoria))

export const getTodosLosPaises = async (req: Request, res: Response) => {
  try {
    const pais = await axios.get<IPais[]>('https://restcountries.com/v3.1/all');
    res.status(200).json(pais.data);
  } catch (error: unknown) {
    return error;
  }
};

export const getPaisesDeUnContinente = async (req: Request, res: Response) => {
    const { continenteSolicitado } = req.params;
    try {
    const continente = await axios.get<IPais[]>(`https://restcountries.com/v3.1/region/${continenteSolicitado}`);
    res.status(200).json(continente.data);
  } catch (error) {
    return error;
  }
};

export const getInformacionPais = async (req: Request, res: Response) => {
  const { paisSolicitado } = req.params;
  try {
    const paisInfo = await axios.get<IPais[]>(`https://restcountries.com/v3.1/name/${paisSolicitado}`);
    res.status(200).json(paisInfo.data);
  } catch (error) {
    return error;
  }
};