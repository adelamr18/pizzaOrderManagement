import React from "react";
import { Form, Col, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { notifications, titles } from "../../constants/defines";
import "react-toastify/dist/ReactToastify.css";
import "./delivery-form.css";

export interface deliveryFormProps {
  firstLabel: string;
  secondLabel: string;
  thirdLabel: string;
  fifthLabel?: string;
  sixthLabel?: string;
  seventhLabel?: string;
  navigateToDashboard: VoidFunction;
}

export default function DeliveryForm(props: deliveryFormProps) {
  const {
    firstLabel,
    secondLabel,
    thirdLabel,
    fifthLabel,
    sixthLabel,
    seventhLabel,
    navigateToDashboard
  } = props;
  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required()
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={() => {
        toast.success(notifications.successToast, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });
        setTimeout(() => {
          navigateToDashboard();
        }, 3000);
      }}
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        state: "",
        zip: "",
        city: "",
        terms: ""
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <ToastContainer />
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>{firstLabel}</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {notifications.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>{secondLabel}</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {notifications.errors.surname}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>{fifthLabel}</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="City"
                  aria-describedby="inputGroupPrepend"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  {notifications.errors.city}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>{thirdLabel}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />

              <Form.Control.Feedback type="invalid">
                {notifications.errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>{sixthLabel}</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {notifications.errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>{seventhLabel}</Form.Label>
              <Form.Control
                type="number"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">
                {notifications.errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <div onClick={() => handleSubmit()} className="button-container">
            <span id="button-text">{titles.confirmOrder}</span>
          </div>
        </Form>
      )}
    </Formik>
  );
}
