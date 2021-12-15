import { ICard } from "../../pages/Dashboard/types";

export interface IDataProps {
  info: ICard;
  getAllCards: () => void;
  onClick: () => void;
}

export type AttributesCard = 'name' | 'role' | 'sector' | 'phoneNumber' | 'employeeEmail' | "whatsAppNumber" |'website' | "url" 