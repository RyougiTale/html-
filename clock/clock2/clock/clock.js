(function () {
    var CLOCK_DOM = document.getElementById('clock-bg');
    var MINUTE_DOM = document.getElementById('minute');
    var HOUR_DOM = document.getElementById('hour');
    var SECOND_DOM = document.getElementById('second');

    for (var i = 0; i < 60; i++) {
        var scaleDom = document.createElement('div');
        scaleDom.className = 'scale'
        CLOCK_DOM.appendChild(scaleDom);
    }

    var scaleDomList = document.querySelectorAll('.scale');
    var translate = 'translateY(90px)';
    for (var i = 0; i < 60; i++) {
        var deg = 360 / 60 * (i + 1);
        scaleDomList[i].style.transform = getDeg(deg) + translate;
    }

    function getDeg(deg) {
        return 'rotate(' + deg + 'deg)'
    }

    var translate = 'translateY(35px)';

    function startTime() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        SECOND_DOM.style.transform = getDeg(6 * second - 180) + translate;
        MINUTE_DOM.style.transform = getDeg(6 * minute + 0.1 * second - 180) + translate;
        HOUR_DOM.style.transform = getDeg(30 * hour + 0.5 * minute- 180) + translate;
        setTimeout(startTime, 1000);
    }
    startTime();
}())