const firebaseConfig = {
  apiKey: "AIzaSyDrhZLsUQu0RM44WN4eV-4lp1agpGb5S7A",
  authDomain: "todo-opdracht.firebaseapp.com",
  projectId: "todo-opdracht",
  storageBucket: "todo-opdracht.appspot.com",
  messagingSenderId: "675439357558",
  appId: "1:675439357558:web:eab0588f53bdc65f92b957",
  measurementId: "G-EG9T1HXY15",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
