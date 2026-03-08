const API_KEY = 'AIzaSyClWEXfT8kO6MvYdUClo602_UxysSWuuUA';
const CHANNEL_ID = 'UCDDupcLC-TB0g34qXX6Pexw';

const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.items && data.items.length > 0) {
            const latestVideoId = data.items[0].id.videoId;
            const iframe = document.getElementById('latestVideoEmbed');

            iframe.src = `https://www.youtube-nocookie.com/embed/${latestVideoId}`;
        } else {
            console.log("No videos found.");
        }
    })
    .catch(error => console.error('Error fetching latest video:', error));
