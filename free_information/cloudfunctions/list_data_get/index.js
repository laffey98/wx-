// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection(event.cid).get({
    success: res => {
        if (res.data[j].pic_id == "") res.data[j].pic_id = "cloud://laffey98-6gzp75y12145056a.6c61-laffey98-6gzp75y12145056a-1307562378/default.webp"
    }
  })
}