// pages/anotherAppoint/anotherAppoint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isGet: true,
    isShow: true,
    allSeconds: 60,
    flag: true
  },
  getCode: function() {
    var currentSeconds = this.data.allSeconds;
    this.setData({
      isShow: false
    });
    if (this.data.flag) {
      var timer = setInterval(function() {
        currentSeconds--;
        this.setData({
          allSeconds: currentSeconds
        });
        if (currentSeconds == -1) {
          this.setData({
            flag: true,
            isGet:false
          });
          clearInterval(timer);
        }
      }.bind(this), 1000);
      this.setData({
        flag: false
      });
      // ajax获取验证码
      
    };
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})