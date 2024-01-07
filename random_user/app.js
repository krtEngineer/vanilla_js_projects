import { getElement, displayUser } from "./utils.js";

const btn = getElement(".btn");
window.addEventListener("DOMContentLoaded", displayUser);
btn.addEventListener("click", displayUser);
