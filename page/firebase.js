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

function readData_list(ref, element) {
    database.ref(ref).on("value", snapshot => {
        const data = snapshot.val();
        const chat = document.createElement("li");
        const textNode = document.createTextNode(JSON.stringify(data));
        chat.appendChild(textNode);
        document.getElementById("show_chat").appendChild(chat);
    });
}


function send_chat() {
    var name = document.getElementById("input_user_name").value;
    var chat = document.getElementById("input_user_chat").value;
    writeData('chat/',name +":" +chat);
}

function read_chat() {
    var chat = document.getElementById("show_chat");
    readData_list('chat/', chat);
}


function send_noti() {
    var noti = document.getElementById("input_noti").value;
    writeData('noti/', noti);
}

function read_noti() {
    var noti = document.getElementById("noti_box");
    readData('noti/', noti);
}
