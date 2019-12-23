var urlParams = new URLSearchParams(window.location.search);

Country = urlParams.get('cid');
Age = urlParams.get('age');
var Name = document.getElementsByTagName("h1")[0];
Name.innerHTML = "The Country: " + Country + "</br> Your age is: " + Age;
var DataStream = document.getElementsByTagName("h2")[0];
var body = document.getElementsByTagName('aside')[0];
var y20, y40, y60;
$.get('/fertility', function (data) {
    y20 = data[0].twenty;
    y40 = data[0].fourty;
    y60 = data[0].sixty;
    newdiv = document.createElement('div');
    Name.appendChild(newdiv);  
    Name.insertBefore(newdiv, body.nextSibling);
    newdiv.innerHTML = '</br> Overall chances of pregnancy within the age</br>  20 years: ' + y20 + '% ' + '</br>  40  years: ' + y40 + '%' + '<br> 60 years: ' + y60 + '%';
});



getList();
function getList() {
    $.get('/list', function (data,) {
        if (!data) {
            console.log('no data');
        }
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == Country) {
                var Chance;
                newdiv = document.createElement('div');
                newdiv.id = 'divC';
                Name.appendChild(newdiv);
                Name.insertBefore(newdiv, body.nextSibling)
                newdiv.innerHTML = '</br>  BirthRate: ' + data[i].BirthRate;
                if (parseInt(Age, 10) < 20) {
                    Chance = (y20 / 100 * data[i].BirthRate / 500);
                }
                if ((parseInt(Age, 10) > 20) && (parseInt(Age, 10) < 40)) {
                    Chance = ((y20 - y40) / 20 * Age / 100 * data[i].BirthRate / 500);
                }
                if ((parseInt(Age, 10) > 40) && (parseInt(Age, 10) < 60)) {
                    Chance = ((y40 - y60) / 20 * Age / 100 * data[i].BirthRate / 500);
                }
                if (parseInt(Age, 10) > 60) {
                    Chance = (y60 / 100 * data[i].BirthRate / 500);
                }
                newdiv.innerHTML = newdiv.innerHTML + '</br>  Your chances of having baby are: ' + Chance.toFixed(5) + '%';
            }
        }
    });
}