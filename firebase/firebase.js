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

function writeData(ref, value) {
    database.ref(ref).set(value);
}

function readData(ref, element) {
    database.ref(ref).on("value", snapshot => {
        const data = JSON.stringify(snapshot.val());
        element.innerText = data;
    });
}

function send_noti() {
    var noti = document.getElementsByClassName("noti_edit_input_bar")[0].value;
    writeData('noti/', noti);
}

var noti_val = document.getElementById("noti");
readData('noti/', noti_val);
