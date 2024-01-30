const { Schema, model } = require('mongoose');

const ShortUrlSchema = new Schema({
    shortUrl: String,
    fullUrl: String
}, { timestamps: { currentTime: () => Date.now(), updatedAt: null } });

module.exports = model("ShortUrl", ShortUrlSchema)