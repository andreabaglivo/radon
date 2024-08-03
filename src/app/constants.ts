import { CardEnum } from "./enum/card.enum";
import { ICard } from "./interfaces/card.interface";

export const HOME_TITLE: string = 'Radon Friuli Venezia Giulia';

export const TEXT_1: string = 'Il radon è un gas radioattivo, inodore e incolore generato nelle profondità del terreno, da cui può risalire penetrando negli edifici. È molto pericoloso perché, se respirato in elevata quantità, può indurre tumori polmonari: infatti in Italia è la seconda causa di tumore ai polmoni dopo il fumo. I terreni carsici presentano un alto rischio di esalazione radon, motivo per cui è importante assicurarsi la salubrità di locali seminterrati e al pian terreno, considerati a rischio maggiore. Una soluzione di messa in sicurezza al radon è sempre realizzabile, nonostanti si tratti di problemi complessi che richiedono un profondo studio e un\'attenta progettazione.';
export const TEXT_2: string = 'Il primo passo consiste nel rivolgersi ad un esperto per assicurasi, attraverso diversi metodi di misurazione, se la concentrazione di radon si attesti al di sopra del livello di riferimento indicato dalla normativa italiana (300 Bq/m3). Le misurazioni vanno condotte con molta attenzione perchè sono sensibili ad un\'ampia gamma di fattori, incluse le condizioni atmosferiche. Qualora si attesti il superamento e si manifesti la volontà di intervenire, si opera attraverso l\'individuazione di una serie di interventi di graduale invasività, o per rimuoverlo con l\'implementazione di impianti di ventilazione, o per impedirne l\'ingresso attraverso la degassazione del terreno. Ciascuna soluzione è specifica per la singola casistica.';
export const TEXT_3: string = 'La normativa non pre';
export const TEXT_4: string = '';

export const EMPTY_CARD: ICard = {
    title: '',
    text: '',
    type: CardEnum.ROUND,
    route: '',
    index: '0',
}

export const CARD_INFO_1: ICard = {
    title: 'COS\'È IL RADON?',
    text: TEXT_1,
    type: CardEnum.SQUARE,
    style: CardEnum.DARK,
    route: '',
    index: '1',
}
export const CARD_INFO_2: ICard = {
    title: 'COME INTERVENIRE?',
    text: TEXT_2,
    type: CardEnum.SQUARE,
    style: CardEnum.LIGHT,
    route: '',
    index: '2',
}
export const CARD_INFO_3: ICard = {
    title: 'NORMATIVA',
    text: TEXT_3,
    type: CardEnum.SQUARE,
    style: CardEnum.LIGHT,
    route: '',
    index: '3',
}
export const CARD_INFO_4: ICard = {
    title: 'CONTATTI',
    text: TEXT_4,
    type: CardEnum.SQUARE,
    style: CardEnum.DARK,
    route: '',
    index: '4',
}
