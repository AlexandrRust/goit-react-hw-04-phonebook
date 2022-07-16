import { List } from './PhonesList.styled';
import { PropTypes } from 'prop-types';
import { ItemLi } from './Item/ItemLi.styled';
import { SecondButton } from 'components/buttons/SecondButton.styled';

export const PhonesList = ({ options, deleteContact }) => {
  return (
    <List>
      {options.map(({ name, id, number }) => (
        <ItemLi key={id}>
          {name}: {number}{' '}
          <SecondButton
            type="button"
            name={name}
            onClick={() => deleteContact(id)}
          >
            delete
          </SecondButton>
        </ItemLi>
      ))}
    </List>
  );
};

PhonesList.propTypes = {
  options: PropTypes.array,
};
