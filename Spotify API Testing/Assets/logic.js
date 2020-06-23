const clientId = 'ec07d0a8b9f34ba68954ab2db4fa6d1a';
const clientSecret = '34d9368517094496bbd7de64d98b3ccf';

const _getToken = async () => {

  const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  console.log(result);
  _getGenres(data.access_token);
  _getPlaylistByGenre(data.access_token);
  
}

// const _getGenres = async (token) => {

//   const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
//       method: 'GET',
//       headers: { 'Authorization' : 'Bearer ' + token}
//   });

//   const data = await result.json();
//   console.log(data);
//   return data.categories.items;
// }

const _getGenres = async (token) => {
//spotify:artist:6lp2VnIRXXpC9Wz7hSX6RE
  const result = await fetch(`https://api.spotify.com/v1/artists/6lp2VnIRXXpC9Wz7hSX6RE/albums?album_type=SINGLE&offset=20&limit=10`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token}
  });

  const data = await result.json();
  console.log(data);
  //return data.categories.items;
}

const _getPlaylistByGenre = async (token) => {

    const limit = 10;
    const result = await fetch(`https://api.spotify.com/v1/playlists/375WFR2vppOoDKkQwEQ0k1`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    console.log(data)
    console.log(data.tracks.items[0].track.name)
    console.log(data.tracks.items[0])
    for (i = 0; i < 10; i++) {
      console.log(data.tracks.items[i].track.name)
      console.log(data.tracks.items[i].track.artists[0].name)
    }

    console.log("worked")
}

_getToken();
//_getPlaylistByGenre();
//_getGenres();