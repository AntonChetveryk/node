const Emmiter = require('events');

const onGreeting = (data) => {
  console.log(data)
}

class Test extends Emmiter {
  sayHy(name) {
    test.emit('greeting', `Hello ${name}`);
  }
}

// In data come payload from emitter (second arg) => `Hello ${name}`

const test = new Test();

test.on('greeting', onGreeting)

test.sayHy("Anton");



