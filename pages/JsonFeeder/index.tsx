import React, { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Forms from '../../components/Forms';
// import { JsonEditor as Editor } from 'jsoneditor-react-ext';
// import 'jsoneditor-react/es/editor.min.css';
const ReactJson = dynamic(() => import('react-json-view'), { ssr: false });

export default function JsonFeeder() {
  const [jsonView, setjsonView] = useState({});

  const handleSubmit = async (values: any, actions: any) => {
    const data = values.product_ids.replace(/ /g, '').split(',');
    values.product_ids = data;

    const response = await axios.post('api/feeder', values);
    console.log(response);

    setjsonView(response.data.data);
    actions.setSubmitting(false);
  };
  function handleChange() {
    console.log('DSlkklfj');
  }

  const formFields = [
    {
      name: 'product_ids',
      label: 'Products Ids',
      type: 'InputField',
      placeholder: 'Enter product Ids',
      isRequired: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'InputField',
      placeholder: 'Enter product name',
      isRequired: true,
    },
    {
      type: 'InputField',
      label: 'Icon Name',
      name: 'icon',
      placeholder: 'Enter short description',
      isRequired: true,
    },
    {
      type: 'PriceField',
      name: 'category_id',
      placeholder: 'Enter category Id',
      isRequired: true,
    },
    {
      type: 'InputField',
      name: 'result',
      placeholder: 'Final Result',
    },
  ];
  return (
    <Forms formFields={formFields} handleSubmit={handleSubmit} initialValues={{ product_ids: '3645,3643', description: '' }}>
      <ReactJson src={jsonView} />
      {/* <Editor value={jsonView} onChange={handleChange} /> */}
    </Forms>
  );
}
