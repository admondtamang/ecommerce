import React from 'react';
import { Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import { Field, FormikProps } from 'formik';
import dynamic from 'next/dynamic';

const JsonEditor = dynamic(() => import('jsoneditor-react'), { ssr: false });

export default function JsonEditorField({ json, name }) {
  return (
    <Field name={name}>
      {({ field, form, handleChange, values }) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Field name={name}>{({ field }) => <JsonEditor value={json} onChange={handleChange} />}</Field>
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
