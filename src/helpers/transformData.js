export default function transformData(data) {
    const days = Math.floor(data / (24 * 60 * 60 * 1000));
    const hours = Math.floor((data % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) + 1;
    const minutes = Math.floor((data % (60 * 60 * 1000)) / (1000 * 60));
    const seconds = Math.floor((data % (60 * 1000)) / 1000);

    if (data < 0) {
        clearInterval();
    } else {
        return {
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds,
        };
    }
}
