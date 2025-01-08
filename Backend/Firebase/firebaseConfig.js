"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = exports.firebaseConfig = void 0;
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var analytics_1 = require("firebase/analytics");
var auth_1 = require("firebase/auth");
exports.firebaseConfig = {
    apiKey: "AIzaSyACTecQ3pfKMgVH97khC9VVzL6OSSAQkv0",
    authDomain: "phoenix-c1efd.firebaseapp.com",
    projectId: "phoenix-c1efd",
    storageBucket: "phoenix-c1efd.firebasestorage.app",
    messagingSenderId: "902488755459",
    appId: "1:902488755459:web:2c87a374ef9de7b34a2d36",
    measurementId: "G-XHE7HTYXL2",
};
var app = (0, app_1.initializeApp)(exports.firebaseConfig);
var analytics = (0, analytics_1.getAnalytics)(app);
exports.auth = (0, auth_1.getAuth)(app);
exports.db = (0, firestore_1.getFirestore)(app);
exports.default = app;
