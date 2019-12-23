

var button1 = document.getElementById("but");
button1.onclick = InputAge;
var Age = "No";

function InputAge() {
    var greeting = document.getElementsByTagName("h3")[0];
    var input = document.getElementById("text").value;
    input = parseInt(input, 10);
    if (isNaN(input) || input > 100 || input < 1) {
        Age = "No";
        greeting.innerHTML = "Please enter number as your age";
    } else {
        greeting.innerHTML = "Your age is: " + input;
        Age = input;
    }
}

getList();

function getList() {
    $.get('/list', function (data) {
        if (!data) {
            console.log('no data');
        }
        //console.log('The data:');
        //for (var i = 0; i < data.length; i++) {
            //console.log(data[i].name)
        //}
        for (var j = 0; j < data.length; j++) {
            id = data[j].Code;
            var doc = document.getElementById(id);
            Grad = data[j].BirthRate;
            Grad = (20 - parseInt(Grad, 10).toFixed(0)) * 20;
            var color = lightenDarkenColor('006400', Grad);
            //$('#' + id).css.color = color;
            //color = 'green';
            doc.style.fill = color;
        }
    });
    
    
}


    $.get('/list', function (data) {
        for (var j = 0; j < data.length; j++) {
            id = data[j].Code;
            var Some = document.getElementById(id);
            Some.onmouseover = myFunction(id); 
        }
     });


function myFunction(id) {
    $.get('/list', function (data) {
        for (var j = 0; j < data.length; j++) {
            if (data[j].Code == id) {
                Grad = data[j].BirthRate;
                Grad = (20 - parseInt(Grad, 10).toFixed(0)) * 20;
                id = data[j].Code;
                var color = lightenDarkenColor('006400', Grad);
                $('#' + id).hover(function () {
                    $(this).css("fill", "#00FA9A");
                }, function () {
                    $(this).css("fill", color);
                });
            }
        }
    });
};

//source:"https://css-tricks.com/snippets/javascript/lighten-darken-color/"

var lightenDarkenColor = function (col, amt) {

    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    if (r > 255) {
        r = 255;
    } else if (r < 0) {
        r = 0;
    }
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) {
        b = 255;
    } else if (b < 0) {
        b = 0;
    }
    var g = (num & 0x0000FF) + amt;
    if (g > 255) {
        g = 255;
    } else if (g < 0) {
        g = 0;
    }
    return "#" + (g | (b << 8) | (r << 16)).toString(16);
}



var es = document.getElementById('es');
es.onclick = ChangeCountryEs;
function ChangeCountryEs() {
    if (isNaN(Age)) {
        alert('Please enter your age');
    } else {
        var newWindow = window.open("TheCountry.html?cid=" + encodeURI("Spain") + "&age=" + Age, "_self");
    }
}

var pl = document.getElementById('pl');
pl.onclick = ChangeCountryPl;
function ChangeCountryPl() {
    if (isNaN(Age)) {
        alert('Please enter your age');
    } else {
        var newWindow = window.open("TheCountry.html?cid=" + encodeURI("Poland") + "&age=" + Age, "_self");
    }
}

var it = document.getElementById('it');
it.onclick = ChangeCountryIt;
function ChangeCountryIt() {
    if (isNaN(Age)) {
        alert('Please enter your age');
    } else {
        var newWindow = window.open("TheCountry.html?cid=" + encodeURI("Italy") + "&age=" + Age, "_self");
    }
}
 
var fr = document.getElementById('fr');
fr.onclick = ChangeCountryFr;
function ChangeCountryFr() {
    if (isNaN(Age)) {
        alert('Please enter your age');
    } else {
        var newWindow = window.open("TheCountry.html?cid=" + encodeURI("France") + "&age=" + Age, "_self");
    }
}

var pt = document.getElementById('pt');
pt.onclick = ChangeCountryPt;
function ChangeCountryPt() {
    if (isNaN(Age)) {
        alert('Please enter your age');
    } else {
        var newWindow = window.open("TheCountry.html?cid=" + encodeURI("Portugal") + "&age=" + Age, "_self");
    }
}

var de = document.getElementById('de');
de.onclick = ChangeCountryDe;
function ChangeCountryDe() {
    if (isNaN(Age)) {
        alert('Please enter your age');
    } else {
        var newWindow = window.open("TheCountry.html?cid=" + encodeURI("Germany") + "&age=" + Age, "_self");
    }
}

 