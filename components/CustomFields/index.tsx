import React from 'react';
import InputField from '../FormComponents/InputField';
import PriceField from '../FormComponents/PriceField';
import TagsInput from '../FormComponents/ReactSelect';

export default function CustomFields({ fields }: any) {
  function handleField(field: any, index: Number) {
    switch (field.type) {
      case 'InputField':
        return (
          <InputField
            name={field.name}
            label={field.name}
            placeholder={field.placeholder}
            isRequired={field.placeholder}
            key={field.index}
          />
        );
      case 'PriceField':
        return (
          <PriceField
            name={field.name}
            label={field.name}
            placeholder={field.placeholder}
            isRequired={field.placeholder}
            key={field.index}
          />
        );
      case 'TagsInput':
        return (
          <TagsInput
            key={field.index}
            type="number"
            name={field.name}
            label={field.name}
            placeholder={field.placeholder}
            tags={[]}
          />
        );
      default:
        return (
          <InputField
            name={field.name}
            label={field.name}
            placeholder={field.placeholder}
            isRequired={field.placeholder}
            key={field.index}
          />
        );
    }
  }

  return <div>{fields.map((field: any, index: Number) => handleField(field, index))}</div>;
}
