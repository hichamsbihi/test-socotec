import { useEffect, useState } from "react";
import { User } from "./UserTable.types";
import { fetchUsersService } from "./components/UserTable.service";
import { StyledRow, Table, TableContainer } from "./UserTable.styles";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const newLoading = await fetchUsersService(setUsers, loading, setError);
      setLoading(newLoading);
    };
    fetchData();
  }, []);

  return (
    <TableContainer>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>City</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <tbody>
            {users.map((user) => (
              <StyledRow key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.country}</td>
                <td>{user.city}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </StyledRow>
            ))}
          </tbody>
        )}
      </Table>
    </TableContainer>
  );
};
export default UserTable;
