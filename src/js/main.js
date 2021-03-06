function doGen() {
    var _name = document.getElementById("name").value;
    var _gen = document.getElementById("gen").value;
    
    if(_name == "") {
        setMessage("캐릭터 이름이 없어요.");
        return;
    }
    
    console.log(_name);
    gen(_name, _gen);
}

function gen(name, gen) {
    var result_parent = document.getElementById("result");
    var result = document.getElementById("result-text");
    
    result_parent.style.opacity = "0%";
    
    // 머리 -----------------
    var hair = "오류야 싯팔!";
    
    if(gen == "남자") {
        hair = boy_hair[getRandom(0, boy_hair.length-1)];
    }
    
    else if(gen == "여자") {
        hair = girl_hair[getRandom(0, girl_hair.length-1)];
    } else {
        
        if(getRandom(0, 1) == 0) {
            hair = boy_hair[getRandom(0, boy_hair.length-1)];
        } else {
            hair = girl_hair[getRandom(0, girl_hair.length-1)];
        }
    }
    
    // 결과 출력 -----------------
    
    console.log(result);
    if(name == "이준영" && gen == "남자") {
        result.innerHTML = "졸라 잘생겼습니다.";
        document.getElementById("result").style.opacity = "100%";
        return;
    }
    
    var age = getRandom(5, 25);
    
    setMessage(age+"세이고 "+
        gen+"인 '"+
        
        name+"'(은)는 "+
        
        hair+"의 헤어스타일을 가지고 있으며 앞머리는 "+
        
        front_hair[getRandom(0, front_hair.length-1)]+
        
        "입니다.<br>그리고 머리 색상 타입은 "+hair_color_type[getRandom(0, hair_color_type.length-1)]+
        
        "이며 "+personal[getRandom(0, personal.length-1)]+" 성격을 지니고 있습니다.<br>또한 이 캐릭터는 "+getChrStr("and",chr[getRandom(0, chr.length-1)], true)+" "+getChrStr("and",chr[getRandom(0, chr.length-1)], false)+" "+chr[getRandom(0, chr.length-1)]+" 성향을 보입니다.");
}

function setMessage(str) {
    var result_parent = document.getElementById("result");
    var result = document.getElementById("result-text");
    
    result_parent.style.opacity = "0%";
    
    result.innerHTML = str;
    
    document.getElementById("result").style.opacity = "100%";
}

function getChrStr(method, chr, imFirst) {
    if(method == "and") {
        
        // 문장의 연결어 조합 반환
        if(chr[chr.length-2] == "적" && chr[chr.length-1] == "인") {
            var _originContent = chr.split("적인")[0];
            
            return _originContent+(imFirst ? "적이고" : "적이며");   
        }
        
        if(chr[chr.length-1] == "한") {
            var _originContent = chr.slice(0, chr.length-1);
            
            return _originContent+(imFirst ? "하고" : "하며");   
        }
        
        if(chr[chr.length-2] == "하" && chr[chr.length-1] == "는") {
            
            var _originContent = chr.slice(0, chr.length-2);
                                           
            return _originContent+(imFirst ? "하고" : "하며");   
        }
        
        if(chr[chr.length-2] == "치" && chr[chr.length-1] == "는") {
            
            var _originContent = chr.slice(0, chr.length-2);
                                           
            return _originContent+(imFirst ? "치고" : "치며");   
        }
        
        if(chr[chr.length-2] == "있" && chr[chr.length-1] == "는") {
            
            var _originContent = chr.slice(0, chr.length-2);
            
            return _originContent+(imFirst ? "있고" : "있으며");   
        }
        
        if(chr[chr.length-2] == "많" && chr[chr.length-1] == "은") {
            
            var _originContent = chr.slice(0, chr.length-2);
            
            return _originContent+(imFirst ? "많고" : "많으며");  
        }
        
        switch(chr) {
            case "약점잡힌":
                return "약점이 잡혀 "+(imFirst ? "있고" : "있으며");
                
            case "우울증":
                return "우울증 속에 살고 "+(imFirst ? "있고" : "있으며");
                
            default:
                return chr+(imFirst ? "이고" : "이며");
        }   
    } 
    else {
        
        // 문자의 끝맺음 반환
        switch(chr) {
        
        }
    }
}