window.onload = function() {
    window.oncontextmenu = function() {
        return false;
    }
    
    window.onselectstart = function () {
        return false;
    }
    
    window.ondragstart = function () {
        return false;
    }
}

function changeSection(to) {
    if(to == "CharMake") {
        document.getElementById("make").style.display = "block";
        document.getElementById("updateLog").style.display = "none";
    }
    
    else if(to == "UpdateLog") {
        document.getElementById("make").style.display = "none";
        document.getElementById("updateLog").style.display = "block";
        loadUpdateLog();
    }
    
    else if(to == "Dev") {
        
    }
    
}