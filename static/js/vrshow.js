var pk_works_main;
var mapModalEl;
var _user_view_uuid;
var _name;
var _userList;
var plugins_init_function = new Array();//接收显示时的init方法

//krpano loadcomplete调用
function showPanoBtns(sceneCount){
    if (sceneCount > 1) {
        $(".vrshow_container_3_min .img_desc_container_min:eq(0)").show();
    }else{
        $(".vrshow_container_3_min .img_desc_container_min:eq(0)").hide();
    }
    $("#panoBtns").show();
}

function fullscreen(el){
    //krpano.call("switch(fullscreen);");
    //launchFullScreen(document.documentElement);
    if($(el).hasClass('btn_fullscreen')){
        launchFullScreen(document.getElementById('fullscreenid'));
        var krpano = document.getElementById('krpanoSWFObject');
        krpano.call("skin_showthumbs(false);");
    }else{
        exitFullscreen();
    }
    toggleFullscreenBtn(el);
}

function launchFullScreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
    else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function toggleFullscreenBtn(el){
    if($(el).hasClass("btn_fullscreen")){
        $(el).removeClass("btn_fullscreen");
        $(el).addClass("btn_fullscreen_off");
    }else{
        $(el).removeClass("btn_fullscreen_off");
        $(el).addClass("btn_fullscreen");
    }
}

function toggleBtns(flag){
    if(flag){
        $("#panoBtns").show();
    }else{
        $("#panoBtns").hide();
        var krpano = document.getElementById('krpanoSWFObject');
        krpano.call('skin_showthumbs(false);');
    }
}

function showWebVR(){
    var krpano = document.getElementById('krpanoSWFObject');
    var webvr = krpano.get("webvr");
    webvr.entervr();
}



function showthumbs(){
    var krpano = document.getElementById('krpanoSWFObject');
    krpano.call("skin_showthumbs();");
}



function hidePictext() {
    $('#pictextModal').modal('hide');
    toggleBtns(true);
}

