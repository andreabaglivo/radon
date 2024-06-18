import { CardEnum } from "./enum/card.enum";
import { ICard } from "./interfaces/card.interface";

export const HOME_TITLE: string = 'Radon Friuli Venezia Giulia';

export const EMPTY_CARD: ICard = {
    title: '',
    type: CardEnum.ROUND,
    route: '',
}

export const CARD_INFO_1: ICard = {
    title: 'COS\'È IL RADON?',
    type: CardEnum.SQUARE,
    style: CardEnum.DARK,
    route: '',
}
export const CARD_INFO_2: ICard = {
    title: 'COS\'È IL RADON?',
    type: CardEnum.SQUARE,
    style: CardEnum.LIGHT,
    route: '',
}
export const CARD_INFO_3: ICard = {
    title: 'COS\'È IL RADON?',
    type: CardEnum.SQUARE,
    style: CardEnum.LIGHT,
    route: '',
}
export const CARD_INFO_4: ICard = {
    title: 'COS\'È IL RADON?',
    type: CardEnum.SQUARE,
    style: CardEnum.DARK,
    route: '',
}
