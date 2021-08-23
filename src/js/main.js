function doGen() {
    var _name = document.getElementById("name").value;
    var _gen = document.getElementById("gen").value;
    
    console.log(_name);
    gen(_name, _gen);
}

function gen(name, gen) {
    var girl_hair = [ "트윈테일", "장발", "포니테일, 웨이브", "포니테일, 일반", "단발", "중단발", "양갈래, 웨이브, 하이", "양갈래, 웨이브, 로우", "양갈래, 일반, 하이", "양갈래, 일반, 로우","사이드 테일", "반묶음", "히메 컷", "사무라이 컷", "땋은 머리", "초장발", "뿌까머리(똥머리 양쪽으로 있는거)", "반묶음", "레게 머리", "칼 단발", "장발, 웨이브 (여신머리)"];
    
    var boy_hair = ["포마드 컷", "박세로이 컷", "대머리", "변발", "투블럭", "베이비펌", "스핀 스왈로펌", "시스루 컷", "댄디 컷", "쉐도우 펌", "에즈 펌", "쉼표 머리", "울프 컷", "레게 머리"];
    
    var front_hair = [ "일반", "시야포기 컷", "중2병 컷", "시스루 뱅", "풀뱅", "처피 뱅" ];
    
    var hair_color_type = [ "단색(일반)", "시크릿 투톤 (안팎이 다름)", "투톤 (위 아래가 다름)", "헤어 브릿지 (머리카락 마디가 다름)","옴브레 (그라데이션 효과로 위 아래가 다름)" ];
    
    var age = getRandom(5, 25);
    
    var personal = [
        "온화한",
        "다정한",
        "귀여운",
        "섹시한",
        "여왕님 또는 왕님 (도S)",
        "얀데레",
        "소심한",
        "메가데레",
        "쿨데레",
        "조용한",
        "반장",
        "댕청한",
        "까칠한",
        "밝은",
        "무심한",
        "츤데레",
        "냉정한"
    ];
    
    var chr = [
        "낙천적인 (태평한)",
        "약점잡힌",
        "우울증",
        "희생적인",
        "겸손한",
        "망상을 많이 하는",
        "자신감(자기애) 넘치는",
        "허영심이 있는",
        "게으른",
        "똑똑한",
        "겁이 많은",
        "장난이 많은",
        "고지식한",
        "로리콘",
        "쇼타콘",
        "거짓말 쟁이",
        "결백증",
        "융통성 없는",
        "빌런",
        "매사에 성급함",
        "마조히스트",
        "먹보",
        "부끄럼 쟁이",
        "중2 병",
        "정의로움",
        "학대 받음",
        "인기 많은",
        "강아지"
    ];
    console.log(getRandom(0, girl_hair.length-1));
    
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
    
    document.getElementById("result").innerHTML = age+"세이고 "+
        gen+"인 '"+
        
        name+"'(은)는 "+
        
        hair+"의 헤어스타일을 가지고 있으며 앞머리는 "+
        
        front_hair[getRandom(0, front_hair.length-1)]+
        
        "입니다.<br>그리고 머리 색상 타입은 "+hair_color_type[getRandom(0, hair_color_type.length-1)]+
        
        "이고 "+personal[getRandom(0, personal.length-1)]+" 성격입니다.";
}

function getChrStr(method, chr, imFirst) {
    if(method == "and") {
        
        // 문장의 연결어 조합 반환
        if(chr[chr.length-2] == "적" && chr[chr.length-1] == "인") {
            var _originContent = chr.split("적인")[0];
            
            if(imFirst) {
                return _originContent+"적이고";   
            } else {
                return _originContent+"적이며";   
            }
        }
        
        if(chr[chr.length-1] == "한") {
            var _originContent = chr.slice(0, chr.length-1);
            
            if(imFirst) {
                return _originContent+"하고";
            } else {
                return _originContent+"하며";
            }
        }
        
        if(chr[chr.length-2] == "하" && chr[chr.length-1] == "는") {
            
            var _originContent = chr.slice(0, chr.length-2);
                                           
            if(imFirst) {
                return _originContent+"하고";
            } else {
                return _originContent+"하며";
            }
        }
        
        if(chr[chr.length-2] == "치" && chr[chr.length-1] == "는") {
            
            var _originContent = chr.slice(0, chr.length-2);
                                           
            if(imFirst) {
                return _originContent+"치고";
            } else {
                return _originContent+"치며";
            }
        }
        
        if(chr[chr.length-2] == "있" && chr[chr.length-1] == "는") {
            
            var _originContent = chr.slice(0, chr.length-2);
            
            if(imFirst) {
                return _originContent+"있고";   
            } else {
                return _originContent+"있으며";
            }
        }
        
        if(chr[chr.length-2] == "많" && chr[chr.length-1] == "은") {
            
            var _originContent = chr.slice(0, chr.length-2);
            
            if(imFirst) {
                return _originContent+"많은";   
            } else {
                return _originContent+"많으며";
            }
        }
        
        switch(chr) {
            case "약점잡힌":
                return "약점이 잡혀 있으며";
                
            case "우울증":
                return "우울증 속에 살고 있으며";
                
                case "우울증":
                return "우울증 속에 살고 있으며";
        }   
    } 
    else {
        
        // 문자의 끝맺음 반환
        switch(chr) {
        
        }
    }
}