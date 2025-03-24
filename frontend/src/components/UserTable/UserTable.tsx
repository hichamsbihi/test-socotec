import { useEffect, useState } from "react";
import { User, UserTableProps } from "./UserTable.types";
import { fetchUsersService } from "./UserTable.service";
import { StyledRow, Table, TableContainer } from "./UserTable.styles";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";

const UserTable: React.FC<UserTableProps> = ({
  onEditSuccess,
  onDeleteSuccess,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState<number>(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  // handle edit modal
  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };
  // handle delete modal
  const handleDelete = (user: User) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };
  // trigger var refresshtrigger to refress the list page
  const refreshData = () => {
    setRefreshTrigger((prev) => prev + 1);
  };
  // call the list user service
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
                  <button onClick={() => handleDelete(user)}>Delete</button>
                </td>
              </StyledRow>
            ))}
          </tbody>
        )}
      </Table>
      {selectedUser && (
        <>
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
          <DeleteUser
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            user={selectedUser}
            onSuccess={() => {
              setIsDeleteModalOpen(false);
              refreshData();
              if (onDeleteSuccess) onDeleteSuccess();
            }}
          />
        </>
      )}
    </TableContainer>
  );
};
export default UserTable;