function showPictext(title,content,name) {
    toggleBtns(false);
    var krpano = document.getElementById('krpanoSWFObject');
    $('#pictextContent').html('');
    $('#button-area').html('');
    $("#pictextAvatar").attr('src', '');

    //scene 1 start
    if (name=='schp_jwrw5fekh3') {
        if (localStorage.getItem('event1')=='true') {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('我來想想，對行人最好的做法是？');
            $('#button-area').append('<button type="button" class="btn btn-cus1" id="event1_sol1">移除機車格<br>建立人行道</button>');
            $('#button-area').append('<button type="button" class="btn btn-cus1" id="event1_sol2">規定不能<br>停機車</button>');
            $('#pictextModal').modal("show");
            $("#event1_sol1").click(function(){
                showPictext('事件一', '事件一', 'event1_sol1_msg');
            });
            $("#event1_sol2").click(function(){
                showPictext('事件一', '事件一', 'event1_sol2_msg');
            });
        } else {
            $("#pictextAvatar").attr('src', 'skin/character/01_擔心.png');

            $('#pictextContent').append('前面好像發生什麼事了，快過去看看');
            // $('#pictextContent').append('是啊，除了建造人本交通建設改善環境，自己本身也要遵守交通規則，了解道安知識，才能用路平安！');
            $('#button-area').append('<button type="button" class="btn btn-next" id="event1"></button>');
            // $('#button-area').append('<button type="button" class="btn btn-cus1" id="event1_sol1">移除機車格<br>建立人行道</button>');
            // $('#button-area').append('<button type="button" class="btn btn-cus1" id="event1_sol2">規定不能<br>停機車</button>');
            $('#pictextModal').modal("show");
            $("#event1").click(function(){
                // shootcut 1
                // krpano.call('loadscene("scene_7acf894b669a3e2b", null, MERGE, ZOOMBLEND(1.0, 2.0, easeoutquart));');

                krpano.call('addImgTextHotSpot("resource/images/76e464114d75128d.png","schp_md2jcgzbpt",'+html_encode("事件一")+','+(-85.360528863935)+','+(-2.8240510800472)+',0,false,true,'+imgtext_encode("事件一")+',"",'+"small"+')');
                krpano.call('set(hotspot["schp_jwrw5fekh3"].visible ,false)')
                hidePictext()
            });
        }
    }
    if (name=='schp_md2jcgzbpt') {
        $("#pictextAvatar").attr('src', 'skin/character/1-1.png');
        $('#pictextContent').append('這裡停滿了機車好難走，我差點要被車撞到了！');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event1_in1"></button>');
        $('#pictextModal').modal("show");
        $("#event1_in1").click(function(){
            showPictext('事件一', '事件一', 'event1_in2');
        });
    }
    if (name=='event1_in2') {
        $("#pictextAvatar").attr('src', 'skin/character/1-1.png');
        $('#pictextContent').append('我該怎麼辦呢？也許能去問問阿秋。');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event1_in3"></button>');
        $('#pictextModal').modal("show");
        $("#event1_in3").click(function(){
            localStorage.setItem('event1', 'true');
            krpano.call('set(hotspot["schp_jwrw5fekh3"].visible ,true)')
            krpano.call('set(hotspot["schp_md2jcgzbpt"].visible ,false)')

            hidePictext()
        });
    }
    if (name=='event1_sol1_msg') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('來看看人本交通的魔法吧！');
        $('#button-area').append('<button type="button" class="btn btn-wand" id="event1_nextscene"></button>');
        $('#pictextModal').modal("show");
        $("#event1_nextscene").click(function(){
            hidePictext()
            krpano.call('loadscene("scene_e712c9d6e6659640", null, MERGE, ZOOMBLEND(1.0, 2.0, easeoutquart));');
        });
    }
    if (name=='event1_sol2_msg') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('嗯？好像可以再想想有沒有更好的辦法？');
        $('#button-area').append('<button type="button" class="btn btn-cus3" id="event1_sol1_msg_back">返回</button>');
        $('#pictextModal').modal("show");
        $("#event1_sol1_msg_back").click(function(){
            showPictext('事件一', '事件一', 'schp_jwrw5fekh3');
        });
    }
    //scene 1 end

    //scene 2 start
    if (name=='schp_gbif4dtmjw') {
        if (localStorage.getItem('event2')=='true') {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('接下來去下一關，看看其他交通事件吧！');
            $('#button-area').append('<button type="button" class="btn btn-cus3" id="event2_sol1">前往下一關</button>');
            $('#pictextModal').modal("show");
            $("#event2_sol1").click(function(){
                hidePictext()
                krpano.call('loadscene("scene_c3fbc0cf1954e842", null, MERGE, ZOOMBLEND(1.0, 2.0, easeoutquart));');
            });
        } else {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('哇！施展人本交通魔法後，變得好不一樣喔！不知道他覺得怎麼樣？去問問他！');
            $('#button-area').append('<button type="button" class="btn btn-next" id="event2"></button>');
            $('#pictextModal').modal("show");
            $("#event2").click(function(){
                krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_hdfmtkhdmt",'+html_encode("事件二")+','+(-91.08143970606)+','+(-3.0908234328123)+',0,false,true,'+imgtext_encode("事件二")+',"",'+"small"+')');
                krpano.call('set(hotspot["schp_gbif4dtmjw"].visible ,false)')
                hidePictext()
            });
        }
    }
    if (name=='schp_hdfmtkhdmt') {
        $("#pictextAvatar").attr('src', 'skin/character/1-2.png');
        $('#pictextContent').append('有了人行道後，走路的空間變好大，我能安心上下學了！');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event2_in1"></button>');
        $('#pictextModal').modal("show");
        $("#event2_in1").click(function(){
            localStorage.setItem('event2', 'true');
            krpano.call('set(hotspot["schp_gbif4dtmjw"].visible ,true)')
            krpano.call('set(hotspot["schp_hdfmtkhdmt"].visible ,false)')
            hidePictext()
        });
    }
    //scene 2 end

    //scene 3 start
    if (name=='schp_fg8ct3syh8') {
        if (localStorage.getItem('event3')=='true') {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('要怎麼樣才能讓轉彎的車，不會撞到在斑馬線上的行人呢？');
            $('#button-area').append('<button type="button" class="btn btn-cus1" id="event3_sol1">將行穿線內縮</button>');
            $('#button-area').append('<button type="button" class="btn btn-cus1" id="event3_sol2">用跑的過馬路</button>');
            $('#pictextModal').modal("show");
            $("#event3_sol1").click(function(){
                showPictext('事件一', '事件一', 'event3_sol1_msg');
            });
            $("#event3_sol2").click(function(){
                showPictext('事件一', '事件一', 'event3_sol2_msg');
            });
        } else {
            $("#pictextAvatar").attr('src', 'skin/character/01_擔心.png');
            $('#pictextContent').append('天啊！那個女生差點被車撞到耶！快過去看下一下。');
            $('#button-area').append('<button type="button" class="btn btn-next" id="event3"></button>');
            $('#pictextModal').modal("show");
            $("#event3").click(function(){
                krpano.call('addImgTextHotSpot("resource/images/76e464114d75128d.png","schp_phsnjqqwns",'+html_encode("事件三")+','+(-172.42906649763)+','+(-2.4096750487546)+',0,false,true,'+imgtext_encode("事件三")+',"",'+"small"+')');
                krpano.call('set(hotspot["schp_fg8ct3syh8"].visible ,false)')
                hidePictext()
            });
        }
    }
    if (name=='schp_phsnjqqwns') {
        $("#pictextAvatar").attr('src', 'skin/character/2-1.png');
        $('#pictextContent').append('啊！這輛車差點撞到我，為什麼他轉彎時會離我這麼近？');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event3_in1"></button>');
        $('#pictextModal').modal("show");
        $("#event3_in1").click(function(){
            localStorage.setItem('event3', 'true');
            krpano.call('set(hotspot["schp_fg8ct3syh8"].visible ,true)')
            krpano.call('set(hotspot["schp_phsnjqqwns"].visible ,false)')
            hidePictext()
        });
    }
    if (name=='event3_sol1_msg') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('行穿線，指的是「提供行人穿越馬路的標線」像是斑馬線就是喔！來看看人本交通的魔法吧！');
        $('#button-area').append('<button type="button" class="btn btn-wand" id="event1_nextscene"></button>');
        $('#pictextModal').modal("show");
        $("#event1_nextscene").click(function(){
            hidePictext()
            krpano.call('loadscene("scene_1d1d29ff9800454d", null, MERGE, ZOOMBLEND(1.0, 2.0, easeoutquart));');
        });
    }
    if (name=='event3_sol2_msg') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('嗯？好像可以再想想有沒有更好的辦法？');
        $('#button-area').append('<button type="button" class="btn btn-cus3" id="event1_sol1_msg_back">返回</button>');
        $('#pictextModal').modal("show");
        $("#event1_sol1_msg_back").click(function(){
            showPictext('事件一', '事件一', 'schp_fg8ct3syh8');
        });
    }
    //scene 3 end

    //scene 4 start
    if (name=='schp_4fwszezmty') {
        if (localStorage.getItem('event4')=='true') {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('行穿線內縮後，車子在轉彎時有更大的角度和距離，讓行人比較不會被轉彎的車影響喔！來看看下一個交通事件吧！');
            $('#button-area').append('<button type="button" class="btn btn-cus3" id="event4_sol1">前往下一關</button>');
            $('#pictextModal').modal("show");
            $("#event4_sol1").click(function(){
                hidePictext()
                krpano.call('loadscene("scene_18660de6942281d1", null, MERGE, ZOOMBLEND(1.0, 2.0, easeoutquart));');
            });
        } else {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('哇！行穿線看起來往內移了！那位女同學可以安全通過了。');
            $('#button-area').append('<button type="button" class="btn btn-next" id="event4"></button>');
            $('#pictextModal').modal("show");
            $("#event4").click(function(){
                krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_c4egmirnfe",'+html_encode("事件四")+','+(169.2731113722)+','+(-3.8583427415254)+',0,false,true,'+imgtext_encode("事件四")+',"",'+"small"+')');
                krpano.call('set(hotspot["schp_4fwszezmty"].visible ,false)')
                hidePictext()
            });
        }
    }
    if (name=='schp_c4egmirnfe') {
        $("#pictextAvatar").attr('src', 'skin/character/2-2.png');
        $('#pictextContent').append('這樣我走在斑馬線上，就不怕轉彎的車撞到我了。');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event4_in1"></button>');
        $('#pictextModal').modal("show");
        $("#event4_in1").click(function(){
            localStorage.setItem('event4', 'true');
            krpano.call('set(hotspot["schp_4fwszezmty"].visible ,true)')
            krpano.call('set(hotspot["schp_c4egmirnfe"].visible ,false)')
            hidePictext()
        });
    }
    //scene 4 end

    //scene 5 start
    if (name=='schp_txpzkw5nf8') {
        if (localStorage.getItem('event5')=='true') {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('要怎麼樣才能上學的路變得更安全呢？');
            $('#button-area').append('<button type="button" class="btn btn-cus1" id="event5_sol1">拆除圍牆<br>改建通學步道</button>');
            $('#button-area').append('<button type="button" class="btn btn-cus1" id="event5_sol2">讓阿嬤<br>載到校門口</button>');
            $('#pictextModal').modal("show");
            $("#event5_sol1").click(function(){
                showPictext('事件一', '事件一', 'event5_sol1_msg');
            });
            $("#event5_sol2").click(function(){
                showPictext('事件一', '事件一', 'event5_sol2_msg');
            });
        } else {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('這是我們的學校臺南國小，圍牆外的路是平常上下學都會通過的路線。');
            $('#button-area').append('<button type="button" class="btn btn-next" id="event5"></button>');
            $('#pictextModal').modal("show");
            $("#event5").click(function(){
                showPictext('事件一', '事件一', 'event5_in2');
            });
        }
    }
    if (name=='event5_in2') {
        $("#pictextAvatar").attr('src', 'skin/character/01_擔心.png');
        $('#pictextContent').append('但是你看！圍牆外的路空間太小了，那輛車差點擦過那個女同學！');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event5_in1"></button>');
        $('#pictextModal').modal("show");
        $("#event5_in1").click(function(){
            krpano.call('addImgTextHotSpot("resource/images/76e464114d75128d.png","schp_rynybb2rbh",'+html_encode("事件五")+','+(-2.4427279173341)+','+(-1.6953092877172)+',0,false,true,'+imgtext_encode("事件五")+',"",'+"small"+')');
            krpano.call('set(hotspot["schp_txpzkw5nf8"].visible ,false)')
            hidePictext()
        });
    }
    if (name=='schp_rynybb2rbh') {
        $("#pictextAvatar").attr('src', 'skin/character/2-1.png');
        $('#pictextContent').append('這裡路好小好難走喔，剛剛那輛車還差點撞到我！');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event5_in1"></button>');
        $('#pictextModal').modal("show");
        $("#event5_in1").click(function(){
            localStorage.setItem('event5', 'true');
            krpano.call('set(hotspot["schp_txpzkw5nf8"].visible ,true)')
            krpano.call('set(hotspot["schp_rynybb2rbh"].visible ,false)')
            hidePictext()
        });
    }
    if (name=='event5_sol1_msg') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('來看看人本交通的魔法吧！');
        $('#button-area').append('<button type="button" class="btn btn-wand" id="event1_nextscene"></button>');
        $('#pictextModal').modal("show");
        $("#event1_nextscene").click(function(){
            hidePictext()
            krpano.call('loadscene("scene_04e78c7766783b16", null, MERGE, ZOOMBLEND(1.0, 2.0, easeoutquart));');
        });
    }
    if (name=='event5_sol2_msg') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('嗯？好像可以再想想有沒有更好的辦法？');
        $('#button-area').append('<button type="button" class="btn btn-cus3" id="event1_sol1_msg_back">返回</button>');
        $('#pictextModal').modal("show");
        $("#event1_sol1_msg_back").click(function(){
            showPictext('事件一', '事件一', 'schp_txpzkw5nf8');
        });
    }
    //scene 5 end

    //scene 6 start
    if (name=='schp_dcazfxyxez') {
        // if (localStorage.getItem('event6')=='true') {
        //     $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        //     $('#pictextContent').append('行穿線內縮後，車子在轉彎時有更大的角度和距離，讓行人比較不會被轉彎的車影響喔！來看看下一個交通事件吧！');
        //     $('#button-area').append('<button type="button" class="btn btn-cus3" id="event6_sol1">前往下一關</button>');
        //     $('#pictextModal').modal("show");
        //     $("#event6_sol1").click(function(){
        //         hidePictext()
        //         krpano.call('loadscene("scene_18660de6942281d1", null, MERGE, ZOOMBLEND(1.0, 2.0, easeoutquart));');
        //     });
        // } else {
            $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
            $('#pictextContent').append('圍牆拆除後，空出好大的空間喔，蓋上人行道後，就能安心上下學了。');
            $('#button-area').append('<button type="button" class="btn btn-next" id="event6"></button>');
            $('#pictextModal').modal("show");
            $("#event6").click(function(){
                krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_zwcrfjsae2",'+html_encode("事件六")+','+(-1.5897539071423)+','+(-3.3258701496608)+',0,false,true,'+imgtext_encode("事件六")+',"",'+"small"+')');
                krpano.call('set(hotspot["schp_dcazfxyxez"].visible ,false)')
                hidePictext()
            });
        // }
    }
    if (name=='schp_zwcrfjsae2') {
        $("#pictextAvatar").attr('src', 'skin/character/2-2.png');
        $('#pictextContent').append('拆除圍牆後，空出了蓋通學步道的空間，讓行人能走的通學步道變大了，上學路上也更安全了。');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event6_in1"></button>');
        $('#pictextModal').modal("show");
        $("#event6_in1").click(function(){
            localStorage.setItem('event6', 'true');
            hidePictext()
            krpano.call('loadscene("scene_7acf894b669a3e2b", null, MERGE, ZOOMBLEND(1.0, 2.0, easeoutquart));');
        });
    }
    //scene 6 end

    //scene 7 start
    if (name=='schp_pcny2brrmm') {
        // if (localStorage.getItem('event7-1') == 'true' && localStorage.getItem('event7-2') == 'true' && localStorage.getItem('event7-3') == 'true') {
        //     $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        //     $('#pictextContent').append('要怎麼樣才能上學的路變得更安全呢？');
        //     $('#button-area').append('<button type="button" class="btn btn-cus1" id="event5_sol1">拆除圍牆<br>改建通學步道</button>');
        //     $('#button-area').append('<button type="button" class="btn btn-cus1" id="event5_sol2">讓嬤嬤<br>載到校門口</button>');
        //     $('#pictextModal').modal("show");
        //     $("#event5_sol1").click(function(){
        //         showPictext('事件一', '事件一', 'event5_sol1_msg');
        //     });
        //     $("#event5_sol2").click(function(){
        //         showPictext('事件一', '事件一', 'event5_sol2_msg');
        //     });
        // } else {
            $("#pictextAvatar").attr('src', 'skin/character/01_擔心.png');
            $('#pictextContent').append('這裡好像有些地方怪怪的，去看看那些驚嘆號發生什麼事了？');
            $('#button-area').append('<button type="button" class="btn btn-next" id="event5"></button>');
            $('#pictextModal').modal("show");
            $("#event5").click(function(){
                krpano.call('addImgTextHotSpot("resource/images/76e464114d75128d.png","schp_fzgd25hmsc",'+html_encode("事件七之一")+','+(-26.368131239493)+','+(-7.5101736963872)+',0,false,true,'+imgtext_encode("事件七之一")+',"",'+"small"+')');
                krpano.call('addImgTextHotSpot("resource/images/76e464114d75128d.png","schp_wzazkkxde6",'+html_encode("事件七之二")+','+(22.668447840045)+','+(-5.5358128467857)+',0,false,true,'+imgtext_encode("事件七之二")+',"",'+"small"+')');
                krpano.call('addImgTextHotSpot("resource/images/76e464114d75128d.png","schp_nhhjdw2htf",'+html_encode("事件七之三")+','+(66.903564389049)+','+(-6.6450739401113)+',0,false,true,'+imgtext_encode("事件七之三")+',"",'+"small"+')');
                krpano.call('set(hotspot["schp_pcny2brrmm"].visible ,false)')
                hidePictext()
            });
        // }
    }

    // hotspot 7-1 start
    if (name=='schp_fzgd25hmsc') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('騎機車要戴安全帽嗎？');
        $('#button-area').append('<button type="button" class="btn btn-cus1" id="event7_1_sol1">一定要戴才安全！</button>');
        $('#button-area').append('<button type="button" class="btn btn-cus1" id="event7_1_sol2">很近的話<br>應該不用吧？</button>');
        $('#pictextModal').modal("show");
        $("#event7_1_sol1").click(function(){
            showPictext('事件七之一', '事件七之一', 'event7_1_sol1');
        });
        $("#event7_1_sol2").click(function(){
            showPictext('事件七之一', '事件七之一', 'event7_1_sol2');
        });

    }
    if (name=='event7_1_sol1') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('答對了！騎機車戴安全帽，萬一發生意外時才能保護自己喔！看看其他事件吧！');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event7_1_solved"></button>');
        $('#pictextModal').modal("show");
        $("#event7_1_solved").click(function(){
            localStorage.setItem('event7-1', 'true');
            krpano.call('set(hotspot["schp_fzgd25hmsc"].visible ,false)')
            if (localStorage.getItem('event7-1') == 'true' && localStorage.getItem('event7-2') == 'true' && localStorage.getItem('event7-3') == 'true') {
                // final
                // krpano.call('set(hotspot["schp_pcny2brrmm"].visible ,true)')
                $('.overlay').fadeIn(1200);
                localStorage.setItem('end_step', 0);
                $('.overlay .landing-btn').click()
            }
            hidePictext()
        });
    }
    if (name=='event7_1_sol2') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('嗯?好像可以再想想喔！');
        $('#button-area').append('<button type="button" class="btn btn-cus3" id="event1_sol1_msg_back">返回</button>');
        $('#pictextModal').modal("show");
        $("#event1_sol1_msg_back").click(function(){
            showPictext('事件七之一', '事件七之一', 'schp_fzgd25hmsc');
        });
    }
    // hotspot 7-1 end

    // hotspot 7-2 start
    if (name=='schp_wzazkkxde6') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('路上都沒車，可以不走斑馬線直接通過嗎？');
        $('#button-area').append('<button type="button" class="btn btn-cus1" id="event7_2_sol1">太危險了！<br>一定要走斑馬線</button>');
        $('#button-area').append('<button type="button" class="btn btn-cus1" id="event7_2_sol2">斑馬線好遠，<br>直接過去比較方便</button>');
        $('#pictextModal').modal("show");
        $("#event7_2_sol1").click(function(){
            showPictext('事件七之一', '事件七之一', 'event7_2_sol1');
        });
        $("#event7_2_sol2").click(function(){
            showPictext('事件七之一', '事件七之一', 'event7_2_sol2');
        });

    }
    if (name=='event7_2_sol1') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('答對了！就算斑馬線再遠，也要走斑馬線上才安全喔！去看看其他事件吧！');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event7_1_solved"></button>');
        $('#pictextModal').modal("show");
        $("#event7_1_solved").click(function(){
            localStorage.setItem('event7-2', 'true');
            krpano.call('set(hotspot["schp_wzazkkxde6"].visible ,false)')
            if (localStorage.getItem('event7-1') == 'true' && localStorage.getItem('event7-2') == 'true' && localStorage.getItem('event7-3') == 'true') {
                // final
                // krpano.call('set(hotspot["schp_pcny2brrmm"].visible ,true)')
                $('.overlay').fadeIn(1200);
                localStorage.setItem('end_step', 0);
                $('.overlay .landing-btn').click()
            }
            hidePictext()
        });
    }
    if (name=='event7_2_sol2') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('嗯?好像可以再想想喔！');
        $('#button-area').append('<button type="button" class="btn btn-cus3" id="event1_sol1_msg_back">返回</button>');
        $('#pictextModal').modal("show");
        $("#event1_sol1_msg_back").click(function(){
            showPictext('事件七之一', '事件七之一', 'schp_wzazkkxde6');
        });
    }
    // hotspot 7-2 end

    // hotspot 7-3 start
    if (name=='schp_nhhjdw2htf') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('車子停上人行道是正確的嗎？');
        $('#button-area').append('<button type="button" class="btn btn-cus1" id="event7_3_sol1">這是不對的！<br>行人都被擋到了。</button>');
        $('#button-area').append('<button type="button" class="btn btn-cus1" id="event7_3_sol2">反正給個方便，<br>沒差吧？</button>');
        $('#pictextModal').modal("show");
        $("#event7_3_sol1").click(function(){
            showPictext('事件七之一', '事件七之一', 'event7_3_sol1');
        });
        $("#event7_3_sol2").click(function(){
            showPictext('事件七之一', '事件七之一', 'event7_3_sol2');
        });

    }
    if (name=='event7_3_sol1') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('答對了！汽車佔用人行道是錯誤的行為，這樣行人就會被擋到，無路可走了。所以汽車一定要停在車位中，不能停在人行道喔！去看看其他事件吧！');
        $('#button-area').append('<button type="button" class="btn btn-next" id="event7_1_solved"></button>');
        $('#pictextModal').modal("show");
        $("#event7_1_solved").click(function(){
            localStorage.setItem('event7-3', 'true');
            krpano.call('set(hotspot["schp_nhhjdw2htf"].visible ,false)')
            if (localStorage.getItem('event7-1') == 'true' && localStorage.getItem('event7-2') == 'true' && localStorage.getItem('event7-3') == 'true') {
                // final
                // krpano.call('set(hotspot["schp_pcny2brrmm"].visible ,true)')
                $('.overlay').fadeIn(1200);
                localStorage.setItem('end_step', 0);
                $('.overlay .landing-btn').click()
            }
            hidePictext()
        });
    }
    if (name=='event7_3_sol2') {
        $("#pictextAvatar").attr('src', 'skin/character/01_快樂.png');
        $('#pictextContent').append('嗯?好像可以再想想喔！');
        $('#button-area').append('<button type="button" class="btn btn-cus3" id="event1_sol1_msg_back">返回</button>');
        $('#pictextModal').modal("show");
        $("#event1_sol1_msg_back").click(function(){
            showPictext('事件七之一', '事件七之一', 'schp_nhhjdw2htf');
        });
    }
    // hotspot 7-3 end


    //scene 7 end
}

