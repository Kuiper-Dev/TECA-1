importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCBkqzsJbQDndkvxkcbd8y_MpWHfKAa8jI",
    authDomain: "teca-ef737.firebaseapp.com",
    databaseURL: 'https://teca-ef737.firebaseio.com',
    projectId: "teca-ef737",
    storageBucket: "teca-ef737.appspot.com",
    messagingSenderId: "1037441728990",
    appId: "1:1037441728990:web:7faa567c151bc54478dd4f"
  });

const messaging = firebase.messaging();
