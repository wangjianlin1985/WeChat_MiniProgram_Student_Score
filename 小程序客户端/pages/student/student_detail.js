var utils = require("../../utils/common.js")
var config = require("../../utils/config.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    studentNumber: "", //学号
    password: "", //学生密码
    classInfoId: "", //所在班级
    studentName: "", //姓名
    sex: "", //性别
    photoUrlUrl: "", //学生照片
    birthday: "", //出生日期
    zzmm: "", //政治面貌
    telephone: "", //联系电话
    address: "", //家庭地址
    loadingHide: true,
    loadingText: "网络操作中。。",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var self = this
    var studentNumber = params.studentNumber
    var url = config.basePath + "api/student/get/" + studentNumber
    utils.sendRequest(url, {}, function (studentRes) {
      wx.stopPullDownRefresh()
      self.setData({
        studentNumber: studentRes.data.studentNumber,
        password: studentRes.data.password,
        classInfoId: studentRes.data.classInfoId.className,
        studentName: studentRes.data.studentName,
        sex: studentRes.data.sex,
        photoUrl: studentRes.data.photoUrl,
        photoUrlUrl: studentRes.data.photoUrlUrl,
        birthday: studentRes.data.birthday,
        zzmm: studentRes.data.zzmm,
        telephone: studentRes.data.telephone,
        address: studentRes.data.address,
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  }

})