//krpano调用 初始化高级设置
function initAdvancedSetting(sceneName){
    //initViewSetting(sceneName);
    initEffectSetting(sceneName);
    initHotspotSetting(sceneName);
    initSandTableSetting(sceneName);
    initTourGuideSetting(sceneName);
    //作者信息 TODO
    // initAuthourInfo(sceneName);
	    var krpano = document.getElementById('krpanoSWFObject');
      init_video_tie(krpano,sceneName,video_tie_hotspot_data,false);

}

function initTourGuideSetting(sceneName){
    var krpano = document.getElementById('krpanoSWFObject');
    var tourGuideObj = $("body").data("panoData").tour_guide;
    if(tourGuideObj.points.length > 0){
        $('#pano .vrshow_tour_btn').show();
    }else{
        $('#pano .vrshow_tour_btn').hide();
    }
}

var lsTourGuideObj = null;
function startTourGuide(){
    toggleBtns(false);
    lsTourGuideObj = $("body").data("panoData").tour_guide;
    var krpano = document.getElementById('krpanoSWFObject');
    //krpano.call('showlog(true)');
    var curSceneName = krpano.get('xml.scene');
    var firstPoint = lsTourGuideObj.points[0];
    if(lsTourGuideObj.useStartImg){
        krpano.call('show_tour_guide_alert('+lsTourGuideObj.startImgUrl+');');
    }
    if(this.sceneName != curSceneName){
        krpano.call('loadscene('+firstPoint.sceneName+', null, MERGE);');
		console.log("loadscene4");
    }
    var curfov = krpano.get('view.fov');
    krpano.call('lookto('+firstPoint.ath+','+firstPoint.atv+','+curfov+',smooth(720,-720,720),true,true,js(looktoCallBack('+1+')));');
}

