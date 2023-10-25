//Takes the variable and import here
import { videos } from "../data/videos.js";

//Combine the HTML together and put it on the page
export let SubscriptionHTML = "";

//Generating the Sidebar HTML using JavaScript
//Loop this array using forEach method
videos.forEach((Subscription) => {
	SubscriptionHTML += `
    <div class="sidebar-channels" title="${Subscription.info.author}">
        <img src="${Subscription.authorPic.picture}" />
        <div>${Subscription.info.author}</div>
    </div>`;
});
