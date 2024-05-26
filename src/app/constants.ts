import { CardEnum } from "./enum/card.enum";
import { ICard } from "./interfaces/card.interface";

export const HOME_TITLE: string = 'AE';

export const EMPTY_CARD: ICard = {
    title: '',
    type: CardEnum.ROUND,
    route: '',
}

export const CARD_INFO_RADON: ICard = {
    title: 'Cos\'è il Radon?',
    type: CardEnum.SQUARE,
    style: 'scura',
    route: '',
}
