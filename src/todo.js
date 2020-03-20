
export default class Todo {
    static api = () => {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
    }
}