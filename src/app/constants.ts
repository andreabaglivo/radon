import { CardEnum } from "./enum/card.enum";
import { ICard } from "./interfaces/card.interface";

export const HOME_TITLE: string = 'Radon Friuli Venezia Giulia';

export const TEXT_1: string = 'Radon Friuli Venezia Giulia';


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
    title: 'COS\'È IL RADON?',
    text: TEXT_1,
    type: CardEnum.SQUARE,
    style: CardEnum.LIGHT,
    route: '',
    index: '2',
}
export const CARD_INFO_3: ICard = {
    title: 'COS\'È IL RADON?',
    text: TEXT_1,
    type: CardEnum.SQUARE,
    style: CardEnum.LIGHT,
    route: '',
    index: '3',
}
export const CARD_INFO_4: ICard = {
    title: 'COS\'È IL RADON?',
    text: TEXT_1,
    type: CardEnum.SQUARE,
    style: CardEnum.DARK,
    route: '',
    index: '4',
}
