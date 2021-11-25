importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyDexMmprjN7wvoV9flXYEUlMU6e6KyDNDc',
    authDomain: 'teca-e566a.firebaseapp.com',
    databaseURL: 'https://teca-e566a.firebaseio.com',
    projectId: 'teca-e566a',
    storageBucket: 'teca-e566a.appspot.com',
    messagingSenderId: '477378136900',
    appId: '1:477378136900:web:887fea974af32b9f70a511'
  });

const messaging = firebase.messaging();
