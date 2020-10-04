import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export default function EditUser(props) {
  const [selectedUser, setselectedUser] = useState({
    id: '',
    name: '',
  });

  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();

  const curretUserId = props.match.params.id;

  useEffect(() => {
    const userId = curretUserId;
    console.log(typeof userId);
    const selectedUser = users.find((user) => user.id === userId);
    // @ts-ignore
    setselectedUser(selectedUser);
  }, [curretUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    history.push('/');
  };
  const onChange = (e) => {
    setselectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <FormGroup onSubmit={onSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={selectedUser.name}
          onChange={onChange}
          placeholder="Enter name"
        />
      </FormGroup>
      <Button type="submit">Name Edit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
}
