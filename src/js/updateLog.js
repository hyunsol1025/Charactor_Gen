var updateLog = [
    "[2021-08-24] UI를 개선했습니다.",
    "[2021-08-24] 업데이트 내역이 추가되었습니다."
];

function loadUpdateLog() {
    
    var updateLogArea = document.getElementById("updateLogArea");
    
    updateLogArea.innerHTML = "";
    updateLog.forEach( function(str) {
        updateLogArea.innerHTML += str+"\n";
    });s
}