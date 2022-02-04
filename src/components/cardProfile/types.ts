export interface IcardProfileProps {
  key: string;
  id: string;
  name: string;
  instituition: string;
  url: string;
  role:string;
  getAllCards():void;
  onClick(): void;
}
export interface IDeleteProps {
  onClick(): void
  DeleteCard(): void;
}