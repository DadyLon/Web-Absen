$(function () {

    function get_batas_time() {
        return new Date("July 26, 2021 00:00:00").getTime();
    }

    function get_current_time() {
        return new Date().getTime();
    }

    function update_time(updated_time) {
        let updated_time_string = format_to_string(updated_time);
        let remaining_time = $("#waktu");
        remaining_time.html(updated_time_string);
    }

    function calculate() {
        // get batas time
        let batas_time = get_batas_time();
        // get current time
        let current_time = get_current_time();
        // calculate the remaining time
        let remaining_time = Math.floor(batas_time - current_time);

        let remaining_time_in_seconds = Math.floor(remaining_time / 1000);

        let day = Math.floor(remaining_time_in_seconds / (24 * 60 * 60));
        let remainder_hours = Math.floor(remaining_time_in_seconds % (24 * 60 * 60));

        let hours = Math.floor(remainder_hours / (60 * 60));
        let remainder_minutes = Math.floor(remainder_hours % (60 * 60));

        let minutes = Math.floor(remainder_minutes / 60);
        let remainder_seconds = Math.floor(remainder_minutes % 60);

        let seconds = remainder_seconds;

        let updated_time = {
            day: day,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }

        return updated_time;
    }

    function format_to_string(updated_time) {
        let updated_time_string = `
        ${updated_time.day}d: 
        ${updated_time.hours}h: 
        ${updated_time.minutes}m: 
        ${updated_time.seconds}s
        `;

        return updated_time_string;
    }

    function execute() {
        let updated_time = calculate();
        update_time(updated_time);
    }

    setInterval(execute, 1000);

});