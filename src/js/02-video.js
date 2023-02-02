import player from "@vimeo/player";
import throttle from "lodash.throttle";

const current_Time = "videoplayer-current-time";
const frame = document.querySelector('iframe');
const Player = new player(frame);
Player.on('timeupdate', throttle(onPlay, 1000));

function onPlay ({seconds}){
    localStorage.setItem(current_Time,seconds);
}

function setTime(){
    if(!localStorage.getItem(current_Time)){
        return;
    }
    Player.setCurrentTime(localStorage.getItem(current_Time));
    console.log(localStorage);
}

setTime();
