import { useEffect, useState } from "react";
import { User, UserTableProps } from "./UserTable.types";
import { fetchUsersService } from "./components/UserTable.service";
import { StyledRow, Table, TableContainer } from "./UserTable.styles";
import EditUser from "./components/EditUser";

const UserTable: React.FC<UserTableProps> = ({ onEditSuccess }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };
  const refreshData = () => {
    setRefreshTrigger((prev) => prev + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      const newLoading = await fetchUsersService(setUsers, loading, setError);
      setLoading(newLoading);
    };
    fetchData();
  }, [refreshTrigger]);

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
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button>Delete</button>
                </td>
              </StyledRow>
            ))}
          </tbody>
        )}
      </Table>
      {selectedUser && (
        <EditUser
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          user={selectedUser}
          onSuccess={() => {
            setIsEditModalOpen(false);
            refreshData();
            if (onEditSuccess) {
              onEditSuccess();
            }
          }}
        />
      )}
    </TableContainer>
  );
};
export default UserTable;
