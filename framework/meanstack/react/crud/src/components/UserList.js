import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export const UserList = () => {
  const { users, removeUser, addUser } = useContext(GlobalContext);
  return (
    <ListGroup>
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link className="btn btn-warning" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button onClick={() => removeUser(user.id)} color="danger">
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h1 className="text-center">No user</h1>
      )}
    </ListGroup>
  );
};
