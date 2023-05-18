require('dotenv').config()

const {
   TWILIO_ACCOUNT_SID,
   TWILIO_TOKEN
} = process.env;
var client = require('twilio')("ACebe32dde2964e31975c191e2f3611311", "df6b36caa0313d7c22c8fb70c3f5b863");

module.exports = client