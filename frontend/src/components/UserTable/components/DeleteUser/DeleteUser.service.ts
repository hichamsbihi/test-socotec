const API_URL = import.meta.env.VITE_API_URL;
export const deleteUserService = async (userId: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `${API_URL}/${userId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      return true;
    } else {
      console.error("Failed to delete user");
      return false;
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    return false;
  }
};

export default { deleteUserService };