function getRandomUntil(limit) {
    return Math.floor(Math.random() * limit);
}

function init() {
    idiom = idioms[getRandomUntil(idioms.length)]; // "AABC"
    unknownIndex = getRandomUntil(idiom.length);
    console.log(unknownIndex)

    for (let i = 0; i < idiom.length; i++) {
        UIWords[i].innerHTML = idiom[i]
    }

    UIWords[unknownIndex].innerHTML = "？";

    answerChar = idiom[unknownIndex];

    score = 0;

    // update button char
    updateButtonChar()

    // insert correct answer
    UIButtons[getRandomUntil(UIButtons.length)].innerHTML = answerChar
}

function updateButtonChar() {
    let candidate = ""
    console.log(answerChar)
    for (let i = 0; i < UIButtons.length;) {
        let char = getRandomChar()
        if (candidate.indexOf(char) != -1 || candidate.indexOf(answerChar) != -1) continue
        candidate += char
        UIButtons[i].innerHTML = char
        i++
    }
}

function getRandomChar() {
    let idiom = idioms[getRandomUntil(idioms.length)]
    return idiom[getRandomUntil(idiom.length)]
}

function btnClicked(i) {
    console.log("guessed: " + UIButtons[i].innerHTML)
    console.log("real answer: " + answerChar)
    if (UIButtons[i].innerHTML == answerChar) {
        // CORRECT

        // update button char
        updateButtonChar()

        // refresh question
        idiom = idioms[getRandomUntil(idioms.length)]
        for (let i = 0; i < 4; i++) {
            UIWords[i].innerHTML = idiom[i]
        }
        unknownIndex = getRandomUntil(4)
        UIWords[unknownIndex].innerHTML = "？"
        answerChar = idiom[unknownIndex]

        // insert correct answer
        UIButtons[getRandomUntil(UIButtons.length)].innerHTML = answerChar

        // increase score
        score++

        // visual effects
        document.getElementsByClassName("answerzone")[0].style.backgroundColor = '#00DD00';
        document.getElementsByClassName("answerzone")[0].style.boxShadow = '0px 0px 20px green'
        setTimeout(() => {
            document.getElementsByClassName("answerzone")[0].style.backgroundColor = 'pink';
            document.getElementsByClassName("answerzone")[0].style.boxShadow = '0px 0px 0px green'
        }, 500);
    } else {
        // NOT CORRECT

        // visual effects
        document.getElementsByClassName("answerzone")[0].style.backgroundColor = '#EE0000';
        document.getElementsByClassName("answerzone")[0].style.boxShadow = '0px 0px 20px red'
        setTimeout(() => {
            document.getElementsByClassName("answerzone")[0].style.backgroundColor = 'pink';
            document.getElementsByClassName("answerzone")[0].style.boxShadow = '0px 0px 0px red'
        }, 500);


        alert('oops, try again\n' + '答案是：' + idiom)
        init()
    }
    document.getElementById('score').innerHTML = score
}

