import React from 'react';
import { Flex, FormControl, FormErrorMessage, FormLabel, Heading, Text } from '@chakra-ui/react';
import { Field } from 'formik';

type InputFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  isRequired?: any;
  rest?: string[];
};
type FormikFieldProps = {
  field: any;
  form: any;
  setFieldValue: any;
};
interface SelectProtected {
  readonly wrapperElement: HTMLDivElement;
  readonly inputElement: HTMLInputElement;
}

export default function FileField({ name, label, placeholder, isRequired, rest }: InputFieldProps) {
  return (
    <Field name={name}>
      {({ field, form, setFieldValue }: FormikFieldProps) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel htmlFor={name}>{label}</FormLabel>

          <div className="form-group">
            <input
              id={name}
              name={name}
              type={name}
              onChange={(event: any) => {
                setFieldValue('file', event?.currentTarget?.files[0]);
              }}
              className="form-control"
            />
          </div>

          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
