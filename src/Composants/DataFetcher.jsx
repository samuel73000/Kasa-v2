import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("../Data/data.json") // Utilisation de fetch 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau lors du chargement des données");
        }
        return response.json(); // Transformation de la réponse en JSON
      })
      .then((data) => setData(data)) 
      .catch((error) => console.error(error)); // Gérer les erreurs
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// Hook personnalisé pour utiliser les données
export function useData() {
  return useContext(DataContext);
}
