import { Dispatch, FormEvent } from "react";

export interface Pet {
   id:number;
   name:string;
   photoUrls?:string;
   category: string;
   status: Status;
}


export type Status = " "| "available" |"pending" | "sold"


export type PetResponse = {
  state: string,
  pets: Pet[] | null;
}

export type AppProps = {
  title?: string;
  buttonName?: string;
  confirmButton?: string;
  handleSubmit?:(e: FormEvent<HTMLFormElement>) => void
  setBody?:Dispatch<React.SetStateAction<Pet|undefined>>;
  body?:Pet;
}