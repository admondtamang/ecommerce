import React, { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Forms from '../../components/Forms';
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

export default function JsonFeeder() {
  const [jsonView, setjsonView] = useState({});

  const handleSubmit = async (values: any, actions: any) => {
    const response = await axios.post('api/', values);
    setjsonView(response.data.data);
    actions.setSubmitting(false);
  };

  const formFields = [
    {
      type: 'TextAreaField',
      name: 'result',
      placeholder: 'Final Result',
    },
  ];
  return (
    <Forms formFields={formFields} handleSubmit={handleSubmit}>
      <ReactJson src={jsonView} />
    </Forms>
  );
}
