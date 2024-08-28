// Import Variables
import { videos } from "../data/all-videos.js";
import { categoryHTML } from "./category-content.js";
import { videosHTML } from "./video-content.js";
import {
	MainSidebarHTML,
	MoreSidebarHTML,
	ChannelSidebarHTML,
	ExploreSidebarHTML,
} from "./sidebar-content.js";

// DOM
document.querySelector(".video-grid").innerHTML = videosHTML;
document.querySelector(".category-section").innerHTML = categoryHTML;
document.querySelector(".main-sidebar").innerHTML = MainSidebarHTML;
document.querySelector(".more-sidebar").innerHTML = MoreSidebarHTML;
document.querySelector(".channels-sidebar").innerHTML = ChannelSidebarHTML;
document.querySelector(".explore-sidebar").innerHTML = ExploreSidebarHTML;

// Search Bar
const renderVideos = (videosArray) => {
	let videosSearchHTML = "";

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

	// DOM
	document.querySelector(".video-grid").innerHTML = videosSearchHTML;
};

// Search Button
const handleSearch = () => {
	const searchInput = document.querySelector(".search-bar");
	const searchTerm = searchInput.value.toLowerCase();
	// Filter Videos
	const filteredVideos = videos.filter((video) => {
		const titleMatches = video.info.title.toLowerCase().includes(searchTerm);
		const authorMatches = video.info.author.toLowerCase().includes(searchTerm);
		return titleMatches || authorMatches;
	});

	renderVideos(filteredVideos);
};

// Render Videos
renderVideos(videos);

// Event listener
document
	.querySelector(".search-button")
	.addEventListener("click", handleSearch);

document.querySelector(".search-bar").addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		handleSearch();
	}
});

// Voice Search Button
const voiceSearchButton = document.getElementById("voiceSearchButton");
const searchInput = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
// Sound files
const voiceSearchSound = new Audio("audio/voice-search.mp3");

voiceSearchButton.addEventListener("click", function () {
	// Play start sound
	voiceSearchSound.play();
	// Initialize the speech recognition model
	initSpeechRecognition();
});

// Speech recognition model
function initSpeechRecognition() {
	// Check if the browser supports the Web Speech API
	if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
		const SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;
		const recognition = new SpeechRecognition();

		// Set language for recognition
		recognition.lang = "en-US";

		// Start recognition
		recognition.start();

		// Event handler when speech is recognized
		recognition.onresult = function (event) {
			const transcript = event.results[0][0].transcript;
			searchInput.value = transcript;

			// Programmatically click the search button after voice input is recognized
			searchButton.click();
		};

		// Event handler when recognition ends
		recognition.onend = function () {
			// Play end sound whether successful or not
			voiceSearchSound.play();
		};
	}
}