function looktoCallBack(idx){
    var krpano = document.getElementById('krpanoSWFObject');
	console.log("loadscene3");
    if(idx < lsTourGuideObj.points.length){
        var pointObj = lsTourGuideObj.points[idx];
        var curSceneName = krpano.get('xml.scene');
        var curfov = krpano.get('view.fov');
        if(pointObj.sceneName != curSceneName){
            krpano.call('loadscene('+pointObj.sceneName+', null, MERGE);');

            krpano.call('lookto('+pointObj.ath+','+pointObj.atv+','+curfov+',smooth(720,-720,720),true,true,js(looktoCallBack('+(parseInt(idx)+1)+')));');
        }else{
            krpano.call('lookto('+pointObj.ath+','+pointObj.atv+','+curfov+',tween(easeInOutQuad,'+parseInt(pointObj.moveTime)+'),true,true,js(looktoCallBack('+(parseInt(idx)+1)+')));');
        }
    }else{
        if(lsTourGuideObj.useEndImg){
            krpano.call('show_tour_guide_alert('+lsTourGuideObj.endImgUrl+');');
        }
        toggleBtns(true);
    }
}

function initSandTableSetting(sceneName){
    var krpano = document.getElementById('krpanoSWFObject');
    var sandTableObj = $("body").data("panoData").sand_table;
    var existFlag = false;
    $(sandTableObj.sandTables).each(function(idx){
        if(this.sceneOpt[sceneName]){
            //设置背景图片
            krpano.set("layer[map].url",this.imgPath);
            $.each(this.sceneOpt,function(sceneName,value){
                var spotName = 'spot_'+sceneName;
                addRadarSpot(spotName,value.krpLeft,value.krpTop);
            });
            var hlookatIncre = krpano.get('view.hlookat') - this.sceneOpt[sceneName].hlookat;
            krpano.call('activatespot('+(parseFloat(this.sceneOpt[sceneName].rotate)+parseFloat(hlookatIncre))+');');
            existFlag = true;
            return false;
        }
    });
    if(!existFlag){
        $('.vrshow_radar_btn').hide();
        krpano.set('layer[mapcontainer].visible',false);
    }else{
        $('.vrshow_radar_btn').show();
        if(sandTableObj.isOpen){
            krpano.set('layer[mapcontainer].visible',true);
        }
    }
}

