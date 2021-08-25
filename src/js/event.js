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
    
    window.onclick = function(e) {
        if(e.target.parentElement.id == "submit") {
            doGen();
        }
    }
}

function changeSection(to) {
    var make = document.getElementById("make");
    var updateLog = document.getElementById("updateLog");
    var dev = document.getElementById("dev");
    
    if(to == "CharMake") {
        dev.style.display = "none";
        updateLog.style.display = "none";
        make.style.display = "block";
    }
    
    else if(to == "UpdateLog") {
        make.style.display = "none";
        dev.style.display = "none";
        updateLog.style.display = "block";
        
        loadUpdateLog();
    }
    
    else if(to == "Dev") {
        make.style.display = "none";
        updateLog.style.display = "none";
        dev.style.display = "block";
    }
    
}