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