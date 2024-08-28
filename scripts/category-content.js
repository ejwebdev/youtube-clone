// Import Variables
import { categories } from "../data/all-categories.js";

// All Categories
// Combine the HTML together and put it on the page
export let categoryHTML = "";

// Generating the Sidebar HTML using JavaScript
// Loop this array using forEach method
categories.forEach((categories) => {
	categoryHTML += `
    <button class="category">${categories.text}</button>`;
});
