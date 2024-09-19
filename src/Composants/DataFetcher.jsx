import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("../Data/data.json")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error)); // Gérer les erreurs
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}


// Hook personnalisé pour utiliser les données
export function useData() {
  return useContext(DataContext);
}
