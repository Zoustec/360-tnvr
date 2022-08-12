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

    if (localStorage.getItem('current_schp')=='schp_hianckwpjh') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_z3st55rgts') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_8ei23bwkr2') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_fhrimxdgbx') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_njhxaegbex') {check_done_scene();}


    if (localStorage.getItem('current_schp')=='schp_by4sck82dp') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_fzyyheehtq') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_eerm7wjbm8') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_sgfzemykda') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_bcxkkmscgm') {check_done_scene();}

    if (localStorage.getItem('current_schp')=='schp_fsbbc3zs3w') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_rn2mrt8c6x') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_jwgqrzsxqq') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_y2j2aszwxe') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_zc662szhsm') {check_done_scene();}

    if (localStorage.getItem('current_schp')=='schp_d2wbtaaxwa') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_xs6jgxjfdh') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_ewyci5rp5f') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_biacnfmr58') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_mnex5mfbce') {check_done_scene();}

    if (localStorage.getItem('current_schp')=='schp_px7qd8fgdx') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_4fdw35t7qh') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_zmknyw4ts5') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_nsazhem8yc') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_d6w7kjstci') {check_done_scene();}

    if (localStorage.getItem('current_schp')=='schp_khpqxh8nra') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_rkfizzmzrf') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_hhhpbrfwaj') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_heazthykms') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_ehn7yrqagt') {check_done_scene();}

    if (localStorage.getItem('current_schp')=='schp_myyrarjikf') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_hbtbtpcex2') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_d7ma45bpcn') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_4ztnr5tgcz') {check_done_scene();}
    if (localStorage.getItem('current_schp')=='schp_wznb2a2r46') {check_done_scene();}

    if (localStorage.getItem('current_schp')=='schp_z2dazzfsrw') {check_done_scene();}
}

