import { ICard } from './interfaces/card.interface';
import { ISheet } from './interfaces/sheet.interface';

//SHEET
export const GENERAL_SHEET_MOK: ISheet = {
  title: 'Specifiche generali',
  fields: [
    {
      key: 'Proprietà',
      value: 'Via Orazio 4, Trieste, 12345',
    },
    {
      key: 'Amministratore',
      value: 'Dottor Eugenio Friz',
    },
    {
      key: 'Anno costruzione',
      value: '1920',
    },
    {
      key: 'Classe energetica',
      value: 'G',
    },
    {
      key: 'Numero lotti',
      value: '16',
    },
  ],
};

export const ELECTRIC_SHEET_MOK: ISheet = {
  title: 'Conduttore',
  fields: [
    {
      key: 'Sede',
      value: 'Via Orazio 4, Trieste, 12345',
    },
    {
      key: 'Persona di riferimento',
      value: 'Dottor Eugenio Friz',
    },
    {
      key: 'Contatto telefonico',
      value: '+39 333 333 3333',
    },
    {
      key: 'email',
      value: 'eugenio.friz@gmail.com',
    },
    {
      key: 'Inizio contratto',
      value: '25/5/2000',
    },
    {
      key: 'Numero emergenza',
      value: '800 800 800',
    },
    {
      key: 'Orari',
      value: '8-19, lun-ven',
    },
  ],
};

//CARD

export const ELECTRIC_CARD_MOK: ICard = {
  title: 'Elettrico',
  type: 'electric',
  route: 'electric',
};

export const STRUCTURE_CARD_MOK: ICard = {
  title: 'Strutture',
  type: 'structure',
  route: 'structure',
};

export const PHOTOVOLTAIC_CARD_MOK: ICard = {
  title: 'Fotovoltaico',
  type: 'photovoltaic',
  route: 'photovoltaic',
};

export const HEATING_CARD_MOK: ICard = {
  title: 'Riscaldamento',
  type: 'heating',
  route: 'heating',

};

export const GARDEN_CARD_MOK: ICard = {
  title: 'Giardino',
  type: 'garden',
  route: 'garden',

};

export const HYDRAULIC_CARD_MOK: ICard = {
  title: 'Idraulico',
  type: 'hydraulic',
  route: 'hydraulic',

};

export const EXPENSE_CARD_MOK: ICard = {
  title: 'Spese',
  type: 'expense',
  route: 'expense',

};

export const INSURANCE_CARD_MOK: ICard = {
  title: 'Assicurazione',
  type: 'insurance',
  route: 'insurance',

};

export const CONTRACTS_CARD_MOK: ICard = {
  title: 'Contratti',
  type: 'contracts',
  route: 'photovoltaic',
};


