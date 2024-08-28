// Import Variables
import { videos } from "../data/all-videos.js";

// Main Videos
// Combine the HTML together and put it on the page
export let videosHTML = "";

// Generating the HTML using JavaScript
// Loop this array using forEach method
videos.forEach((video) => {
	videosHTML += `
    <div class="video-preview">
        <div class="thumbnail-row">
            <a href="${video.videoLink}">
                <img class="thumbnail" src="${video.thumbnail.image}" />
            </a>
            <div class="video-time">${video.thumbnail.time}</div>
        </div>
        <div class="video-info-grid">
            <div class="channel-picture">
                <a href="${video.authorPic.pictureLink}">
                    <img
                        class="profile-picture"
                        src="${video.authorPic.picture}"
                        title="${video.info.author}"
                    />
                </a>
            </div>
            <div class="video-info">
                <p class="video-title">
                    <a href="${video.videoLink}">
                        ${video.info.title}
                    </a>
                </p>
                <p class="video-author">${video.info.author}</p>
                <p class="dot-hide">&#183;</p>
                <p class="video-stats">${video.info.stats}</p>
            </div>
        </div>
    </div>`;
});
