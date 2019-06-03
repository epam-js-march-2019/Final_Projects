import React, {Component} from 'react';
import './Addres.css';


    export default class Addres extends Component{
   
    render(){
    return(
    <div className="Addres">
    <h1>Our ADRESS!</h1>
         <div>
             <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.0247904447624!2d30.416755262961907!3d60.03491799241019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963340d121d9f3%3A0xe2e78ba3cafd3593!2z0JrRgNCw0YHQuNCy0YvQtSDQm9GO0LTQuA!5e0!3m2!1sru!2sru!4v1558817938614!5m2!1sru!2sru" width="300" height="250" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
    </div>

    )}
    }