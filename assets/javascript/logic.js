/*moment().format('hh:mm');*/
$(document).ready(function() {
    //  Declare variables
    var train, destination, firstTrain, nextTrain, frequency, next, minsAway, curTime, minsElapsed, schedule = [''];

    var config = {
        apiKey: "AIzaSyCiQLAVojXACrG6Ir68Se1nunX8nOzHKQU",
        authDomain: "srfb1-66f08.firebaseapp.com",
        databaseURL: "https://srfb1-66f08.firebaseio.com",
        storageBucket: "srfb1-66f08.appspot.com",
        messagingSenderId: "527005873457"
    };
    // ===========================================================
    firebase.initializeApp(config);
    database = firebase.database();

    // Set Firebase db
    var trainInfo = {
        train: train,
        frequency: frequency,
        destination: destination,
        minsAway: minsAway
    };
/*

    database.ref().on('value', function(snapshot) {

        var sv = snapshot.val();
        var svArr = Object.keys(sv);
        var svVal = Object.values(sv);
        console.log(svVal)
        for (i = 0; i < svArr.length; i++) {
            console.log(svVal[i].destination)
            $('tbody').append('<tr ><td>' + svVal[i].train + '</td><td>' + svVal[i].destination + '</td><td>' + svVal[i].frequency + '</td><td>' + ' __ ' + '</td><td>' + svVal[i].minsAway + '</td></tr>')

        }

    });
    if (typeof(Storage) !== "undefined") {} else {
        alert('No Web Storage support..');
    }*/

    // Get initial values from form
    $('.btn').on('click', function(e) {
        e.preventDefault();
        // 1- Get time of first train 

        train = $('#trainName').val().trim();
        console.log(train)
        frequency = $('#frequency').val();
        destination = $('#destination').val().trim();
        firstTrain = $('#firstTrain').val().trim();
        firstTrainCv = moment(firstTrain, 'hh:mm').subtract(1, 'years');

        curTime = moment();
        /*curTime = moment(curTime).format("hh:mm");*/
        minsElapsed = moment().diff(moment(firstTrainCv), 'minutes');
function updateMins(){
    minsAway = frequency - (minsElapsed % frequency)
    $('.mins').html(minsAway);
}
 
        
        next = moment().add(minsAway, "minutes");
        var nextTime = moment(next).format("hh:mm A");
        minsAway = frequency - (minsElapsed % frequency)
trainInfo = {
        train: train,
        frequency: frequency,
        destination: destination,
        nextTime : nextTime,
        minsAway: minsAway
    };
    $('tbody').append('<tr ><td>' + train + '</td><td>' + destination + '</td><td>' + frequency + '</td><td>' + nextTime + '</td><td class = "mins">' + minsAway + '</td></tr>')
    console.log(trainInfo)
setInterval(updateMins, 10000);       
database.ref().push(trainInfo);
    });
});



