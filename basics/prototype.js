// Object.setPrototypeOf person to anotherPerson

const person = {
    walk: function() {
        console.log('The person is waling')
    }
}

const anotherPerson = {
    name: 'John'
}

Object.setPrototypeOf(anotherPerson, person)
anotherPerson.walk()