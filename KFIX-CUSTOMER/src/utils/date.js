export const formatTimeFromCreateAt = (createAt) => {
    const createAtArr = createAt.split(",")
    //console.log(createAtArr);
    let time = createAtArr[0];
    //console.log(time);
    let timeArr = time.split(":")
    //console.log(timeArr);
    let hour = Number(timeArr[0])
    let minute = Number(timeArr[1])
    if(hour < 10) {
        hour = '0' + hour
    } 
    if(minute < 10){ 
        minute = '0' + minute
    }
    const timeFormat = hour + ':' + minute + ',' + createAtArr[1]
    //console.log(timeFormat);
    return timeFormat
}