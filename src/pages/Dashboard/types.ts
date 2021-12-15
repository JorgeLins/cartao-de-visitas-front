export interface ICard {
  id: string;
  name: string;
  role: string;
  sector: string;
  phoneNumber: string;
  employeeEmail: string;
  website: string;
  whatsAppNumber: string;
  createdBy: string;
  url: string;
}
export interface IProfileCArd{
  id: string;
  name: string;
  role: string;
  sector: string;
  phoneNumber: string;
  employeeEmail: string;
  website: string;
  whatsAppNumber: string;
  createdBy: string;
  url: string;
}
export interface onCLick {
  onClick: () => void;
}
