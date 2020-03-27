import React from "react";
import { connect } from "react-redux";


const Jokes = props => {
    return(
        <div>
            {props.jokes.map(joke => (
                <div>
                
           
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return{
        jokes: state.MoviesEpisodes,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(Jokes)
