var users = [
    {
        _id: '59c68a07dc293403af0b0bff',
        __v: 0,
        local:
        {
            password: '$2a$08$jNUqaZknZdxnTX.wayXQ1uQwaOyH.loAzNQD7vxL6o9FpiYYgH4Py',
            email: 'dom4'
        }
    }
];

module.exports = {

    getUser : function (id) {
        console.log('getting user');
        return users[0];
    },
    addUser : function (user) {
        console.log('adding user');
        users.push(user);
    },
    removeUser : function (id) {
        console.log('removing user');
    }

};


