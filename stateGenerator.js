const crypto = require("crypto");

// Function to generate a random, URL-safe string
function generateRandomString(length) {
  return crypto
    .randomBytes(length)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "")
    .substring(0, length);
}

// Generate state parameter value
function generateState() {
  return generateRandomString(255);
}

module.exports = generateState;
