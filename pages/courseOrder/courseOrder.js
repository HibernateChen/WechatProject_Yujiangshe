// pages/courseOrder/courseOrder.js
import {request} from "../../request/index.js"
var util = require('../../utils/util.js');//引入工具类处理日期问题
var app = getApp();//方便获取全局data
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseInfo:[
      {situation:"电话详询",age:"16岁以上",stage:"零基础入门",hours:"2节",type:"小班",
        introduce:"【适用人群】：\n1.想要夯实基础、顺利交流的同学；\n2.在旅游，工作，生活中有英语交流需求的同学；\n3.在时间相对灵活，不满足于枯燥乏味，千篇一律的生活，想要结识更多有趣伙伴的同学。\n\n【课程涵盖】：\n实用英语课程：\n精选剑桥标准英语教程，给你一个地道的美式英语学习环境。\n掌握关于个人，社交生活，周围环境，旅游生存英语等生活场景的基本表达。\n了解正确且有趣的学习方法，提升信心。\n\n【特色】：\n课前进行一对一口测，根据学生水平安排课程。\n内容授课形式灵活，可选择班课体验和一对一体验。\n课后答疑，作业监督，学习效果看得到。\n\n*请致电索要当周的课表，以便选择合适的课程。"},
      {situation:"电话详询",age:"16岁以上",stage:"零基础入门",hours:"2节",type:"1对1",
        introduce:"【适用人群】：\n1.想要夯实基础、顺利交流的同学；\n2.有英语交流需求，但缺少口语实战环境和机会的同学；\n3.时间相对灵活，想要结识更多有趣伙伴的同学。\n\n【课程特色】\n1.语匠社潜心打造的在线成人口语基础课程；\n2.大量情景模拟对话练习和口语实战练习，培养语感，学以致用；\n3.轻松有趣，一个小时收获满满的同时也成就感爆棚；\n4.打破传统课堂的地域限制，躺着也能练英语。"},
      {situation:"电话详询",age:"15岁以上",stage:"初级阶段",hours:"1节",type:"1对1",
        introduce:"【说明】：\n本课程为雅思阅读1对1单词试听，不可用于正式课费用抵扣。"},
      {situation:"电话详询",age:"15岁以上",stage:"零基础入门",hours:"1节",type:"1对1",
        introduce:"海归团队为你规划留学之路，因为经历过，所以更懂你。该课程适用于初次留学规划，通过学生自身学习经历，性格，家庭支付能力，规划出合适的留学计划。"},
      {situation:"电话详询",age:"15岁以上",stage:"高级阶段",hours:"3节",type:"小班",
        introduce:"【适用人群】：\n1.能够应对日常交流，想要进一步提升口语水平的同学；\n2.时间相对灵活，不满足于枯燥乏味，千篇一律的生活，想要结识更多有趣伙伴的同学。\n\n【课程涵盖】：\n实用英语课程：\n1.精选剑桥标准英语教程，给你一个地道的美式英语学习环境。\n2.掌握关于个人，社交生活，周围环境，旅游生存英语等生活场景的基本表达。\n3.了解正确且有趣的学习方法，提升信心。\n\n*请致电索要当周的课表，以便选择合适的课程"},
      {situation:"电话详询",age:"15岁以上",stage:"零基础入门",hours:"3节",type:"1对1",
        introduce:"本课程适用于成人零基础，打算参加考试的同学，梳理基础语法，扩充词汇。"}
    ],
    src:{},
    title:{},
    index1:{},

    hideFlag: true,//true-隐藏  false-显示 控制模态框显示隐藏
    animationData: {},//模态框

    //orderInfo:[]//用户预约信息用于存缓存
  },

  /**
   * 将上个页面传递过来的src参数和index参数设置到本页面
   */
  onLoad: function (options) {
    this.setData({
      src:options.src,
      index1:options.index,
      title:options.title
    })
  },

  //-------底部滑出模态框----------
  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideFlag: false
    })
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间
      timingFunction: 'ease',//动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; //将animation变量赋值给当前动画
    var time1 = setTimeout(function () {
      that.slideIn();//调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },
 
  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间 默认400ms
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown();//调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        hideFlag: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 220)//先执行下滑动画，再隐藏模块
    
  },
  //动画 -- 滑入
  slideIn: function () {
    this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画
    this.setData({
      //动画实例的export方法导出动画数据传递给组件的animation属性
      animationData: this.animation.export()
    })
  },
  //动画 -- 滑出
  slideDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },
  //获取表单提交的姓名和电话，并存入缓存
  async formSubmit(e){
    var that = this;
    var info;
    for(var i=0;i<4; i++){
      info = {
        type:"course",
        date:util.formatTime(new Date()),
        title:that.data.title,
        name:e.detail.value.name,
        phone:e.detail.value.phone
      };
    };

    // 点击预约课程后将数据提交到后台
    // wx.request({
    //   url: 'http://192.168.0.105:8080/order/submitOrderedCourse', 
    //   data: {
    //     type: 'course',
    //     date: util.formatTime(new Date()),
    //     title: that.data.title,
    //     name: e.detail.value.name,
    //     phone: e.detail.value.phone
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success (res) {
    //     console.log("提交成功")
    //     wx.showToast({
    //       title: "预约成功",
    //       icon:"success",
    //       duration: 1000
    //     })
    //   },
    //   fail(res){
    //     console.log("提交失败")
    //     wx.showToast({
    //       title: "预约失败，请重试...",
    //       icon:"none",
    //       duration: 3000
    //     })
    //   },
    //   complete(res){
    //     console.log("操作完成")
    //   }
    // })

    //使用promise语法
    // request({url:"/order/submitOrderedCourse",
    // data: {
    //   type: 'course',
    //   date: util.formatTime(new Date()),
    //   title: that.data.title,
    //   name: e.detail.value.name,
    //   phone: e.detail.value.phone
    // },header: {
    //   'content-type': 'application/json' // 默认值
    // }})
    // .then(res=>{
    //   console.log(res)
    //   if(res.data.status==true){
    //     console.log("提交成功")
    //     wx.showToast({
    //       title: "预约成功",
    //       icon:"success",
    //       duration: 3000
    //     });
    //     //获取全局orderInfo对象(后台链接成功之后执行)
    //     var orderInfo = app.globalData.orderInfo;
    //     //全局orderInfo对象存入表单提交过来的info数据
    //     orderInfo.push(info);
    //     //存入缓存
    //     wx.setStorageSync("orderInfo", app.globalData.orderInfo);
    //   }else{
    //     console.log("提交失败")
    //     wx.showToast({
    //       title: "预约失败，请重试...",
    //       icon:"none",
    //       duration: 3000
    //     })
    //   }
    // })

    //使用async语法
    const res = await request({url:"/order/submitOrderedCourse",
    data: {
      type: 'course',
      date: util.formatTime(new Date()),
      title: that.data.title,
      name: e.detail.value.name,
      phone: e.detail.value.phone
    },header: {
      'content-type': 'application/json' // 默认值
    }});
    if(res.data.status==true){
      console.log("提交成功")
      wx.showToast({
        title: "预约成功",
        icon:"success",
        duration: 3000
      });
      //获取全局orderInfo对象(后台链接成功之后执行)
      var orderInfo = app.globalData.orderInfo;
      //全局orderInfo对象存入表单提交过来的info数据
      orderInfo.push(info);
      //存入缓存
      wx.setStorageSync("orderInfo", app.globalData.orderInfo);
    }else{
      console.log("提交失败")
      wx.showToast({
        title: "预约失败，请重试...",
        icon:"none",
        duration: 3000
      })
    }

  },
  //点击确认预约收起模态框
  comfirmOrder(){
    var that = this;
    var animation = wx.createAnimation({
      duration: 400,//动画的持续时间 默认400ms
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown();//调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        hideFlag: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 220)//先执行下滑动画，再隐藏模块
  },
  //-----------底部滑出模态框------------

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})