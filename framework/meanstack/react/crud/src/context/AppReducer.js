export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_USER':
      return {
        users: state.users.filter((user) => {
          return user.id !== action.payload;
        }),
      };
    case 'ADD_USER':
      return {
        users: [action.payload, ...state.users],
      };

    case 'EdIT_USER':
      const updateUser = action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      return {
        users: updatedUsers,
      };
    default:
      return state;
  }
};
