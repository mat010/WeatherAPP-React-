import React from "react";

const Weather = props => (
            <div className="weather__box">

                <table className="waether__table">
                { props.city && props.country &&   <tr> <th>Location:</th><th>{ props.city}, {props.country}</th> </tr>}
                { props.temperature &&  <tr> <th>Temperature:</th><th> {props.temperature}ºC</th> </tr>}
                { props.humidity &&  <tr> <th>Humidity:</th><th> {props.humidity}%</th> </tr>}
                { props.description &&  <tr> <th>Conditions:</th><th> {props.description}</th> </tr>}
                { props.error &&  <tr> <th>Error:</th><th> {props.error}</th> </tr>}
                </table>

                
                
            </div>
 );
      
export default Weather;