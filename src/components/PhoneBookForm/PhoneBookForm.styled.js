import styled from 'styled-components';

import { Form, Field } from 'formik';

export const PhoneForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px, solid, black;
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 15px;
  border-color: gray;
  border-radius: 5px;
  font-size: 16px;
`;
