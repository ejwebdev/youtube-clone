//Takes the variable and import here
import { videos } from "../data/videos.js";
import { SubscriptionHTML } from "./sidebar.js";

//Combine the HTML together and put it on the page
let videosHTML = "";

//Generating the HTML using JavaScript
//Loop this array using forEach method
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

//Using DOM or Document Object Method
//Display the container of all content to the page using JavaScript
document.querySelector(".js-video-grid").innerHTML = videosHTML;
document.querySelector(".js-sidebar-channels").innerHTML = SubscriptionHTML;

//This is for Search Bar function
//Function to render videos
const renderVideos = (videosArray) => {
	let videosSearchHTML = "";

	//Loop this array using forEach method
	videosArray.forEach((video) => {
		videosSearchHTML += `
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

	//Display the container of all content to the page using JavaScript
	document.querySelector(".js-video-grid").innerHTML = videosSearchHTML;
};

//Function to handle search
const handleSearch = () => {
	const searchInput = document.querySelector(".search-bar");
	const searchTerm = searchInput.value.toLowerCase();

	//Filter videos based on the search term
	const filteredVideos = videos.filter((video) => {
		const titleMatches = video.info.title.toLowerCase().includes(searchTerm);
		const authorMatches = video.info.author.toLowerCase().includes(searchTerm);
		return titleMatches || authorMatches;
	});

	//Render the filtered videos
	renderVideos(filteredVideos);
};

//Render videos on page load
renderVideos(videos);

//Add event listener to search button
document
	.querySelector(".search-button")
	.addEventListener("click", handleSearch);

//Add event listener to handle Enter key press in the search input
document.querySelector(".search-bar").addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		handleSearch();
	}
});
