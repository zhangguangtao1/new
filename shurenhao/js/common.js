$(function(){
    // tabbar点击切换选中效果
    $('.weui-tabbar__item').click(function(){
        $(this).find('.tabbar-item-active').show()
        $(this).find('.tabbar-item').hide()
        $(this).siblings().find('.tabbar-item-active').hide()
        $(this).siblings().find('.tabbar-item').show()
    })

    // 返回上一页
    $('.go-back').click(function(){
        window.history.back(-1); 
    })

    // correct页面
    // 展开
    $('.expand').click(function(){
        $(this).parents('.correct-content').removeClass('active')
        $(this).addClass('hd').siblings('.packUp').removeClass('hd')
    })

    // 收起
    $('.packUp').click(function(){
        $(this).parents('.correct-content').addClass('active')
        $(this).addClass('hd').siblings('.expand').removeClass('hd')
    })

    // 音频播放
    var audio = $('#audioTag').get(0);
    $('#playPause').click(function(){
        //改变暂停/播放icon
        if(audio.paused){
            audio.play();
        } else{
            audio.pause();
        }
    })

    // 图片预览
    var prevewList=$.photoBrowser({
        items: [
          "./image/pic1.png",
          "./image/pic1.png",
          "./image/pic1.png",
          "./image/pic1.png",
        ],

        onSlideChange: function(index) {
          console.log(this, index);
        },

        onOpen: function() {
          console.log("onOpen", this);
        },
        onClose: function() {
          console.log("onClose", this);
        }
      });

    $('.prevew-box img').click(function(){
        let index=$(this).index()
        prevewList.open(index);
    })

    // 三个圆点 点击显示弹窗
    $('.circle-btn').click(function(){
        console.log(1)
        $(this).siblings('.action-prop').toggle()
    })


})