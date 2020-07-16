// promisey语法
export const request=(params)=>{

  // 定义公共的url
  const baseUrl="http://127.0.0.1:8989";
  return new Promise((resolve,reject)=>{
    wx.request({
     ...params,
     url:baseUrl+params.url,
     data:params.data,
     header:params.header,
     success:(result)=>{
       resolve(result);
     },
     fail:(err)=>{
       reject(err);
     }
    });
  })
}