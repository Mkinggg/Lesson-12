

/** Returns human readable datetime string */
function getDatetime(dateOnly) {
    /**
     * Returns human readable datatime string. Currently doesn't support
     * time formatting options, and returns the date in the format of:
     * January 30, 2019.
     *
     * @param {boolean} dateOnly - Removes time from the date string
     */
    let now = new Date();
    let year = now.getFullYear();
    let month = now.toLocaleString('en-us', { month: 'long' });
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    /*
    if (month.toString().length == 1) {
        month = "0" + month;
    }
    if (day.toString().length == 1) {
        day = "0" + day;
    }
    */
    if (hour.toString().length == 1) {
        hour = "0" + hour;
    }
    if (minute.toString().length == 1) {
        minute = "0" + minute;
    }
    if (second.toString().length == 1) {
        second = "0" + second;
    }

    let dateString = month + " " + day + ", " + year
    let timeString = hour + ":" + minute + ":" + second;

    if (dateOnly === true) {
        var datetime = dateString;
    }

    else {
        var datetime = dateString + " " + timeString;
    }

    return datetime;
}


function parseQueryString(queryString) {
    /**
     * Returns an object of key/value pairs created from splitting the
     * querystring in the URL.
     *
     * @param {queryString} string - querystring from the location href
     */
    if (!queryString) {
        return {};
    }

    let queries = queryString.split("&"), params = {}, temp;

    for (let i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split('=');
        if (temp[1] !== '') {
            params[temp[0]] = decodeURIComponent(temp[1]);
        }
    }

    return params;
}
