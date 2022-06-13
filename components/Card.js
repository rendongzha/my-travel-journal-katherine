import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`../images/${props.imageUrl}`}
        alt=""
        className="card--picture"
      />
      <div className="card--journal">
        <div className="card--location">
          <img src="../images/mark.png" alt="" className="location--mark" />
          <p className="location--text">{props.location}</p>
          <a href={props.googleMapsUrl} className="location--map">View on Google Maps</a>
        </div>
        <h1 className="card--destination">{props.title}</h1>
        <p className="card--date">{props.startDate}</p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
