import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {

    constructor(props){
        super(props);

        //This is the COMPONENT STATE, and it's different from the App State
        this.state = { term: '' };


        //I NEED TO bind the function! Always. Otherwise, the function doesn't works.
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(event) {
        this.setState({ term: event.target.value });
    }


    onFormSubmit(event){
        //Don't submit the form (to stop the reload issue)
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five days forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//null because we don't need any state right now
export default connect(null, mapDispatchToProps)(SearchBar);
