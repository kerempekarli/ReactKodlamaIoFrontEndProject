import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

export default function KodlamaiotextInput({...props}) {
  console.log({...props})
  console.log({props})
  const [field, meta] = useField(props);
     console.log({...field});
     console.log({field});
  return (
    <div>
      {/* <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.color}></Label>
        ) : null}
      </FormField> */}
    </div>
  );
}
