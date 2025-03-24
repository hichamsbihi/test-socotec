import { User } from "./UserTable.types";
const API_URL = import.meta.env.VITE_API_URL;

export const fetchUsersService = async (
  setUsers: (users: User[]) => void,
  loading: boolean,
  setError: (error: string | null) => void
) => {
  setError(null);
  

  try {
    // fetch the api
    const response = await fetch(`${API_URL}`);

   
    if (!response.ok) {
      throw new Error(`Erreur: ${response.status}`);
    }

    // parsing json data 
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