// Import Variables
import { videos } from "../data/all-videos.js";
import { mainLinks, moreLinks, exploreLinks } from "../data/all-sidebar.js";

// Main Links
// Combine the HTML together and put it on the page
export let MainSidebarHTML = "";

// Generating the Sidebar HTML using JavaScript
// Loop this array using forEach method
mainLinks.forEach((mainLinks) => {
	MainSidebarHTML += `
    <div class="main-sidebar-link">
        <img src="${mainLinks.imgIcon}" />
        <p>${mainLinks.text}</p>
    </div>`;
});

// More Links
// Combine the HTML together and put it on the page
export let MoreSidebarHTML = "";

// Generating the Sidebar HTML using JavaScript
// Loop this array using forEach method
moreLinks.forEach((moreLinks) => {
	MoreSidebarHTML += `
    <div class="more-sidebar-link">
        <img src="${moreLinks.imgIcon}" />
        <p>${moreLinks.text}</p>
    </div>`;
});

// Channels
// Combine the HTML together and put it on the page
export let ChannelSidebarHTML = "";

// Generating the Sidebar HTML using JavaScript
// Loop this array using forEach method
videos.forEach((Subscription) => {
	ChannelSidebarHTML += `
    <a href="${Subscription.authorPic.pictureLink}">
        <div class="channels-sidebar-link" title="${Subscription.info.author}">
            <img src="${Subscription.authorPic.picture}" />
            <p class="ellipsis-text">${Subscription.info.author}</p>
        </div>
    </a>`;
});

// Explore Links
// Combine the HTML together and put it on the page
export let ExploreSidebarHTML = "";

// Generating the Sidebar HTML using JavaScript
// Loop this array using forEach method
exploreLinks.forEach((exploreLinks) => {
	ExploreSidebarHTML += `
    <div class="explore-sidebar-link">
        <img src="${exploreLinks.imgIcon}" />
        <p>${exploreLinks.text}</p>
    </div>`;
});
