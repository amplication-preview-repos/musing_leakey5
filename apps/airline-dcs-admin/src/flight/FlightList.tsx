import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FlightList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Flights"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="arrivalTime" source="arrivalTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="departureTime" source="departureTime" />
        <TextField label="destination" source="destination" />
        <TextField label="flightNumber" source="flightNumber" />
        <TextField label="ID" source="id" />
        <TextField label="origin" source="origin" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
