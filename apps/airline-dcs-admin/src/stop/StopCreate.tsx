import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FlightTitle } from "../flight/FlightTitle";

export const StopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="airport" source="airport" />
        <DateTimeInput label="arrivalTime" source="arrivalTime" />
        <DateTimeInput label="departureTime" source="departureTime" />
        <ReferenceInput source="flight.id" reference="Flight" label="Flight">
          <SelectInput optionText={FlightTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