function toggleKrpSandTable(){
    var krpano = document.getElementById('krpanoSWFObject');
    var isVisible = krpano.get('layer[mapcontainer].visible');
    if(isVisible){
        krpano.set('layer[mapcontainer].visible',false);
    }else{
        krpano.set('layer[mapcontainer].visible',true);
    }
}

function addRadarSpot(name,x,y){
    //console.log(x+','+y);
    var krpano = document.getElementById('krpanoSWFObject');
    krpano.call('addlayer('+name+');');
    krpano.set('layer['+name+'].style','spot');
    krpano.set('layer['+name+'].x',x);
    krpano.set('layer['+name+'].y',y);
    krpano.set('layer['+name+'].parent','radarmask');
    krpano.call('layer['+name+'].loadstyle(spot);');
    //krpano.set('layer['+name+'].keep','true');
    //krpano.set('layer['+name+'].visible','true');
}

function initHotspotSetting(sceneName){
    localStorage.setItem('event1', 'false');
    localStorage.setItem('event2', 'false');
    localStorage.setItem('event3', 'false');
    localStorage.setItem('event4', 'false');
    localStorage.setItem('event5', 'false');
    localStorage.setItem('event6', 'false');
    localStorage.setItem('event7-1', 'false');
    localStorage.setItem('event7-2', 'false');
    localStorage.setItem('event7-3', 'false');
    console.log("js2");

    var krpano = document.getElementById('krpanoSWFObject');
    var hotspotObj = ($("body").data("panoData").hotspot)[sceneName];



    switch (sceneName) {
        case "scene_179184fca19185ca":
            krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_jwrw5fekh3",'+html_encode("阿秋一")+','+(-109.35297974014)+','+(22.335071074347)+',0,false,true,'+imgtext_encode("阿秋一")+',"",'+"big"+')');
            break;
        case "scene_e712c9d6e6659640":
            krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_gbif4dtmjw",'+html_encode("阿秋二")+','+(-113.68477924938)+','+(20.113213049767)+',0,false,true,'+imgtext_encode("阿秋二")+',"",'+"big"+')');
            break;
        case "scene_c3fbc0cf1954e842":
            krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_fg8ct3syh8",'+html_encode("阿秋三")+','+(-154.49974153526)+','+(15.634695876176)+',0,false,true,'+imgtext_encode("阿秋三")+',"",'+"big"+')');
            break;
        case "scene_1d1d29ff9800454d":
            krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_4fwszezmty",'+html_encode("阿秋四")+','+(130.9954180972)+','+(14.627903683966)+',0,false,true,'+imgtext_encode("阿秋四")+',"",'+"big"+')');
            break;
        case "scene_18660de6942281d1":
            krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_txpzkw5nf8",'+html_encode("阿秋五")+','+(-38.054037098665)+','+(23.716450735411)+',0,false,true,'+imgtext_encode("阿秋五")+',"",'+"big"+')');
            break;
        case "scene_04e78c7766783b16":
            krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_dcazfxyxez",'+html_encode("阿秋六")+','+(-31.812456516082)+','+(17.163045558016)+',0,false,true,'+imgtext_encode("阿秋六")+',"",'+"big"+')');
            break;
        case "scene_7acf894b669a3e2b":
            krpano.call('addImgTextHotSpot("skin/對話icon.png","schp_pcny2brrmm",'+html_encode("阿秋七")+','+(-42.065935851096)+','+(4.4411525758593)+',0,false,true,'+imgtext_encode("阿秋七")+',"",'+"big"+')');
            break;
        default:

    }

}


