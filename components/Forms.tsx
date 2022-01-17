import React from 'react';
import { Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import CustomFields from './CustomFields';

export default function Forms({ formFields, initialValues, handleSubmit, children }: any) {
  return (
    <div>
      <Formik initialValues={initialValues || {}} onSubmit={handleSubmit}>
        {(props: any) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <CustomFields fields={formFields} />
            {children}

            <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
