function receivesAFunction(callback) {
    return callback()
}

receivesAFunction(callback);

function returnsANamedFunction() {
    let nameGreeting = function(name) {
        return `hi, I'm ${name}`;
    }
    return nameGreeting;
}

function returnsAnAnonymousFunction() {
    return function() {
        return 'hi';
    }
}