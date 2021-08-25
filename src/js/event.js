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
    
    if(to == "CharMake") {
        make.style.display = "block";
        updateLog.style.display = "none";
    }
    
    else if(to == "UpdateLog") {
        make.style.display = "none";
        updateLog.style.display = "block";
        
        loadUpdateLog();
    }
    
    else if(to == "Dev") {
        
    }
    
}