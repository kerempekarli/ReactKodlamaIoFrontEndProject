import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import KodlamaiotextInput from "../utilities/customFormControls/KodlamaIotextInput"

export default function productAdd() {
  const initialValues = { productName: "", unitPrice: "" };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur"),
    unitPrice: Yup.number().required("Ürün fiyatı girmek zorunludur"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <KodlamaiotextInput name="productName" placeholder="Ürün adı" />
          <KodlamaiotextInput name="unitPrice" placeholder="Ürün fiyatı" />
          {/* <FormField>
            <Field name="productName" placeholder="Ürün adı"></Field>
            <ErrorMessage
              name="productName"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label> 
              )}
            ></ErrorMessage>
          </FormField> */}
          <Button color="green" type="submit">
            Button
          </Button>
        </Form>
      </Formik>
    </div>)
}
