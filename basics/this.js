// 1. The normal function takes value from person
// 2. The arrow function takes value from global

window.name = 'Value from the window' // Global name value


const data = {
    name: 'Data name',
    displayName: function() {
        console.log('THIS SUCCESS: ', this)
        console.log('Success: ', this.name)
    }
}
 
const dataError = {
    name: 'Data name',
    displayName: () => {
        console.log('THIS ERROR: ', this)
        console.log('Error: ', this.name)
    }
}

data.displayName()
dataError.displayName()