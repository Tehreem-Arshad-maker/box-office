import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ id, image, name, summary }) => {
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`
    : 'No description';
  // to split summary into array of words
  // first ten elements of thsi array. so we end up with first 10 elments of array.
  // transform this array back to string by joing this elements using the empty space
  // when we have our final result we simply replace all html tags with empty string
  // and we use regular expression for this and regular is used to set the pattern

  return (
    <div>
      <div>
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};
export default ShowCard;