function initHotspotSetting_old(sceneName){
    console.log("js2");

    var krpano = document.getElementById('krpanoSWFObject');
    var hotspotObj = ($("body").data("panoData").hotspot)[sceneName];
    // var blend_setting = "ZOOMBLEND(0.5, 3.0, easeinquart)";
    // var blend_setting = "BLEND(1.0, easeInCubic)";
    var blend_type = $("body").data("panoData").blend_setting['blend_type']

    if(hotspotObj){
        $.each(hotspotObj,function(key,value){
            if(key == 'scene'){
                $(value).each(function(idx){
                    krpano.call('addSceneChangeHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+this.linkedscene+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,' + blend_type + ')');
                    // krpano.call('addSceneChangeHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+this.linkedscene+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true)');
                });
            }else if(key == 'link'){
                $(value).each(function(idx){
                    krpano.call('addLinkHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+html_encode(this.hotspotTitle)+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,'+this.link+','+this.isShowSpotName+','+this.isBlank+','+this.isAlert+')');
                });
            }else if(key == 'image'){
                $(value).each(function(idx){
                    krpano.call('addImgHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+html_encode(this.hotspotTitle)+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,'+this.galleryName+','+this.isShowSpotName+')');
                });
            }else if(key == 'text'){
                $(value).each(function(idx){
                    krpano.call('addWordHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+html_encode(this.hotspotTitle)+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,'+html_encode(this.wordContent)+','+this.isShowSpotName+')');
                });
            }else if(key == 'voice'){
                $(value).each(function(idx){
                    krpano.call('addVoiceHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+html_encode(this.hotspotTitle)+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,'+this.musicSrc+','+this.isShowSpotName+')');
                });
            }else if(key == 'around'){
                $(value).each(function(idx){
                    krpano.call('addAroundHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+html_encode(this.hotspotTitle)+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,'+this.aroundPath+','+this.fileCount+','+this.isShowSpotName+')');
                });
            }else if(key == 'obj'){
                $(value).each(function(idx){
                    krpano.call('addObjHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+html_encode(this.hotspotTitle)+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,'+this.objid+','+this.isShowSpotName+')');
                });
            }else if(key == 'video'){
                $(value).each(function(idx){
                    krpano.call('addVideoHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+html_encode(this.hotspotTitle)+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,'+this.location+','+this.isShowSpotName+')');
                });
            }
        });
    }
}

