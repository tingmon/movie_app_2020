import React from 'react';
import axios from 'axios';

class Home extends React.Component{
    state = {
        isLoading: true,
        movies: [],
        count: 0
    }

    getMovies = async() => {
        const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
        console.log(movies);
        //console.log(movies.data.data.movies);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 4000);
        this.getMovies();
    }

    add = () => {
        this.setState(current => ({ count: current.count + 1}));  // -> this is recommended practice
    }
    minus = () => {
        this.setState({ count: this.state.count - 1});
    }

    render() {
        const {isLoading} = this.state;
        return <div>{isLoading ? "Loading..." : "Fishing Program Activated!"}
        <h1>number is {this.state.count}</h1>
        <button onClick={this.add()}>add</button>
        <button onClick={this.minus()}>minus</button>
        </div>
    }
    


}

export default Home;
//https://yts.mx/api/v2/list_movies.json