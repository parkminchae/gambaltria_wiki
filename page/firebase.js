var firebaseConfig = {
    apiKey: "AIzaSyB9oPdilceo4-4e3YiUlEmvkK7-ZojqoJ8",
    authDomain: "gambaltria.firebaseapp.com",
    databaseURL: "https://gambaltria-default-rtdb.firebaseio.com",
    projectId: "gambaltria",
    storageBucket: "gambaltria.appspot.com",
    messagingSenderId: "1060288636623",
    appId: "1:1060288636623:web:4f3027a36e167fda49f9ba"
  };


firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function writeUserData(ref, value) {
  firebase.database().ref(ref).set(value);
}

function doAct(){
    name = document.getElementById("input_user_name").value;
    writeUserData(name, 'connect');
}
