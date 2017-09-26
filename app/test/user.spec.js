var chai = require('chai');
var expect = chai.expect;
var userService = require('../user.js');

describe('UserService', function () {
  beforeEach(function(){
    userService.deleteAll();
    userService.addUser(getFakeUser(1));
  });
  it('should return user', function () {
    var user = userService.getUser(1);
    expect(user).not.to.equal(null);
    expect(user.id).to.equal(1);
  });
  it('should add user', function () {
    userService.addUser(getFakeUser(2));
    expect(userService.getUsers().length).to.equal(2);
  });
  it('should delete user', function () {
    expect(userService.getUsers().length).to.equal(1);
    userService.deleteUser(1);
    expect(userService.getUsers().length).to.equal(0);
  });
});

function getFakeUser(id) {
  return {
    id: id,
    password: '$2a$08$jNUqaZk',
    email: 'dom4'
  }
}