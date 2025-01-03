"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = exports.firebaseConfig = void 0;
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var analytics_1 = require("firebase/analytics");
var auth_1 = require("firebase/auth");
exports.firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJ_ID,
    storageBucket: "phoenix-c1efd.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_APP_SENDER_ID,
    appId: import.meta.env.VITE_APP_APP_ID,
    measurementId: import.meta.env.VITE_APP_MEAS_ID,
};
console.log(import.meta.env.VITE_APP_API_KEY);
// Initialize Firebase
var app = (0, app_1.initializeApp)(exports.firebaseConfig);
var analytics = (0, analytics_1.getAnalytics)(app);
exports.auth = (0, auth_1.getAuth)(app);
exports.db = (0, firestore_1.getFirestore)(app);
exports.default = app;
