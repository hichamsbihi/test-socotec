import { User } from "../UserTable.types";


export const fetchUsersService = async (
  setUsers: (users: User[]) => void,
  loading: boolean,
  setError: (error: string | null) => void
) => {
  setError(null);

  try {
    // Faire une vraie requête API au lieu d'utiliser des données fictives
    const response = await fetch("http://localhost:5000/api/users");

    // Vérifier si la réponse est correcte
    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }

    // Récupérer et parser les données JSON
    const data = await response.json();
    console.log(data);

    setUsers(data.data);
    loading = false;
  } catch (err) {
    setError("cannot find users");
    loading = true;
    console.error(err);
  }
  return loading;
};