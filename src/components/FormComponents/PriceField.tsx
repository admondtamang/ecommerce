import React from 'react';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import { Field } from 'formik';

type InputFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  isRequired?: any;
  rest?: string[];
};

export default function PriceField({ name, label, placeholder, isRequired, rest }: InputFieldProps) {
  // const format = (val: any) => `NRS.` + val;
  // const parse = (val: any) => val.replace(/^\NRS./, "");

  // const [value, setValue] = React.useState("0.00");
  return (
    <Field name={name}>
      {({ field, form, values, handleChange }: any) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Field name={name}>
            {({ field, form: { touched, errors }, meta }: any) => (
              <NumberInput max={50} {...field}>
                <NumberInputField name={name} onChange={handleChange} {...field} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            )}
          </Field>

          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
