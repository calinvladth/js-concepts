// Closure: gives access to an outer function's scope from an inner function
// A function serves as a Closure
//
// Scope: layered in hierarchy | Travels downwards
// Child scopes have access to the parent scopes, but not vice versa


const globalData = `I'm global`
var globalDataAssignment = 'Created outside.'

function loadAll() {
    const data = 'Hola from inside'
    

    function getData() {
        console.log('SCOPED DATA: ', data)
        globalDataAssignment =  globalDataAssignment + ' Renamed from inside'

        window.name = `I'm and Exception. \nI was created inside. \nThere is always a workaround.`
    }
    
    getData()
}

loadAll()
console.log('GLOBAL DATA:\n\n', globalData)
console.log('Global DATA Assignment:\n\n', globalDataAssignment)
console.log('EXCEPTION:\n\n', this.name)


