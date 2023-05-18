var utils = require("../../utils/common.js")
var config = require("../../utils/config.js")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    studentNumber: "", //学号
    password: "", //学生密码
    classInfoId_Index: "0", //所在班级
    classInfos: [],
    studentName: "", //姓名
    sex: "", //性别
    photoUrl: "upload/NoImage.jpg", //学生照片
    photoUrlUrl: "",
    photoUrlList: [],
    birthday: "", //出生日期
    zzmm: "", //政治面貌
    telephone: "", //联系电话
    address: "", //家庭地址
    loadingHide: true,
    loadingText: "网络操作中。。",
  },

  //选择出生日期事件
  bind_birthday_change: function (e) {
    this.setData({
      birthday: e.detail.value
    })
  },
  //清空出生日期事件
  clear_birthday: function (e) {
    this.setData({
      birthday: "",
    });
  },

  //选择学生照片上传
  select_photoUrl: function (e) {
    var self = this
    wx.chooseImage({
      count: 1,   //可以上传一张图片
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        self.setData({
          photoUrlList: tempFilePaths,
          loadingHide: false, 
        });

        utils.sendUploadImage(config.basePath + "upload/image", tempFilePaths[0], function (res) {
          wx.stopPullDownRefresh()
          setTimeout(function () {
            self.setData({
              photoUrl: res.data,
              loadingHide: true
            })
          }, 200)
        })
      }
    })
  },

  //所在班级修改事件
  bind_classInfoId_change: function (e) {
    this.setData({
      classInfoId_Index: e.detail.value
    })
  },

  //提交服务器修改学生信息信息
  formSubmit: function (e) {
    var self = this
    var formData = e.detail.value
    var url = config.basePath + "api/student/update"
    utils.sendRequest(url, formData, function (res) {
      wx.stopPullDownRefresh();
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 500
      })

      //服务器修改成功返回列表页更新显示为最新的数据
      var pages = getCurrentPages()
      var studentlist_page = pages[pages.length - 2];
      var students = studentlist_page.data.students
      for(var i=0;i<students.length;i++) {
        if(students[i].studentNumber == res.data.studentNumber) {
          students[i] = res.data
          break
        }
      }
      studentlist_page.setData({students:students})
      setTimeout(function () {
        wx.navigateBack({})
      }, 500) 
    })
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
        classInfoId_Index: 1,
        studentName: studentRes.data.studentName,
        sex: studentRes.data.sex,
        photoUrl: studentRes.data.photoUrl,
        photoUrlUrl: studentRes.data.photoUrlUrl,
        birthday: studentRes.data.birthday,
        zzmm: studentRes.data.zzmm,
        telephone: studentRes.data.telephone,
        address: studentRes.data.address,
      })

      var classInfoUrl = config.basePath + "api/classInfo/listAll" 
      utils.sendRequest(classInfoUrl, null, function (res) {
        wx.stopPullDownRefresh()
        self.setData({
          classInfos: res.data,
        })
        for (var i = 0; i < self.data.classInfos.length; i++) {
          if (studentRes.data.classInfoId.classNo == self.data.classInfos[i].classNo) {
            self.setData({
              classInfoId_Index: i,
            });
            break;
          }
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

})

