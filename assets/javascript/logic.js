/*moment().format('hh:mm');*/
$(document).ready(function() {
    //  Declare variables
    var train, destination, firstTrain, nextTrain, frequency, next, minutesAway, curTime, minsElapsed;


    if (typeof(Storage) !== "undefined") {} else {
        alert('No Web Storage support..');
    }
    train = localStorage.getItem('train');
    destination = localStorage.getItem('destination')
    firstTrain = localStorage.getItem('firstTrain')
    frequency = localStorage.getItem('frequency')
    $('tbody').append('<tr><td>' + train + '</td><td>' + destination + '</td><td>' + frequency + '</td><td>' + firstTrain + '</td><td>' + minutesAway + '</td></tr>')

        // Get initial values from form
    $('.btn').on('click', function(e) {
        e.preventDefault();
        minutesAway = 3;
        train = $('#trainName').val().trim();
        frequency = $('#frequency').val();
        destination = $('#destination').val().trim();
        firstTrain = $('#firstTrain').val().trim();
        firstTrainCv = moment(firstTrain,'hh:mm' ).subtract(1, 'years');
        curTime = moment();
        curTime = moment(curTime).format("hh:mm");
        var minsElapsed = moment(curTime, "hh:mm").diff(moment(firstTrainCv), 'minutes')
          
        console.log(curTime)
        console.log(firstTrain)

        console.log(minsElapsed)
        localStorage.setItem('train', train)
        localStorage.setItem('destination', destination)
        localStorage.setItem('firstTrain', firstTrain)
        localStorage.setItem('frequency', frequency)
        $('tbody').append('<tr><td>' + train + '</td><td>' + destination + '</td><td>' + frequency + '</td><td>' + firstTrain + '</td><td>' + minutesAway + '</td></tr>')

    })


});
