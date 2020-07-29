import React from 'react';
import './Detail.css';

class Detail extends React.Component {

    componentDidMount() {
        const { location, history } = this.props;
        console.log(this.props);
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const { location } = this.props;
        if (location.state){
            return(
                <div className="detail_container">
                    <div>
                        <h1>You have trapped in my fishing program!</h1>
                        <h3>Extracting your banking information...</h3>
                    </div>
                    <div className="detail_info">
                        <img src={location.state.poster} alt={location.state.title}></img><br></br>
                        <span>Title: {location.state.title}</span><br></br>
                        <span>Year: {location.state.year}</span><br></br>
                        <ul>{location.state.genres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
                        <span>{location.state.summary}</span>
                    </div>
                </div>
            )
        }
        else{
            return null; //if it has no state props, return null and componentDidMount() will run
        }
    }
}

export default Detail;