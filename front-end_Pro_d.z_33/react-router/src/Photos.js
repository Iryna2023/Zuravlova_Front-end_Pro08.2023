import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Photos = ({ match }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${match.params.albumId}`)
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [match.params.albumId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Фотографії альбому</h1>
      <Link to="/">Повернутися до списку користувачів</Link>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photos;