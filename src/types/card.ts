type Card = {
  id: number;
  tipo: string;
  opciones?: string[];
  pregunta: string;
  respuesta: string;
};

export type RedCard = Card & {
  tipo: "opciones" | "si o no" | "responde";
};
export type YellowCard = Card & {
  tipo: "donde dice" | "quien lo escribio" | "dime tres";
};
export type GreenCard = Card & {
  tipo: "enseñar con ejemplos" | "informalmente" | "vence objeciones";
};

export type BlueCard = Card & {
  tipo: "actualo" | "deletrea al reves" | "presentate";
};

export type AnyCard = RedCard | YellowCard | GreenCard | BlueCard;
