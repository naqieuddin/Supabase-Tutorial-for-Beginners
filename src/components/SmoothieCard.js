import { Link } from 'react-router-dom'
import React from 'react'

function SmoothieCard({ smoothie }) {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="button">
        {" "}
        {/*link to each smoothie id*/}
        <Link to={"/" + smoothie.id}>
          <box-icon name="edit-alt"></box-icon>
        </Link>
      </div>
    </div>
  );
}

export default SmoothieCard