function showPictext(title,content,name) {
    toggleBtns(false);
    //var data = $("body").data("panoData");
    // $('#pictextWorkName').text('');
    // $('#pictextContent').text('');
    $('#pictextWorkName').text(title);
    $('#pictextContent').html(imgtext_decode(content));
    //$('#pictextContent').append(content);
    $('#pictextModal').modal("show");

    console.log('showPictext')
    console.log(name)
    localStorage.setItem('current_schp', name);

    if (name == 'schp_hianckwpjh') {
      localStorage.setItem('event1_clue2', 'true');
      $('.right_menu_item_2 .right_menu_item_checked').show();
    }

    if (name == 'schp_z3st55rgts') {
      localStorage.setItem('event1_clue3_1_1', 'true');
      check_event2_clues();
    }
    if (name == 'schp_8ei23bwkr2') {
      localStorage.setItem('event1_clue3_1_2', 'true');
      check_event2_clues();
    }
    if (name == 'schp_fhrimxdgbx') {
      localStorage.setItem('event1_clue3_1_3', 'true');
      check_event2_clues();
    }
    if (name == 'schp_njhxaegbex') {
      localStorage.setItem('event1_clue3_1_4', 'true');
      check_event2_clues();
    }
    if (name == 'schp_by4sck82dp') {
      localStorage.setItem('event1_clue3_1_5', 'true');
      check_event2_clues();
    }
    if (name == 'schp_fzyyheehtq') {
      localStorage.setItem('event1_clue3_1_6', 'true');
      check_event2_clues();
    }
    if (name == 'schp_eerm7wjbm8') {
      localStorage.setItem('event1_clue3_1_7', 'true');
      check_event2_clues();
    }


    if (name == 'schp_sgfzemykda') {
      localStorage.setItem('event1_clue3_2_1', 'true');
      check_event2_clues();
    }
    if (name == 'schp_bcxkkmscgm') {
      localStorage.setItem('event1_clue3_2_2', 'true');
      check_event2_clues();
    }
    if (name == 'schp_fsbbc3zs3w') {
      localStorage.setItem('event1_clue3_2_3', 'true');
      check_event2_clues();
    }
    if (name == 'schp_rn2mrt8c6x') {
      localStorage.setItem('event1_clue3_2_4', 'true');
      check_event2_clues();
    }
    if (name == 'schp_jwgqrzsxqq') {
      localStorage.setItem('event1_clue3_2_5', 'true');
      check_event2_clues();
    }
    if (name == 'schp_y2j2aszwxe') {
      localStorage.setItem('event1_clue3_2_6', 'true');
      check_event2_clues();
    }
    if (name == 'schp_zc662szhsm') {
      localStorage.setItem('event1_clue3_2_7', 'true');
      check_event2_clues();
    }


    if (name == 'schp_d2wbtaaxwa') {
      localStorage.setItem('event1_clue3_3_1', 'true');
      check_event2_clues();
    }
    if (name == 'schp_xs6jgxjfdh') {
      localStorage.setItem('event1_clue3_3_2', 'true');
      check_event2_clues();
    }
    if (name == 'schp_ewyci5rp5f') {
      localStorage.setItem('event1_clue3_3_3', 'true');
      check_event2_clues();
    }
    if (name == 'schp_biacnfmr58') {
      localStorage.setItem('event1_clue3_3_4', 'true');
      check_event2_clues();
    }
    if (name == 'schp_mnex5mfbce') {
      localStorage.setItem('event1_clue3_3_5', 'true');
      check_event2_clues();
    }
    if (name == 'schp_px7qd8fgdx') {
      localStorage.setItem('event1_clue3_3_6', 'true');
      check_event2_clues();
    }
    if (name == 'schp_4fdw35t7qh') {
      localStorage.setItem('event1_clue3_3_7', 'true');
      check_event2_clues();
    }
    if (name == 'schp_zmknyw4ts5') {
      localStorage.setItem('event1_clue3_3_8', 'true');
      check_event2_clues();
    }
    if (name == 'schp_nsazhem8yc') {
      localStorage.setItem('event1_clue3_3_9', 'true');
      check_event2_clues();
    }
    if (name == 'schp_d6w7kjstci') {
      localStorage.setItem('event1_clue3_3_10', 'true');
      check_event2_clues();
    }
    if (name == 'schp_khpqxh8nra') {
      localStorage.setItem('event1_clue3_3_11', 'true');
      check_event2_clues();
    }
    if (name == 'schp_rkfizzmzrf') {
      localStorage.setItem('event1_clue3_3_12', 'true');
      check_event2_clues();
    }


    if (name == 'schp_hhhpbrfwaj') {
      localStorage.setItem('event1_clue3_4_1', 'true');
      check_event2_clues();
    }
    if (name == 'schp_heazthykms') {
      localStorage.setItem('event1_clue3_4_2', 'true');
      check_event2_clues();
    }
    if (name == 'schp_ehn7yrqagt') {
      localStorage.setItem('event1_clue3_4_3', 'true');
      check_event2_clues();
    }
    if (name == 'schp_myyrarjikf') {
      localStorage.setItem('event1_clue3_4_4', 'true');
      check_event2_clues();
    }
    if (name == 'schp_hbtbtpcex2') {
      localStorage.setItem('event1_clue3_4_5', 'true');
      check_event2_clues();
    }
    if (name == 'schp_d7ma45bpcn') {
      localStorage.setItem('event1_clue3_4_6', 'true');
      check_event2_clues();
    }
    if (name == 'schp_4ztnr5tgcz') {
      localStorage.setItem('event1_clue3_4_7', 'true');
      check_event2_clues();
    }
    if (name == 'schp_wznb2a2r46') {
      localStorage.setItem('event1_clue3_4_8', 'true');
      check_event2_clues();
    }
    if (name == 'schp_z2dazzfsrw') {
      localStorage.setItem('event1_clue3_4_9', 'true');
      check_event2_clues();
    }

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
    console.log("js2");

    var krpano = document.getElementById('krpanoSWFObject');
    var hotspotObj = ($("body").data("panoData").hotspot)[sceneName];
    // var blend_setting = "ZOOMBLEND(0.5, 3.0, easeinquart)";
    // var blend_setting = "BLEND(1.0, easeInCubic)";
    var blend_type = $("body").data("panoData").blend_setting['blend_type']

console.log(sceneName)
    switch (sceneName) {
        case "scene_ede93bca08bdaa3f":
            localStorage.setItem('event3_clue1', 'true');
            $('.right_menu_item_1 .right_menu_item_checked').show();
            break;
        case "scene_5bd7d1f3f5146d82":
            localStorage.setItem('event3_clue2', 'true');
            $('.right_menu_item_2 .right_menu_item_checked').show();
            break;
        case "scene_9bd1d9e892de4613":
            localStorage.setItem('event3_clue3', 'true');
            $('.right_menu_item_3 .right_menu_item_checked').show();
            break;
        case "scene_4f2458d5503863ac":
            localStorage.setItem('event3_clue4', 'true');
            $('.right_menu_item_4 .right_menu_item_checked').show();
            break;
        case "scene_f9e4735bf06cfd30":
            localStorage.setItem('event1_clue1', 'true');
            $('.right_menu_item_1 .right_menu_item_checked').show();
            break;
        case "scene_30ae1fcbbaae5e5f":
            localStorage.setItem('event1_clue4', 'true');
            $('.right_menu_item_4 .right_menu_item_checked').show();
            check_done_scene();
            break;
        case "scene_8036ecb5482d1e96":
            localStorage.setItem('event1_clue4', 'true');
            $('.right_menu_item_4 .right_menu_item_checked').show();
            check_done_scene();
            break;


        case "scene_a2bc1edfe53702a9":
        case "scene_1af65dc810d9bf27":
        case "scene_eb3fc21370fdb5b7":
        case "scene_740177daf5c4c61d":
        case "scene_01396e1af068c1e2":
        case "scene_bbcf956c95fe0a05":
        case "scene_bfa70a75ac560375":
            check_done_scene();
            break;


        case "scene_86cd2c276838888d":
            check_done_scene();
            break;


        case "scene_2cd324a473d7d0d4":
        case "scene_517d7f393240de77":
        case "scene_74554e23eb33d7c6":
            $('.overlay').show()
            $('.right_menu').hide()
            $('.vrshow_container_1_min').hide()
            $('.vrshow_container_2_min').hide()

            $('.overlay .overlay_btn').hide()
            $('.overlay .overlay_conversation_area').hide()

            $('.overlay .overlay_entries').show()
            localStorage.setItem('overlay_step', 2);
            break;




        default:

    }

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
            }else if(key == 'imgtext'){
                $(value).each(function(idx){
                    krpano.call('addImgTextHotSpot("'+this.imgPath+'","'+ (this.name) +'",'+html_encode(this.hotspotTitle)+','+(this.ath)+','+(this.atv)+','+this.isDynamic+',false,true,'+imgtext_encode(this.imgtext_wordContent)+','+this.isShowSpotName+')');
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


function openHotspotLink(_link,_blank,_alert,name){
  console.log(name)
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
                  '  <iframe src="'+ linkto +'" frameborder="0" width="100%" height="400"></iframe>'+
               ' </div>'+
           ' </div>'+
       ' </div>');
	   $("#hotspot_link_alert").modal('show');

     if (name == "schp_jspdnaxmrz") {
       localStorage.setItem('event2_clue2', 'true');
       $('.right_menu_item_2 .right_menu_item_checked').show();
     }
     // $('.right_menu_item_1 .right_menu_item_checked').show();

	}
	else{
		var target = _blank=="1" ? "_blank" : "_self";
		window.open(_link,target);
	}
}
function closeHotspotLink(){
  console.log('closeHotspotLink')
	$("#hotspot_link_alert").modal('hide');
	$("#hotspot_link_alert").remove();
  check_done_scene();
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
function playvideo(url, name){
    console.log('#')
    console.log(name)
    var location = window.location.href;
    url = location.substring(0,location.lastIndexOf("\/")+1)+url;

    // url = 'https://drive.google.com/file/d/1RYB_d6ijoL-hAQisc_HMdmn3KtS53vEa/preview';
    // url = 'https://drive.google.com/uc?export=download&id=1RYB_d6ijoL-hAQisc_HMdmn3KtS53vEa';


    var krpano = document.getElementById('krpanoSWFObject');
    krpano.call("pausesoundtoggle(bgmusic);pausesoundtoggle(bgm);");
    toggleBtns(false);
    // player = new prismplayer({
    //    id: "J_prismPlayer", // 容器id
    //    source:url,
    //    autoplay: true,      // 自动播放
    //    width: "100%",       // 播放器宽度
    //    height: "400px"      // 播放器高度
    //  });


    // data-setup='{ "autoplay": true, "controls": true, "poster": "", "preload": "auto" }'
    var html = "<video id='vid' controls>";
    html += "<source src='"+url+"'>";
    html += "</video>";
    html += "<br />";
    // html += "<button onclick='play()'>Play</button>";
    // html += "<button onclick='pause()'>Pause</button>";
    // html += "<button onclick='mute()'>Mute</button>";

    $('#J_prismPlayer').html(html);
    $("#video_player_modal").modal('show');
    // var videoPlayer = videojs( "vid" );
    player = $('#vid').get(0);
    player.play();



    if (name == 'schp_6naehpbrxg') {
      localStorage.setItem('event2_clue1', 'true');
      $('.right_menu_item_1 .right_menu_item_checked').show();
    }
    if (name == 'schp_yi3acwicna') {
      localStorage.setItem('event2_clue3', 'true');
      $('.right_menu_item_3 .right_menu_item_checked').show();
    }
}

// function play()
// {
//   var videoPlayer = videojs( "vid" );
//   videoPlayer.play(); // 播放
// }
// function pause()
// {
//   var videoPlayer = videojs( "vid" );
//   videoPlayer.pause(); // 暫停
// }
// function mute()
// {
//   var videoPlayer = videojs( "vid" );
//   videoPlayer.muted( true ); // 靜音
// }


function close_video_player(){
    var krpano = document.getElementById('krpanoSWFObject');
    krpano.call("pausesoundtoggle(bgmusic);pausesoundtoggle(bgm);");
    toggleBtns(true);
    player.pause();
    $("#video_player_modal").modal('hide');

    check_done_scene();
}
function check_done_scene(){
  console.log('check_done_scene')
  if (localStorage.getItem('current_scene') == 'scene_a2bc1edfe53702a9') {
    console.log('in1')
    if (localStorage.getItem('event1_clue1') == 'true' && localStorage.getItem('event1_clue2') == 'true' && localStorage.getItem('event1_clue3') == 'true'&& localStorage.getItem('event1_clue4') == 'true') {
      console.log('in2')
      $('.overlay').show()
      $('.right_menu').hide()
      $('.vrshow_container_2_min').hide()

      var html = '<div class="overlay_conversation_area_avatar"></div>';
      html += '<div class="overlay_conversation_2">';
      html += '恭喜達成任務！填寫問卷送好禮';
      html += '</div>';
      $('.overlay .overlay_conversation_area').html(html)

      $('.overlay .overlay_btn').text('填寫問卷')
      $('.overlay .overlay_btn').css('font-size', '50px')
      $('.overlay .overlay_btn').css('letter-spacing', '10px')

      localStorage.setItem('overlay_step', 11);
    }
  }

  if (localStorage.getItem('current_scene') == 'scene_bd6ca129f85fe168') {
    if (localStorage.getItem('event2_clue1') == 'true' && localStorage.getItem('event2_clue2') == 'true' && localStorage.getItem('event2_clue3') == 'true') {
      $('.overlay').show()
      $('.right_menu').hide()
      $('.vrshow_container_2_min').hide()

      var html = '<div class="overlay_conversation_area_avatar"></div>';
      html += '<div class="overlay_conversation_2">';
      html += '恭喜達成任務！填寫問卷送好禮';
      html += '</div>';
      $('.overlay .overlay_conversation_area').html(html)

      $('.overlay .overlay_btn').text('填寫問卷')
      $('.overlay .overlay_btn').css('font-size', '50px')
      $('.overlay .overlay_btn').css('letter-spacing', '10px')

      localStorage.setItem('overlay_step', 12);
    }
  }

  if (localStorage.getItem('current_scene') == 'scene_86cd2c276838888d') {
    if (localStorage.getItem('event3_clue1') == 'true' && localStorage.getItem('event3_clue2') == 'true' && localStorage.getItem('event3_clue3') == 'true'&& localStorage.getItem('event3_clue4') == 'true') {
      $('.overlay').show()
      $('.right_menu').hide()
      $('.vrshow_container_2_min').hide()

      var html = '<div class="overlay_conversation_area_avatar"></div>';
      html += '<div class="overlay_conversation_2">';
      html += '恭喜達成任務！填寫問卷送好禮';
      html += '</div>';
      $('.overlay .overlay_conversation_area').html(html)

      $('.overlay .overlay_btn').text('填寫問卷')
      $('.overlay .overlay_btn').css('font-size', '50px')
      $('.overlay .overlay_btn').css('letter-spacing', '10px')

      localStorage.setItem('overlay_step', 13);
    }
  }


}
function check_event2_clues(){
    clues_count = 0;

    if (localStorage.getItem('event1_clue3_1_1')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_1_2')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_1_3')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_1_4')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_1_5')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_1_6')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_1_7')=='true') {clues_count++;}

    if (localStorage.getItem('event1_clue3_2_1')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_2_2')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_2_3')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_2_4')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_2_5')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_2_6')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_2_7')=='true') {clues_count++;}

    if (localStorage.getItem('event1_clue3_3_1')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_2')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_3')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_4')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_5')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_6')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_7')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_8')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_9')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_10')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_11')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_3_12')=='true') {clues_count++;}

    if (localStorage.getItem('event1_clue3_4_1')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_4_2')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_4_3')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_4_4')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_4_5')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_4_6')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_4_7')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_4_8')=='true') {clues_count++;}
    if (localStorage.getItem('event1_clue3_4_9')=='true') {clues_count++;}


    if (clues_count >= 3) {
      localStorage.setItem('event1_clue3', 'true');
      $('.right_menu_item_3 .right_menu_item_checked').show();
    }

}
