import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Albums = ({ match }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${match.params.userId}`)
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [match.params.userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
    <h1>Альбоми користувача</h1>
    <Link to="/">Повернутися до списку користувачів</Link>
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} - <Link to={`/album/${album.id}/photos`}>Photos</Link>
        </li>
      ))}
    </ul>
  </div>
);
};

export default Albums;