function initEffectSetting(sceneName){
    var krpano = document.getElementById('krpanoSWFObject');
    var effectObj = null;
    var effectData = $("body").data("panoData").special_effects;
    $(effectData.effectSettings).each(function(idx){
        if(this.sceneName == sceneName){
            effectObj = this;
            return false;
        }
    });
    if(effectObj){
        if(effectObj.isOpen){
            if(effectObj.effectType == 'sunshine'){
                //krpano.set('lensflares[obj].item[lensitemobj].scene',sceneName);
                //krpano.set('lensflares[obj].item[lensitemobj].ath',effectObj.ath);
                //krpano.set('lensflares[obj].item[lensitemobj].atv',effectObj.atv);
                krpano.call('addLensflares('+effectObj.ath+','+effectObj.atv+')');
            }else{
                krpano.call('addEffect("'+effectObj.effectType+'","'+effectObj.effectImgPath+'")');
            }
        }
    }
}

function littlePlaneOpen(sceneName){
    var krpano = document.getElementById('krpanoSWFObject');
    var lookatObj = null;
    var angleData = $("body").data("panoData").angle_of_view;
    $(angleData.viewSettings).each(function(idx){
        if(this.sceneName == sceneName){
            lookatObj = this;
            return false;
        }
    });
    if(lookatObj){
        krpano.set('view.vlookat',lookatObj.vlookat);
        krpano.set('view.hlookat',lookatObj.hlookat);
        krpano.set('view.fov',lookatObj.fov);
        krpano.set('view.fovmax',lookatObj.fovmax);
        if(lookatObj.hlookatmin){
            krpano.set('view.hlookatmin',lookatObj.hlookatmin);
        }
        if(lookatObj.hlookatmax){
            krpano.set('view.hlookatmax',lookatObj.hlookatmax);
        }
        krpano.call('skin_setup_littleplanetintro('+lookatObj.fovmin+','+(-1*lookatObj.vlookatmax)+','+(-1*lookatObj.vlookatmin)+','+(lookatObj.keepView ? "off" : "0.0")+');');
    }else{
        krpano.call('skin_setup_littleplanetintro(5,-90,90,"0.0");');
    }
}

//场景载入时加载视角设置
function initViewSetting(sceneName,back){
    var krpano = document.getElementById('krpanoSWFObject');
    var lookatObj = null;
    var angleData = $("body").data("panoData").angle_of_view;
    $(angleData.viewSettings).each(function(idx){
        if(this.sceneName == sceneName){
            lookatObj = this;
            return false;
        }
    });
    if(lookatObj){
        krpano.set('view.vlookat',lookatObj.vlookat);

		var back = back;
		var ones = 180;
		var lones = -90;
		var rones = 90;


		if(back == 200){
		var viewh = parseInt(lones) + parseInt(lookatObj.hlookat);

		}else if(back == 300){

			var viewh = parseInt(rones) + parseInt(lookatObj.hlookat);

		}else{



			var viewh = parseInt(ones) + parseInt(lookatObj.hlookat);

		}

        if(back > 1){
			krpano.set('view.hlookat',viewh);
			krpano.call("plugin[skin_gyro].resetSensor("+viewh+")");
			krpano.set('backgo',-1);
		}
        else{
			krpano.set('view.hlookat',lookatObj.hlookat);
		}




        krpano.set('view.fov',lookatObj.fov);
        krpano.set('view.fovmin',lookatObj.fovmin);
        krpano.set('view.fovmax',lookatObj.fovmax);
        krpano.set('view.vlookatmin',-1*lookatObj.vlookatmax);
        krpano.set('view.vlookatmax',-1*lookatObj.vlookatmin);

        if(lookatObj.hlookatmin){
            krpano.set('view.hlookatmin',lookatObj.hlookatmin);
        }
        if(lookatObj.hlookatmax){
            krpano.set('view.hlookatmax',lookatObj.hlookatmax);
        }
    }
}

function loadGallery(){
    var krpano = document.getElementById('krpanoSWFObject');
    var hotspotObj = $("body").data("panoData").hotspot;
    //var xmlStr = '';
    $.each(hotspotObj,function(sceneName,value){
        if(value){
            $(value.image).each(function(idx){
                var xmlStr = '<gallery name="'+this.galleryName+'" title="">';
                $(this.imgs).each(function(idx){
                    xmlStr += '<img name="img'+idx+'" url="'+this.src+'" title="" />';
                });
                xmlStr += '</gallery>';
                krpano.call('loadxml('+xmlStr+');');
            });
        }
    });
}


//贴片数据
var video_tie_hotspot_data=null;

