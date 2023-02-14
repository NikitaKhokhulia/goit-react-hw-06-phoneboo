import { Input, Text, Button } from './ContactsForm.styled';
import { Container } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../Redux/contactsSlice';
import shortid from 'shortid';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid(),
      name: e.currentTarget.name.value,
      number: e.currentTarget.number.value,
    };

    dispatch(addContact(contact));
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input>
        <label>
          <Text>Name</Text>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <Text>Number</Text>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </Input>

      <Container>
        <Button type="submit">Add contact</Button>
      </Container>
    </form>
  );
}

// export default function ContactsForm({ onSubmit }) {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChangeName = e => {
//     const { value } = e.currentTarget;
//     setName(value);
//   };

//   const handleChangeNumber = e => {
//     const { value } = e.currentTarget;
//     setNumber(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit({ name, number });
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input>
//         <label>
//           <Text>Name</Text>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChangeName}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label>
//           <Text>Number</Text>
//           <input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={handleChangeNumber}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//       </Input>

//       <Container>
//         <Button type="submit">Add contact</Button>
//       </Container>
//     </form>
//   );
// }

// ContactsForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   name: PropTypes.string,
//   number: PropTypes.string,
// };
