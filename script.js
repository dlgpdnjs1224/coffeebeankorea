$(document).ready(function(){

    $('#menu>li').mouseover(function(){
        $(this).children('.sub').stop().slideDown()
    })
    $('#menu>li').mouseout(function(){
        $(this).children('.sub').stop().slideUp()
    })


    //search box---------------
    searchNum =0;
    $('#search').click(function(){
        if(searchNum ==0){
            searchNum = 1;
            $(this).attr({'src':'icons/header_srch_close_btn.png'})
            $('#search_box').slideDown()
        }
        else if (searchNum==1){
            searchNum = 0;
            $(this).attr({'src':'icons/ico_search.png'})
            $('#search_box').slideUp()
        }
    })
    

    // header banner-------
    HeadBannerToggle = 0;
    $('#header1_box>ul>li:last-child').click(function(){
        if(HeadBannerToggle==0){
            HeadBannerToggle =1;
            $(this).children().attr({'src':'icons/ico_user_info_line_on.png'})
            $('#user_info_wrap').slideDown()
            $('#main_slide').animate({'margin-top':'261px'})
        }
        else if(HeadBannerToggle == 1){
            HeadBannerToggle =0;
            $(this).children().attr({'src':'icons/ico_user_info_line.png'})
            $('#user_info_wrap').hide()
            $('#main_slide').css({'margin-top':'140px'})
        }
    })
    
    //pick slide------------ 
    pickSlide = 0;
    pickAutoNum = 100
    pickPlayStop = 0;
    $('#md_pick_bt_box img').click(function(){
        if(pickPlayStop == 0){
            pickPlayStop = 1;
            pickAutoNum = 0;
            $(this).attr({'src':'icons/btn_play.png'})
        }
        else if( pickPlayStop == 1){
            pickPlayStop = 0;
            pickAutoNum = 100;
            $(this).attr({'src':'icons/btn_pause.png'})
        }
    })

    setInterval(function(){
        if(pickSlide<=-200){
            $('#pick_slide').css({'left':'0'})
            pickSlide = 0;
        }
        pickSlide = pickSlide-pickAutoNum;
        $('#pick_slide').animate({'left':pickSlide+'%'},1800)
        pickSlideBt = pickSlide/-100;
        if(pickSlideBt==2){pickSlideBt=0}
        $('#md_pick_bt>li').eq(pickSlideBt).css({'background-color':'#d4641a'}).siblings().css({'background-color':'#eee'})
    },5000)
    
    $('#md_pick_bt>li').click(function(){
        pickSlide = $(this).index()*-100;
        $('#pick_slide').animate({'left':pickSlide+'%'},1800)
        $(this).css({'background-color':'#d4641a'}).siblings().css({'background-color':'#eee'})
    })
    //-------------------+


    //whats_new-------------
    newSlide = 0;
    newAutoNum = 100;
    newPlayStop = 0;
    //0 -100 -200 -300 -400 -500
    $('#what_new_bt_wrap img').click(function(){
        if(newPlayStop == 0){
            newPlayStop = 1;
            newAutoNum = 0;
            $(this).attr({'src':'icons/btn_play.png'})
        }
        else if( newPlayStop == 1){
            newPlayStop = 0;
            newAutoNum = 100;
            $(this).attr({'src':'icons/btn_pause.png'})
        }
    })

    setInterval(function(){
        if(newSlide<=-500){
            $('#new_thing').css({'left':'0'})
            newSlide=0
        }
        newSlide = newSlide-newAutoNum;
        $('#new_thing').animate({'left':newSlide+'%'},1800)
        newSlideBt = newSlide/-100;
        if(newSlideBt==5){newSlideBt=0}
        $('#what_new_bt>li').eq(newSlideBt).css({'background-color':'#d4641a'}).siblings().css({'background-color':'#eee'})
    },5000)


    $('#what_new_bt>li').click(function(){
        newSlide = $(this).index()*-100;
        $('#new_thing').animate({'left':newSlide+'%'},1800)
        $(this).css({'background-color':'#d4641a'}).siblings().css({'background-color':'#eee'})
    })
    //----------------+


    // 
    $('#btn_top').click(function(){
        $('body,html').animate({scrollTop:0},600)
    })
    
    
})