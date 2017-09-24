var users = [
    {
        _id: '1',
        __v: 0,
        local:
        {
            password: '$2a$08$jNUqaZk',
            email: 'dom4'
        }
    },
    {
        _id: '2',
        __v: 0,
        local:
        {
            password: 'iYYgH4Py',
            email: 'dom4'
        }
    }
];

module.exports = {

    getUser: function (id) {
        var userRez = null;
        users.forEach(function (user) {
            if (user._id == id) {
                userRez = user;
                return;
            }
        });
        return userRez;
    },
    addUser: function (user) {
        users.push(user);
    },
    removeUser: function (id) {

        var index = null;
        users.forEach(function (user) {
            if (user._id == id) {
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


