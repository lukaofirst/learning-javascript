const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    }, 

    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {};     // List of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // Single user message
                to.recieve(message, from);
            } else {
                // Mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const lucas = new User('Lucas');
const peter = new User('Peter');
const anders = new User('Anders');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(lucas);
chatroom.register(peter);
chatroom.register(anders);
chatroom.register(sara);

lucas.send('Hello Peter', peter);
peter.send('Hi Anders', anders); 
sara.send('Hi Lucas', lucas);
anders.send('Salve galera');