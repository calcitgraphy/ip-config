var element = document.getElementById('section');
var button = document.getElementById('trogle');
var overlay = document.getElementById('overlay');

fetch('http://ip-api.com/json/')
.then(res => res.json())
.then(function(response){
    console.log(response)
    if (response.status !== "success") {
        overlay.innerHTML = `<b>${response.massage}</b>\n desable add blocker and try again`;
    } else {
        overlay.classList.add("hide");
        document.getElementById('ip').innerHTML = response.query;
        document.getElementById('country').innerHTML = response.country;
        document.getElementById('city').innerHTML = response.city;
        document.getElementById('countryCode').innerHTML = response.countryCode;
        document.getElementById('timezone').innerHTML = response.timezone;
        document.getElementById('isp').innerHTML = response.isp;
        document.getElementById('org').innerHTML = response.org;
    }
})

button.addEventListener('click', function () {
    if (element.style.display !== 'none') {
        element.style.display = 'none';
        button.innerHTML = 'show more';
    } else {
        element.style.display = 'block';
        button.innerHTML = 'show less';
    }
});



