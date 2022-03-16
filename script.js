function setUpStorage() {
    if (localStorage.workoutID === undefined) {
        localStorage.workoutID = "0";
    };
    if (localStorage.activityID === undefined) {
        localStorage.activityID = "0";
    };
}

function incrementID(name) {
    let i = Number(localStorage[name]);
    i = i + 1;
    localStorage[name] = i;
}

function getData() {
    let d = document.getElementById("date");
    d = d.value;
    let a = document.getElementById("activity");
    a = a.value;
    let s = document.getElementById("sets");
    s = s.value;
    let obj = {
        "id": localStorage.workoutID, 
        "date": d,
        "activity": a,
        "sets": s,
    };
    let str = JSON.stringify(obj);
    localStorage["workout-" + localStorage.workoutID] = str;
    incrementID("workoutID");
    a = document.getElementById("activity");
    a.selectedIndex = 0;
    s = document.getElementById("sets");
    s.value = "";
}

function getWorkout(id) {
    if (localStorage["workout-" + id]) {
        return JSON.parse(localStorage["workout-" + id]);
    } else {
        return false;
    }
}


function getWorkoutsByDate() {
    let output = [];
    let date = document.getElementById("search-date");
    date = date.value;
    let temp;
    let exclude = ["length", "clear", "getItem", "key", "removeItem", "setItem"];
    for (let k in localStorage) {
        if(exclude.includes(k) === false) {
            temp = JSON.parse(localStorage[k])
            if(temp.date === date) {
                output.push(temp);
            }
        }
    }
    return output;
}

setUpStorage();
