import { CardEnum } from "../enum/card.enum";

export interface ICard {
    title: string;
    type: CardEnum;
    style?: CardEnum,
    route?: string;
}