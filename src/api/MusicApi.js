import axios from 'axios';

function fetch(request, cb) {
  axios.get(request)
    .then(response => {
      cb(response.data);
    });
}

export function getAlbums(artist, cb) {
  const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
  fetch(request, cb);
}

export function getTracks(albumId, cb) {
  const request = `https://api.spotify.com/v1/albums/${albumId}`;
  fetch(request, cb);
}
