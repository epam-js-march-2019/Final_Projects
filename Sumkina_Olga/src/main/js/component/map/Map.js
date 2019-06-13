import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import {fitBounds} from 'google-map-react/utils';
import {MAPS_API_KEY} from "../../secret";

const MapMarker = ({ico, text}) =>
    <div className='map-marker'>
        <span className='map-icon'>{ico}</span>
        <span className='map-text'>{text}</span>
    </div>;

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: props.center,
            zoom: props.zoom
        };
        this.mapContainer = React.createRef();
        this.fitMarkers = this.fitMarkers.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.fitMarkers(nextProps);
    }

    fitMarkers(props) {

        const markers = props.markers;
        const reference = markers[0];
        if (!reference) {
            return;
        }

        const bounds = {
            nw: {
                lat: reference.lat,
                lng: reference.lng
            },
            se: {
                lat: reference.lat,
                lng: reference.lng
            }
        };

        const size = {
            width: this.mapContainer.current.offsetWidth,  // Map width in pixels
            height: this.mapContainer.current.offsetHeight // Map height in pixels
        };

        markers.forEach(office => {
            bounds.nw.lat = Math.max(bounds.nw.lat, office.lat);
            bounds.nw.lng = Math.min(bounds.nw.lng, office.lng);
            bounds.se.lat = Math.min(bounds.se.lat, office.lat);
            bounds.se.lng = Math.max(bounds.se.lng, office.lng);
        });

        // Slightly spread the top-left and bottom-right corners
        // to better fit the markers
        // TODO: note that this math only works for the Northern hemisphere
        bounds.nw.lat *= 1.0003;
        bounds.nw.lng *= 0.9997;
        bounds.se.lat *= 0.9997;
        bounds.se.lng *= 1.0003;

        const {center, zoom} = fitBounds(bounds, size);
        this.setState({
            center: center,
            zoom: zoom
        });
    }

    render() {
        const markers = this.props.markers.map((office, index) => {
            return <MapMarker key={index}
                              lat={office.lat}
                              lng={office.lng}
                              ico={'📍'}
                              text={office.name}
            />
        });

        return (
            // Important! Always set the container height explicitly
            <div style={{height: '30vh', width: '100%'}} ref={this.mapContainer}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: MAPS_API_KEY}}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    onChildMouseEnter={this.props.onChildMouseEnter}
                    onChildMouseLeave={this.props.onChildMouseLeave}
                    resetBoundsOnResize={true}
                >
                    {markers}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;