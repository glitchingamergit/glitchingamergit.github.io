const API_KEY = 'AIzaSyClWEXfT8kO6MvYdUClo602_UxysSWuuUA';
const CHANNEL_ID = 'UCLtI0J3tg9nhRMOFRbIp3MQ';

const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

function loadLatestVideo() {
    const cachedData = localStorage.getItem('yt_video_cache');
    const now = new Date().getTime();

    if (cachedData) {
        const { videoId, expiry } = JSON.parse(cachedData);
        if (now < expiry) {
            updateIframeAndLink(videoId);
            return;
        }
    }

    fetchLatestFromAPI();
}

function fetchLatestFromAPI() {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1&type=video`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const latestVideoId = data.items[0].id.videoId;
                
                const cacheObject = {
                    videoId: latestVideoId,
                    expiry: new Date().getTime() + CACHE_DURATION
                };
                localStorage.setItem('yt_video_cache', JSON.stringify(cacheObject));
                
                updateIframeAndLink(latestVideoId);
            }
        })
        .catch(err => console.error("Error:", err));
}

function updateIframeAndLink(videoId) {
    document.getElementById('latestVideoEmbed').setAttribute("src", `https://www.youtube-nocookie.com/embed/${videoId}`);
    document.getElementById("latestVideoLink").setAttribute("href", `https://www.youtube.com/watch?v=${videoId}`);
}

loadLatestVideo();
