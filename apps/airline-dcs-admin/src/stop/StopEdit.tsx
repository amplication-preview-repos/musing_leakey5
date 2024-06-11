import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FlightTitle } from "../flight/FlightTitle";

export const StopEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="airport" source="airport" />
        <DateTimeInput label="arrivalTime" source="arrivalTime" />
        <DateTimeInput label="departureTime" source="departureTime" />
        <ReferenceInput source="flight.id" reference="Flight" label="Flight">
          <SelectInput optionText={FlightTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