var idioms = ['飲水思源', '朝三暮四', '樂不思蜀', '百步穿楊', '死裡逃生', '座如針氈', '杯弓蛇影', '金榜題名', '珊珊來遲', '咫尺千里',
"一毛不拔","掩耳盜鈴","一丘之貉","囫圇吞棗","班門弄斧","朝三暮四","水落石出","名落孫山","胸有成竹","竭澤而漁","指鹿為馬","天衣無縫","舉一反三","江郎才盡","青出於藍","口若懸河","驚弓之鳥","含沙射影","一敗塗地","草木皆兵","投筆從戎","東窗事發","畫蛇添足","勢如破竹","滄海桑田","望梅止渴","司空見慣","南轅北轍","夜郎自大","信口雌黃","狼狽為奸","狐假虎威","作法自斃","為虎作倀","如火如荼","老馬識途","杞人憂天","一暴十寒","守株待兔","不學無術","四面楚歌","奇貨可居","刻舟求劍","走馬看花","後來居上","負荊請罪","對牛彈琴","一鼓作氣","杯弓蛇影","紙上談兵","破鏡重圓","東山再起","樂不思蜀","濫竽充數","打草驚蛇","揠苗助長","功虧一簣","入木三分","一鳴驚人","螳臂當車","死灰復燃","咄咄逼人","出奇制勝","出類拔萃","一竅不通","食古不化","一日千里","吹毛求疵","一諾千金","騎虎難下","投鼠忌器","孤注一擲","坐井觀天","滄海一粟","門可羅雀","攀龍附鳳","痛心疾首","易如反掌","膾炙人口","趾高氣揚","唾面自乾","推心置腹","病入膏肓","蕭規曹隨","庸人自擾","緣木求魚","雙管齊下","一言九鼎","自相矛盾","扶搖直上","舉案齊眉","閉門造車","歧路亡羊","風聲鶴唳","老當益壯","車水馬龍","未雨綢繆","先發制人","洛陽紙貴","孤陋寡聞","不共戴天","滿腹經綸","飲鴆止渴","退避三舍","世外桃源","剛愎自用","出爾反爾","目不識丁","水深火熱","假公濟私","孤掌難鳴","偃旗息鼓","妄自尊大","百折不撓","拾人牙慧","耳濡目染","得心應手","乘風破浪","杯水車薪","車載斗量","滿城風雨","燃眉之急","言不由衷","敝帚自珍","兔死狗烹","拋磚引玉","門庭若市","不倫不類","虎頭蛇尾","空中樓閣","天經地義","殺身成仁","心猿意馬","一視同仁","雪中送炭","甘拜下風","無地自容","群策群力","過河拆橋","有備無患","裹足不前","前倨後恭","弄巧成拙","噤若寒蟬","戰戰兢兢","瓜田李下","借花獻佛","故步自封","笑裡藏刀","望塵莫及","水到渠成","半途而廢","一籌莫展","抱薪救火","大器晚成","莫逆之交","芒刺在背","按圖索驥","強弩之末","一網打盡","蜀犬吠日","曲突徙薪","矯枉過正","吳牛喘月","居安思危","賓至如歸","不恥下問","不可救藥","河東獅吼","開門見山","手舞足蹈","土崩瓦解","愛屋及烏","不脛而走","大義滅親","東施效顰","從善如流","越俎代庖","水滴石穿","袖手旁觀","炙手可熱","因噎廢食","因勢利導","草菅人命","排難解紛","畏首畏尾","如魚得水","流芳百世","眾志成城","管中窺豹","南柯一夢","名不虛傳","束之高閣","喪心病狂","見異思遷","明察秋毫","忍辱負重","臥薪嘗膽","買櫝還珠","作威作福","兩袖清風","明目張膽","肝膽相照","不求甚解","青黃不接","民不聊生","明哲保身","妄自菲薄","自慚形穢","泥牛入海","急如星火","背道而馳","休戚相關","同舟共濟","披星戴月","相敬如賓","鶴立雞群","重整旗鼓","格格不入","山窮水盡","脣亡齒寒","功敗垂成","旁若無人","青梅竹馬","五體投地","文過飾非","強詞奪理","投鞭斷流","天花亂墜","不速之客","勢不兩立","開誠布公","別出心裁","大公無私","落井下石","一絲不苟","力不從心","撲朔迷離","舉足輕重","臨渴掘井","再接再厲","八面玲瓏","姍姍來遲","一揮而就","明日黃花","迎刃而解","非驢非馬","百發百中","罄竹難書","自作自受","自暴自棄","一意孤行","汗牛充棟","仰人鼻息","高枕無憂","家喻戶曉","安步當車","乳臭未乾","開門揖盜","危如累卵","一見如故","得意忘形","怒髮衝冠","一塵不染","三令五申","愚公移山","口蜜腹劍","短兵相接","不寒而慄","別開生面","枕戈待旦","事半功倍","數典忘祖","中流砥柱","欲蓋彌彰","對症下藥","按部就班","錦上添花","尾大不掉","抱殘守缺","熟能生巧","鞭長莫及","開卷有益","得隴望蜀","虎口餘生","沾沾自喜","海市蜃樓","口是心非","毛遂自薦","不毛之地","大發雷霆","外強中乾","聲東擊西","井井有條","六神無主","平步青雲","一知半解","自怨自艾","曲高和寡","本末倒置","怨聲載道","良莠不齊","指桑罵槐","忍氣吞聲","投桃報李","空前絕後","水乳交融","否極泰來","飲水思源","夜以繼日","防微杜漸","岌岌可危","克紹箕裘","兩敗俱傷","兩全其美","才高八斗","沽名釣譽","盲人摸象","因陋就簡","見獵心喜","以訛傳訛","一落千丈","信口開河","欣欣向榮","巧取豪奪","虎視眈眈","怨天尤人","水泄不通","一氣呵成","觸類旁通","殺雞取卵","面面相覷","一針見血","老生常談","初出茅廬","萬籟俱寂","當頭棒喝","完璧歸趙","三緘其口","從容不迫","九牛一毛","滄海遺珠","鐵面無私","望眼欲穿","笑容可掬","揮金如土","爐火純青","魚目混珠","嗤之以鼻","駕輕就熟","鴉雀無聲","舉棋不定","痛定思痛","黔驢技窮","孜孜不倦","急流勇退","赴湯蹈火","生吞活剝","暴虎馮河","喋喋不休","包藏禍心","四海為家","請君入甕","聞雞起舞","旗鼓相當","倒行逆施","差強人意","樂不可支","談虎色變","分道揚鑣","曇花一現","禮尚往來","節外生枝","高朋滿座","腳踏實地","前功盡棄","招搖過市","井底之蛙","梁上君子","畫龍點睛","寄人籬下","開源節流","既往不咎","興高采烈","張冠李戴","匹夫之勇","食言而肥","伯仲之間","走投無路","呼風喚雨","茅塞頓開","生靈塗炭","登峰造極","正襟危坐","目中無人","順水推舟","節衣縮食","招搖撞騙","杯盤狼藉","游刃有餘","懸崖勒馬","肆無忌憚","手不釋卷","春風得意","不足掛齒","不識時務","石破天驚","覆水難收","難兄難弟","海闊天空","偷天換日","七上八下","孤芳自賞","束手無策","心心相印","空穴來風","步步為營","坐以待斃","一舉兩得","心照不宣","一介不取","守口如瓶","人云亦云","自投羅網","人面獸心","忘恩負義","力透紙背","成竹在胸","小心翼翼","一目十行","大逆不道","口碑載道","失之交臂","上行下效","一刀兩斷","川流不息","毛骨悚然","天涯海角","先聲奪人","心不在焉","心花怒放","九死一生","三思而行","三長兩短","汗流浹背","白駒過隙","寸草春暉","天造地設","如數家珍","如膠似漆","冰消瓦解","得寸進尺","相形見絀","情不自禁","弱不禁風","酒囊飯袋","想入非非","虛張聲勢","虛與委蛇","進退維谷","後生可畏","胸無點墨","鬼鬼祟祟","置若罔聞","風馳電掣","捕風捉影","義不容辭","異想天開","隔靴搔癢","雞鳴狗盜","當仁不讓","鳳毛麟角","滿面春風","恍然大悟","美輪美奐","穿鑿附會","咬文嚼字","亡羊補牢","諱疾忌醫","敷衍塞責","亦步亦趨","葉公好龍","雕蟲小技","暗箭傷人","永垂不朽","隨波逐流","出人頭地","暴跳如雷","克勤克儉","名副其實","優柔寡斷","雞犬不寧","玩物喪志","沆瀣一氣","抱頭鼠竄","物以類聚"
]
var idiom = idioms[getRandomUntil(idioms.length)];
var UIWords = document.getElementsByClassName("qword");
var unknownIndex = getRandomUntil(idioms.length);
var answerChar = "";
var score = 0;
var UIButtons = document.getElementsByClassName("word")
init()


// 三次挑戰機會
// 考慮把選項改成四個 done

// 答對視覺效果 done
// 答錯搜尋結果