/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// const {onRequest} = require("firebase-functions/v2/https");
import {onRequest} from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";

initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript
// exports.exercisev2 = require("./v2/exercisev2");
// exports.exercisehistoryv2 = require("./v2/exercisehistoryv2");
// exports.userv2 = require("./v2/userv2");

exports.addmessage = onRequest(async (req, res) => {
  res.json({message: "hello world2"});
});
