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