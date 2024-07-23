

function user() {
    console.log('entered')
    var start = document.getElementById("from").value;
    var end = document.getElementById("to").value;
    var ondate = document.getElementById("ondate").value;
    var condate = document.getElementById("condate").value;
    var adult = document.getElementById("adult").value;
    var child = document.getElementById("child").value;
    var count = document.getElementById("count").value;

    var storing = {
        start: start,
        end: end,
        ondate: ondate,
        condate: condate,
        adult: adult,
        child: child,
        count: count
    }




    fetch('http://localhost:8080/user/user1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(storing),
    })
        .then(response => response.text())
        .then(data => {
            if (data === 'Success') {
                var countValue1 = document.getElementById("from").value;
                var countValue2 = document.getElementById("to").value;
                var countValue = document.getElementById("count").value;
                var countvalue3 = document.getElementById("ondate").value;
                var countvalue4 = document.getElementById("username").value;


                var destinationURL = "details.html?from=" + countValue1 + "&to=" + countValue2 + "&count=" + countValue + "&ondate=" + countvalue3 + "&username=" + countvalue4;


                window.location.href = destinationURL;
                console.log("Redirecting to:", destinationURL);
            } else {
                console.error('Data is not "Success".');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function check() {
    let doc = document.getElementById('from');
    let spec1 = doc.value;

    let doc1 = document.getElementById('to');
    let spec2 = doc1.value;

    let doc2 = document.getElementById('ondate');
    let spec3 = doc2.value;

    doc2.addEventListener('keypress', function () {
        spec3 = this.value;
    });

    idValue();

    function idValue() {
        fetch('http://localhost:8080/addbus/getAdduser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                let found = false;
                data.forEach(Addbus => {
                    if (Addbus.start === spec1 && Addbus.end === spec2 && Addbus.startdate === spec3) {
                        found = true;

                    }
                });
                if (!found) {
                    alert("Bus is not available on that date.")

                    $("#ondate").val("");
                }
            })
            .catch(error => {
                console.error('Error:', error);

            });
    }
}




