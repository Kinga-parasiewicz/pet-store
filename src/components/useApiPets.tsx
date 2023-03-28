import { useState, useEffect } from "react";
import axios from "axios";
import SERVER_BASE_URL from "./../config";
import { PetResponse } from "types/type";

export const useApiPets = () => {
  const [petsData, setPetsData] = useState<PetResponse>({
    state: "loading",
    pets: [],
  });

  const getExamplePets = async () => {
    await axios
      .get<PetResponse>(`${SERVER_BASE_URL}/examplePets.json`)
      .then((response) => setPetsData(response.data))
      .catch(() => setPetsData({ state: "error", pets: [] }));
  };

  useEffect(() => {
    getExamplePets();
    setTimeout(getExamplePets, 2000);
  }, []);

  return petsData;
};
