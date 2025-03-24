import UserTable from "./components/UserTable";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AppContainer, Tab, TabContainer, Title } from "./App.style";
import { useState } from "react";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"list" | "add">("list");

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <AppContainer>
        <Title>
          <h1>User App</h1>
        </Title>

        <TabContainer>
          <Tab
            active={activeTab === "list"}
            onClick={() => setActiveTab("list")}
          >
            User List
          </Tab>
          <Tab active={activeTab === "add"} onClick={() => setActiveTab("add")}>
            Add User
          </Tab>
        </TabContainer>
        {activeTab === "add" && (
          <AddUserForm
            onSuccess={() => {
              toast.success("user added successfully", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            }}
          />
        )}

        {activeTab === "list" && (
          <UserTable
            onEditSuccess={() => {
              toast.success("user edited successfully", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            }}
            onDeleteSuccess={() => {
              toast.success("user deleted successfully", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            }}
          />
        )}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
