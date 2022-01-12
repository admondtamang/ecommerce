import React from 'react';
import { Field } from 'formik';
import { FormErrorMessage, FormLabel } from '@chakra-ui/react';

export default function ReactSelect(props: any) {
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = (indexToRemove: any) => {
    setTags([...tags.filter((_: any, index: any) => index !== indexToRemove)]);
  };
  const addTags = (event: any) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      //   props.selectedTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };
  return (
    <Field name={props.name}>
      {({ field, form }: any) => (
        <>
          <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
          <div className="tags-input">
            <ul {...field} id="tags">
              {tags.map((tag: any, index: any) => (
                <li key={index} className="tag">
                  <span className="tag-title">{tag}</span>
                  <span className="tag-close-icon" onClick={() => removeTags(index)}>
                    x
                  </span>
                </li>
              ))}
            </ul>
            <input
              type={props.type}
              onKeyDown={(e) => {
                if (e.keyCode === 9) e.preventDefault();
              }}
              onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
              placeholder="Press enter to add tags"
            />
            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
          </div>
        </>
      )}
    </Field>
  );
}
