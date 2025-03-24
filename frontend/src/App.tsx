import UserTable from "./components/UserTable";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AppContainer, Tab, TabContainer, Title } from "./App.style";
import { useState } from "react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"list" | "add">("list");

  return (
    <ThemeProvider theme={theme}>
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

        <UserTable />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
