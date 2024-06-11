import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FLIGHT_TITLE_FIELD } from "./FlightTitle";

export const FlightShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="arrivalTime" source="arrivalTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="departureTime" source="departureTime" />
        <TextField label="destination" source="destination" />
        <TextField label="flightNumber" source="flightNumber" />
        <TextField label="ID" source="id" />
        <TextField label="origin" source="origin" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Passenger"
          target="flightId"
          label="Passengers"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="firstName" source="firstName" />
            <ReferenceField
              label="Flight"
              source="flight.id"
              reference="Flight"
            >
              <TextField source={FLIGHT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Stop" target="flightId" label="Stops">
          <Datagrid rowClick="show">
            <TextField label="airport" source="airport" />
            <TextField label="arrivalTime" source="arrivalTime" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="departureTime" source="departureTime" />
            <ReferenceField
              label="Flight"
              source="flight.id"
              reference="Flight"
            >
              <TextField source={FLIGHT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
