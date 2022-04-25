import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class App extends React.Component {
    constructor(props) {
        super(props);

        // Initialize State
        this.state = {
            tasks: [],
            errMessage: '',
        };
    }
    componentDidMount() {
        this.getTodoItems();
    }

    async getTodoItems() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/posts')
            .then(response => {
                this.setState({ tasks: response.data });
            }).catch(error => {
                this.setState({ errMessage: error.message });
        });
    }

    render() {
        const { tasks, error } = this.state;

        if (tasks) {
            return (
                <div>
                   <h1>Api Call Successful!</h1>
                </div>
            );
        }

        if (error) {
            return (
                <h2>ERROR: {error}</h2>
            )
        }
        return <h2>Loading...</h2>

    }
}



ReactDOM.render(
    <App />,
    document.querySelector('#root'),
);

export default App;