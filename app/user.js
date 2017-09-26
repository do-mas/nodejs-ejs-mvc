var users = [];

module.exports = {

    deleteAll:  function(){
        users = [];
    },

    getUser: function (id) {
        var userRez = null;
        users.forEach(function (user) {
            if (user.id == id) {
                userRez = user;
                return;
            }
        });
        // return null;
        return userRez;
    },
    addUser: function (user) {
        users.push(user);
    },
    deleteUser: function (id) {

        var index = null;
        users.forEach(function (user) {
            if (user.id == id) {
                index = users.indexOf(user);
            }
        });
        if (index !== null) {
            users.splice(index, 1);
        }
    },
    getUsers: function () {
        return users;
    }

};


