// pages/courseOrder/courseOrder.js
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
    index1:{}
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