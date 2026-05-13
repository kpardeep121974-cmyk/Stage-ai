const clientId = 'YOUR_SPOTIFY_CLIENT_ID'; // Yahan apni ID daalein
const clientSecret = 'YOUR_SPOTIFY_CLIENT_SECRET'; // Yahan Secret daalein

export const getSpotifyToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });
  const data = await response.json();
  return data.access_token;
};

export const searchArtistSongs = async (token, artistName) => {
  const response = await fetch(`https://api.spotify.com/v1/search?q=artist:${artistName}&type=track&limit=50`, {
    headers: { 'Authorization': 'Bearer ' + token }
  });
  const data = await response.json();
  return data.tracks.items;
};
