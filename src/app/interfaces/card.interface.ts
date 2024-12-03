import { CardEnum } from "../enum/card.enum";

export interface ICard {
    title: string;
    text: string;
    type: CardEnum;
    style?: CardEnum,
    route?: string;
    index: number;
}