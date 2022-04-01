import React, { useState } from 'react';
import { Box, Button, HStack } from '@chakra-ui/react';
import InputField from '../../components/FormComponents/InputField';
import { Form, Formik } from 'formik';
import PriceField from '../../components/FormComponents/PriceField';
import 'react-quill/dist/quill.snow.css';
import QuillField from '../../components/FormComponents/QuillField';
export default function Dashboard() {
  return (
    <Box borderRadius="lg" bg="white" w="100%" p={4}>
      <Formik
        initialValues={{ name: 'Sasuke', description: '', short_description: '', regular_price: 0, sale_price: 0 }}
        onSubmit={(values, actions) => {
          console.log(values);

          const formData = new FormData();
          Object.entries(values).map(([key, value]: any) => formData.append(key, value));
          actions.setSubmitting(false);
        }}
      >
        {(props: any) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <InputField name="name" label="Name" placeholder="Enter product name" isRequired />
            <QuillField name="description" label="Description" placeholder="Enter full description" isRequired />
            <InputField name="short_description" label="Short Description" placeholder="Enter short description" />
            <HStack>
              <PriceField name="regular_price" label="Regular Price" placeholder="Enter regular price" />
              <PriceField name="sale_price" label="Sale Price" placeholder="Enter sale price" />
            </HStack>
            {/* <FileField name="file" label="Upload File" placeholder="Upload files" /> */}
            <div className="form-group">
              <label htmlFor="file">File upload</label>
              <input
                id="file"
                name="file"
                type="file"
                onChange={(event: any) => {
                  props.setFieldValue('file', event.currentTarget.files[0]);
                }}
                multiple
                className="form-control"
              />
            </div>
            <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
