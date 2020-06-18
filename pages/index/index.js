//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //轮播图数据
    swiperSrc:[
      {src:"https://pic.downk.cc/item/5ed76ef6c2a9a83be56901a9.jpg"},
      {src:"https://pic.downk.cc/item/5ed76ef0c2a9a83be568f94d.jpg"}
    ],

    //精品课程
    course:[
      {courseTitle:"英语小白的破冰之旅",src:"https://pic.downk.cc/item/5eda0002c2a9a83be51dd368.jpg"},
    ],

    //学校相册
    albumSrc:[
      {src:"https://pic.downk.cc/item/5ed9ffc8c2a9a83be51d7a82.jpg"},
      {src:"https://pic.downk.cc/item/5ed9ffdac2a9a83be51d93ce.jpg"},
      {src:"https://pic.downk.cc/item/5ed9ffeac2a9a83be51dab99.jpg"},
      {src:"https://pic.downk.cc/item/5eda0002c2a9a83be51dd368.jpg"}
    ],

    //资讯活动
    activity:[
      {id:"0",src:"https://pic.downk.cc/item/5eda0c4ac2a9a83be533f3ea.jpg",title:"语匠社搬家啦！",date:"2020-03-01"},
      {id:"1",src:"https://pic.downk.cc/item/5eda0c4ac2a9a83be533f3ea.jpg",title:"语匠社暑期夏令营！",date:"2020-06-01"}
    ],

    //地图
    markers:[{
      iconPath: "../../icon/map/location.png",
      id: 0,
      latitude: 30.706-0.0060,
      longitude: 104.037448-0.0065,
      width: 30,
      height: 30
    }],
    latitude: 30.706-0.0060,
    longitude: 104.037448-0.0065
  },

  switchToTeacher(e){
    wx.switchTab({
      url: '/pages/teacher/teacher',
    });
  },

  switchToCourse(e){
    wx.switchTab({
      url: '/pages/course/course',
    });
  },

  switchToContact(e){
    wx.switchTab({
      url: '/pages/contact/contact',
    });
  },

  toCourseMore(e){
    wx.switchTab({
      url: '/pages/course/course',
    });
  },

  toCourse(e){
    wx.switchTab({
      url: '/pages/course/course',
    });
  },

  toAlbumMore(e){
    wx.navigateTo({
      url: '/pages/album/album',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  toActivityMore(e){
    wx.navigateTo({
      url: '/pages/activity/activity',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  
  toContactMore(e){
    wx.switchTab({
      url: '/pages/contact/contact',
    });
  },

  //预览图片
  topic_preview: function(e){
    console.log(e)
    var that = this;
    var src = e.currentTarget.dataset.src;
    var previewImgArr = [];
    //通过循环在数据链里面找到和这个id相同的这一组数据，然后再取出这一组数据当中的图片
    var data = that.data.albumSrc;

    for (var i in data) {
      previewImgArr.push(data[i].src) ;
    }
    
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: previewImgArr // 需要预览的图片http链接列表
    })
  }
})
