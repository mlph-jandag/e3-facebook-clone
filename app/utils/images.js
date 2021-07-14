const user1 = require('../assets/user1.jpeg');
const user2 = require('../assets/user2.jpeg');
const user3 = require('../assets/user3.jpeg');
const user = require('../assets/profile.jpg');

export default username => {
  switch (username) {
    case 'user1':
      return user1;
    case 'user2':
      return user2;
    case 'user3':
      return user3;
    case 'user':
      return user;
    default:
      return user;
  }
};
