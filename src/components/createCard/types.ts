export interface ICreateProps{
  onClick():void;
  getAllCards ():void;
  openHeader?: ()=> void
}

export type AttributesCard = 'name' | 'role' | 'sector' | 'phoneNumber' | 'employeeEmail' | "whatsAppNumber" |'website'   