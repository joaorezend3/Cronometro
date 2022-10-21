"user strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let exe;
document.form_main.start.onclik = () => start();
document.form_main.stop.onclik = () => start();
document.form_main.reset.onclik = () => reset();