function reloadGallery(gallery){
    var krpano = document.getElementById('krpanoSWFObject');
    var ua = window.navigator.userAgent.toLowerCase();
    if(typeof(wx)!='undefined' && ua.match(/MicroMessenger/i) == 'micromessenger'){
        //整合gallery的图片到数组
        var urls = new Array();
        for(var i=0; i<krpano.get('gallery['+gallery+'].img.count'); i++){
            urls.push(krpano.get('gallery['+gallery+'].img['+i+'].url'));
        }
        wx.previewImage({
            current: krpano.get('gallery['+gallery+'].img[0].url'), // 当前显示图片的http链接
            urls: urls // 需要预览的图片http链接列表
        });
    }
    else{
        toggleBtns();
        krpano.call('show_gallery('+gallery+')');
    }
}

function getWorkPrivacyFlag(){
    var privacy_flag = '0';

    return privacy_flag;
}


function openHotspotLink(_link,_blank,_alert){


	var protocolStr = document.location.protocol;

	var linkto = null;

	 linkto = _link;

if(linkto.indexOf("https") == -1 ){

	linkto = _link.replace(/http/, "https");


}
	//弹框
	if(_alert=="1"){
		$('body').append('<div class="modal" id="hotspot_link_alert" data-backdrop="static" data-keyboard="false" style="z-index:2002">'+
            '<div class="modal-dialog">'+
                '<div class="modal-body" style="padding: 0">'+
                  '<i class="icon-remove-sign" onClick="javascript:closeHotspotLink();" style="position:absolute;z-index:99999;left:0;top:0;font-size:20px;color:#8000FF;"></i>'+
                  '  <iframe src="'+ linkto +'" frameborder="0" width="100%" height="800"></iframe>'+
               ' </div>'+
           ' </div>'+
       ' </div>');
	   $("#hotspot_link_alert").modal('show');
	}
	else{
		var target = _blank=="1" ? "_blank" : "_self";
		window.open(_link,target);
	}
}
function closeHotspotLink(){
	$("#hotspot_link_alert").modal('hide');
	$("#hotspot_link_alert").remove();
}




function initPano(){//TODO

   if(data.pk_works_main == undefined){
       window.location.href = '/404.html';
       return ;
   }
   //微信分享
   // initWxConfig(data);
   // initQQShare(data);
   //存储作者的信息
   // _user_view_uuid = data.user_view_uuid;
   _user_view_uuid = "admin";

   _name = data.name;
   document.title = _name;
   //$("#thumb_img").attr("src",data.absolutelocation);
   //var descContent='';
   //if(data.profile){
   //    descContent = data.profile;
   //}else{
   //    descContent = data.name;
   //}
   //$("head").append('<meta name="description" content="'+descContent+'"/>');

   $("body").data("panoData",data);

    if(data.video_tie_hotspot=='' || data.video_tie_hotspot==null)  data.video_tie_hotspot = null;
        video_tie_hotspot_data= data.video_tie_hotspot;
   pk_works_main = data.pk_works_main;
   var settings = {};
   settings["events[skin_events].onloadcomplete"] = "skin_showloading(false);";
   settings["onstart"] = '';

   //是否开始时弹出场景选择
   if (data.scenechoose=='1') {
       settings["events[skin_events].onloadcomplete"] += "open_show_scene_thumb();";
   }

   //统计人气
   if(data.browsing_num!='0'){
       $("#user_viewNum").text(parseInt(data.browsing_num)+1);
   }else{
       $("#user_viewNum").text("1");
   }
   //启动画面
   var loadingObj = data.loading_img;
   if (loadingObj && loadingObj.useLoading) {
       settings["onstart"] += "showloadingimg('" + loadingObj.loadingImgPathWebsite + "','" + loadingObj.loadingImgPathMobile + "');";
   }
   for(var i=0 ; i<plugins_init_function.length;i++){
        plugins_init_function[i](data,settings);
   }
   if(data.scene_group.sceneGroups.length>0) {
         $(".vrshow_container_3_min .img_desc_container_min:eq(0) img").attr('src',data.scene_group.sceneGroups[0].imgPath);
    }
   settings['skin_settings.littleplanetintro'] = data.littleplanet=="1" ? true : false;

   settings['autorotate.enabled'] = data.autorotate=="1" ? true : false;
   embedpano({
       swf: "tour.swf",
       xml: "tour.xml",
       target: "pano",
       html5:'prefer',
       //flash:'only',
       wmode:'opaque-flash',
       mobilescale:0.7,
       vars: settings
   });
}
function html_encode(str)
  {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\(/g, "（");
    s = s.replace(/\)/g, "）");
    s = s.replace(/,/g, "，");
    return s;
  }
function imgtext_encode(str){
     var s = "";
    if (str.length == 0) return "";
    s = str.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\(/g, "（");
    s = s.replace(/\)/g, "）");
    s = s.replace(/\,/g,"%2C");
    return s;
}
function imgtext_decode(str){
     var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&quot;/g, "\"");
     s = s.replace(/%2C/g,",");
    return s;
}

function showFullscreenBtn(){
    $(".btn_fullscreen").show();
}



function radarRotate(sceneName,hlookat){

}

function openSpeechVoiceBtn(){
    var voiceOff = $('.btn_music_off');
    voiceOff.removeClass('btn_music_off');
    voiceOff.addClass('btn_music');
}
var player ;
function playvideo(url){
   var location = window.location.href;
   url = location.substring(0,location.lastIndexOf("\/")+1)+url;
    var krpano = document.getElementById('krpanoSWFObject');
    krpano.call("pausesoundtoggle(bgmusic);pausesoundtoggle(bgm);");
    toggleBtns(false);
   player = new prismplayer({
      id: "J_prismPlayer", // 容器id
      source: url,
      autoplay: true,      // 自动播放
      width: "100%",       // 播放器宽度
      height: "400px"      // 播放器高度
    });
   $("#video_player_modal").modal('show');
}
function close_video_player(){
	var krpano = document.getElementById('krpanoSWFObject');
    krpano.call("pausesoundtoggle(bgmusic);pausesoundtoggle(bgm);");
    toggleBtns(true);
    player.pause();
    $("#video_player_modal").modal('hide');
}
