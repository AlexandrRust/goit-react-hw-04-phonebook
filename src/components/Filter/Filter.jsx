import { PropTypes } from "prop-types";
import { Label } from "components/Label/Label.styled";
import { Input } from "components/Input/Input.styled";

export const Filter = ({value, onChange}) => {
    return (
        <Label htmlFor="filter">
            Find contacts by name
            <Input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={value}
                onChange={onChange}
            />
        </Label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired
}