export function getRandomColor() {
    let values = ["#7A7163", "#E3223C", "#3D9D2D", "#E5267C", "#2F3BAF", "#37ACC9", "#14C271", "#606664", "#00513B", "#A04F63", "#60B54A", "#BD318F", "#FD7938", "#3A336E", "#277E73", "#795417", "#86515B", "#2E7590", "#5D9257"];
    return values[Math.floor((Math.random()*values.length))];
}