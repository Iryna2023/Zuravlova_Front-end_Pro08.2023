import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css'
import Modal from './Modal';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'’`]+$/, "Ім'я може містити тільки літери.")
    .required('Це обов\'язкове поле. Заповніть його, будь ласка.'),
  email: Yup.string()
    .email('Ви ввели неправильний формат email. Перевірте данні, будь ласка.')
    .required('Це обов\'язкове поле. Заповніть його, будь ласка.'),
  phone: Yup.string()
    .matches(/^[0-9]{12}$/, 'Телефон повинен містити всі 12 цифр.')
    .required('Це обов\'язкове поле. Заповніть його, будь ласка.'),
});

const InputField = ({ label, name, type }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field name={name} type={type} />
    <ErrorMessage name={name} component="div" />
  </div>
);

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: null,
      isModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: '', email: '', phone: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
            try {
              console.log(values);
              this.setState({ formValues: values });
              this.toggleModal();
              resetForm();
            } catch (error) {
              setErrors({ submit: 'Щось пішло не так. Спробуйте ще раз, будь ласка.' });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <InputField label="Введіть Ваше ім'я, будь ласка:" name="name" type="text" />
              <InputField label="Введіть Вашу електронну пошту, будь ласка:" name="email" type="email" />
              <InputField label="Введіть Ваш номер телефону, будь ласка:" name="phone" type="text" />

              {errors.submit && <div>{errors.submit}</div>}

              <button type="submit" disabled={isSubmitting}>Надіслати</button>
            </Form>
          )}
        </Formik>
        <Modal 
          isOpen={this.state.isModalOpen} 
          formValues={this.state.formValues} 
          toggleModal={this.toggleModal} 
        />
      </div>
    );
  }
};

export default MyForm;