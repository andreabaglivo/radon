import { CardEnum } from "./enum/card.enum";
import { ICard } from "./interfaces/card.interface";

export const HOME_TITLE: string = 'Radon Friuli Venezia Giulia';

export const TEXT_1: string = 'Il radon è un gas radioattivo, inodore e incolore generato nelle profondità del terreno, da cui può risalire penetrando negli edifici. È molto pericoloso perché, se respirato in elevata quantità, può indurre tumori polmonari: infatti in Italia è la seconda causa di tumore ai polmoni dopo il fumo. I terreni carsici presentano un alto rischio di esalazione radon, motivo per cui è importante assicurarsi la salubrità di locali seminterrati e al pian terreno, considerati a rischio maggiore. Una soluzione di messa in sicurezza al radon è sempre realizzabile, nonostanti si tratti di problemi complessi che richiedono un profondo studio e un\'attenta progettazione.';
export const TEXT_2: string = 'Il primo passo consiste nel rivolgersi ad un esperto per assicurasi, attraverso diversi metodi di misurazione, se la concentrazione di radon si attesti al di sopra del livello di riferimento indicato dalla normativa italiana (300 Bq/m3). Le misurazioni vanno condotte con molta attenzione perchè sono sensibili ad un\'ampia gamma di fattori, incluse le condizioni atmosferiche. Qualora si attesti il superamento e si manifesti la volontà di intervenire, si opera attraverso l\'individuazione di una serie di interventi graduali con possibili ottimizzazioni.';
export const TEXT_3: string = 'Il decreto legislativo 101/2020 recepisce la direttiva 59/2013/Euratom, che definisce le norme di base in materia di protezione delle radiazioni ionizzanti. Questa connessione ha chiarito e rafforzato la connessione con il decreto legislativo 81/08: la normativa di salute e sicurezza sul lavoro risulta ripartita in protezione della popolazione, protezione dei lavoratori e protezione del paziente. Il decreto legislativo 101/2020, recepita la direttiva, è entrato in vigore il 27 agosto 2020 e per quanto concerne la protezione da gas radon ha introdotto diverse novità contenute nel Titolo IV. La centralità risiede nell’ambiente in analisi, in quanto la regolamentazione della protezione si applica ad ambienti di vita (protezione della popolazione) e ad ambienti di lavoro (protezione dei lavoratori). In entrambi i casi si tratta di situazioni di esposizione esistente, cioè di contesti dove una situazione di esposizione è già presente quando deve essere adottata una decisione sul controllo della stessa e per la quale non è necessaria o non è più necessaria l’adozione di misure urgenti. Il tema centrale su cui verte la normativa è il principio di ottimizzazione, secondo cui la probabilità di incorrere in esposizioni, il numero di persone esposte e le dosi individuali, dovrebbero essere tenute tanto basse quanto ragionevolmente ottenibile, in considerazione di fattori economici e sociali. Pertanto il livello di protezione dovrebbe essere il migliore ottenibile nelle circostanze considerate, massimizzando i benefici e minimizzando i danni. Al fine di quantificare il rischio, è stato introdotto il concetto di livello di riferimento, cioè la concentrazione di attività al di sopra della quale non è appropriato consentire esposizioni, anche se non è un limite che non può essere superato. L’ottimizzazione della protezione interessa le situazioni di esposizione esistenti, in via prioritaria le esposizioni al di sopra del livello di riferimento, ma continua ad essere messa in atto anche al di sotto del livello di riferimento.';
export const TEXT_4: string = 'Ing. Andrea Baglivo';

export const EMPTY_CARD: ICard = {
    title: '',
    text: '',
    type: CardEnum.ROUND,
    route: '',
    index: 0,
}

export const CARD_INFO_1: ICard = {
    title: 'COS\'È IL RADON?',
    text: TEXT_1,
    type: CardEnum.SQUARE,
    style: CardEnum.DARK,
    route: '',
    index: 1,
}
export const CARD_INFO_2: ICard = {
    title: 'INTERVENTI',
    text: TEXT_2,
    type: CardEnum.SQUARE,
    style: CardEnum.LIGHT,
    route: '',
    index: 2,
}
export const CARD_INFO_3: ICard = {
    title: 'NORMATIVA',
    text: TEXT_3,
    type: CardEnum.SQUARE,
    style: CardEnum.LIGHT,
    route: '',
    index: 3,
}
export const CARD_INFO_4: ICard = {
    title: 'CONTATTI',
    text: TEXT_4,
    type: CardEnum.SQUARE,
    style: CardEnum.DARK,
    route: '',
    index: 4,
}
