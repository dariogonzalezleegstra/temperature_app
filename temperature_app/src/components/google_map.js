import React, { Component } from 'react';

class GoogleMap extends Component {

    //I think that this.refs.map it's captured by the api, which is imported in index.html
    //lat and long are captured by the temperature api in weather_list
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        //this.refs.map
        return <div ref="map"></div>;
    }
}

export default GoogleMap;