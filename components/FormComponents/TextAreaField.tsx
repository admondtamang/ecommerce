import React from 'react';
import { Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react';
import { Field, FormikProps } from 'formik';

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
};
export default function TextAreaField({ name, label, placeholder, isRequired, rest }: InputFieldProps) {
  return (
    <Field name={name}>
      {({ field, form }: FormikFieldProps) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel htmlFor={name}>{label}</FormLabel>

          <Textarea as={Textarea} {...field} id={name} placeholder={placeholder} />
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
