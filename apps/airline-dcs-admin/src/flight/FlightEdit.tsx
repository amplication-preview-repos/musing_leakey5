import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PassengerTitle } from "../passenger/PassengerTitle";
import { StopTitle } from "../stop/StopTitle";

export const FlightEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="arrivalTime" source="arrivalTime" />
        <DateTimeInput label="departureTime" source="departureTime" />
        <TextInput label="destination" source="destination" />
        <TextInput label="flightNumber" source="flightNumber" />
        <TextInput label="origin" source="origin" />
        <ReferenceArrayInput
          source="passengers"
          reference="Passenger"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PassengerTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="stops"
          reference="Stop"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StopTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
