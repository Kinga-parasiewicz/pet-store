import { useState } from "react";
import { PetResponse } from "types/type";


const PetsTable = ({ pets, state }: PetResponse) => {
  const [removeItem, setRemoveItem] = useState(false);
  const removePet = (i:number) => {
    setRemoveItem(!removeItem);
    pets?.findIndex((pet, i) => pet.id !== i)
    pets?.splice(i,1)
  }

  return (
    <div>
      {state === "loading" ? (
        <p className="text-center font-bold">
          Poczekaj chwilkę, ładuję teraz dane 😄
        </p>
      ) : state === "error" ? (
        <p className="text-center font-bold">
          ? Ojojoj...😟 wygląda na to, że wystapił błąd, chyba masz problem z
          internetem, jeśli nie - spróbuj później
        </p>
      ) : (
        <>
          <h2 className="font-bold text-blue-700">Pets</h2>
          <table className="table-fixed text-center">
            <thead>
              <tr className="text-white bg-blue-700 h-8">
                <th>Photo</th>
                <th>Pet Name</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets &&
                pets.map((pet, i) => (
                  <tr key={pet.name}>
                    <td width={200}>
                      <img
                        alt={pet.name}
                        src={pet.photoUrls}
                        className="pr-4"
                      />
                    </td>
                    <td>{pet.name}</td>
                    <td>{pet.category}</td>
                    <td>{pet.status}</td>
                    <td width={300}>
                      <button onClick={()=>removePet(i)}>delete </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default PetsTable;


