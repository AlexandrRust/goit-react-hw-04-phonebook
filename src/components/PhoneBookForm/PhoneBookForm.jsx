import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Label } from 'components/Label/Label.styled';
import { FirstButton } from 'components/buttons/FirstButton.styled';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().min(13).required(),
});

const initialValues = {
  name: '',
  number: '',
};

const PhoneForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px, solid, black;
`;

const Input = styled(Field)`
  display: block;
  margin-top: 15px;
  border-color: gray;
  border-radius: 5px;
  font-size: 16px;
`;

export const PhoneBookForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, number } = values;
    onSubmit({ name, number });
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <PhoneForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </Label>
        <Label htmlFor="name">
          Phone
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </Label>
        <FirstButton type="submit">Add Contact</FirstButton>
      </PhoneForm>
    </Formik>
  );
};
