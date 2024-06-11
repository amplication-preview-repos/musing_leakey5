import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FlightList } from "./flight/FlightList";
import { FlightCreate } from "./flight/FlightCreate";
import { FlightEdit } from "./flight/FlightEdit";
import { FlightShow } from "./flight/FlightShow";
import { PassengerList } from "./passenger/PassengerList";
import { PassengerCreate } from "./passenger/PassengerCreate";
import { PassengerEdit } from "./passenger/PassengerEdit";
import { PassengerShow } from "./passenger/PassengerShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { StopList } from "./stop/StopList";
import { StopCreate } from "./stop/StopCreate";
import { StopEdit } from "./stop/StopEdit";
import { StopShow } from "./stop/StopShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AirlineDCS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Flight"
          list={FlightList}
          edit={FlightEdit}
          create={FlightCreate}
          show={FlightShow}
        />
        <Resource
          name="Passenger"
          list={PassengerList}
          edit={PassengerEdit}
          create={PassengerCreate}
          show={PassengerShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Stop"
          list={StopList}
          edit={StopEdit}
          create={StopCreate}
          show={StopShow}
        />
      </Admin>
    </div>
  );
};

export default App;
