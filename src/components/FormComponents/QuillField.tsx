import React, { useState } from 'react';
import { Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import { Field, FormikProps } from 'formik';
import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

type InputFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  isRequired?: any;
  rest?: string[];
};
export default function QuillField({ name, label, placeholder, rest }: InputFieldProps) {
  const [quill, setQuill] = useState('');

  return (
    <Field name={name}>
      {({ field, form, handleChange, values }: any) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          {console.log({ ...field })}
          <Field name={name}>
            {({ field }: any) => <ReactQuill value={field.value} theme="snow" onChange={field.onChange(field.name)} />}
          </Field>
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
