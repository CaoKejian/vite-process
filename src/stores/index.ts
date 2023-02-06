import { defineStore } from 'pinia'

interface State {
  menus:MenuObj[]
}
interface MenuObj {
  parentId:number
  id:number
  children?:MenuObj[]
}
type NewMenus = {
  [key:number]:MenuObj
}
export const useMainStore =  defineStore('main',{

    state:()=>{
        return {
          menus1:[
            {"id":7,"parentId":0,"createTime":"2023-2-6T11:39:20.000+00:00","title":"订单","level":0,"sort":0,"name":"oms","icon":"order","hidden":0},
            {"id":8,"parentId":7,"createTime":"2023-2-5T11:39:20.000+00:00","title":"订单列表","level":1,"sort":0,"name":"oms","icon":"product-list","hidden":0},
            {"id":9,"parentId":7,"createTime":"2023-2-5T11:39:20.000+00:00","title":"订单设置","level":1,"sort":0,"name":"oms","icon":"product-list","hidden":0}
          ],
            menus:[
              {"id":7,"parentId":0,"createTime":"2023-2-6T11:39:20.000+00:00","title":"订单","level":0,"sort":0,"name":"oms","icon":"order","hidden":0},
              {"id":8,"parentId":7,"createTime":"2023-2-5T11:39:20.000+00:00","title":"订单列表","level":1,"sort":0,"name":"oms","icon":"product-list","hidden":0},
              { "id": 9, "parentId": 7, "createTime": "2021-09-22T08:15:20.000+00:00", "title": "订单设置", "level": 1, "sort": 0, "name": "orderSetting", "icon": "order-setting", "hidden": 0 },
              { "id": 10, "parentId": 7, "createTime": "2021-09-22T08:15:44.000+00:00", "title": "退货申请处理", "level": 1, "sort": 0, "name": "returnApply", "icon": "order-return", "hidden": 0 },
               { "id": 11, "parentId": 7, "createTime": "2021-09-22T08:16:08.000+00:00", "title": "退货原因设置", "level": 1, "sort": 0, "name": "returnReason", "icon": "order-return-reason", "hidden": 0 },
               { "id": 12, "parentId": 0, "createTime": "2021-09-22T06:24:30.000+00:00", "title": "商品", "level": 0, "sort": 0, "name": "pms", "icon": "product", "hidden": 0 },
               { "id": 13, "parentId": 12, "createTime": "2020-02-02T06:52:44.000+00:00", "title": "添加商品", "level": 1, "sort": 0, "name": "addProduct", "icon": "product-add", "hidden": 0 }, 
              { "id": 14, "parentId": 12, "createTime": "2021-07-15T14:27:14.000+00:00", "title": "商品分类", "level": 1, "sort": 0, "name": "productCate", "icon": "product-cate", "hidden": 0 },
               { "id": 15, "parentId": 12, "createTime": "2021-08-21T02:36:15.000+00:00", "title": "商品列表", "level": 1, "sort": 0, "name": "product", "icon": "product-list", "hidden": 0 },
               { "id": 16, "parentId": 0, "createTime": "2021-09-22T08:06:47.000+00:00", "title": "营销", "level": 0, "sort": 0, "name": "sms", "icon": "sms", "hidden": 0 },
                 { "id": 17, "parentId":12, "createTime": "2021-05-26T10:25:08.000+00:00", "title": "秒杀商品列表", "level": 1, "sort": 0, "name": "flashProductRelation", "icon": "flashProductRelation", "hidden": 1 },
               { "id": 18, "parentId": 16, "createTime": "2020-02-04T08:19:22.000+00:00", "title": "秒杀活动列表", "level": 1, "sort": 0, "name": "flash", "icon": "sms-flash", "hidden": 0 },
               { "id": 19, "parentId": 16, "createTime": "2020-02-04T08:20:16.000+00:00", "title": "优惠券列表", "level": 1, "sort": 0, "name": "coupon", "icon": "sms-coupon", "hidden": 0 },
               { "id": 20, "parentId": 16, "createTime": "2020-02-07T08:22:38.000+00:00", "title": "品牌推荐", "level": 1, "sort": 0, "name": "homeBrand", "icon": "product-brand", "hidden": 0 },
             { "id": 21, "parentId": 16, "createTime": "2020-02-07T08:23:14.000+00:00", "title": "新品推荐", "level": 1, "sort": 0, "name": "homeNew", "icon": "sms-new", "hidden": 0 },
               { "id": 22, "parentId": 16, "createTime": "2020-02-07T08:26:38.000+00:00", "title": "人气推荐", "level": 1, "sort": 0, "name": "homeHot", "icon": "sms-hot", "hidden": 0 }, 
               { "id": 19, "parentId": 16, "createTime": "2020-02-07T08:28:16.000+00:00", "title": "专题推荐", "level": 1, "sort": 0, "name": "homeSubject", "icon": "sms-subject", "hidden": 0 },
               { "id": 20, "parentId": 16, "createTime": "2020-02-07T08:28:42.000+00:00", "title": "广告列表", "level": 1, "sort": 0, "name": "homeAdvertise", "icon": "sms-ad", "hidden": 0 },
               { "id": 21, "parentId": 0, "createTime": "2021-09-22T06:24:30.000+00:00", "title": "权限", "level": 0, "sort": 0, "name": "ums", "icon": "ums", "hidden": 0 },
               { "id": 22, "parentId": 21, "createTime": "2021-08-21T01:36:21.000+00:00", "title": "用户列表", "level": 1, "sort": 0, "name": "admin", "icon": "ums-admin", "hidden": 0 },
             { "id": 23, "parentId": 21, "createTime": "2021-07-15T14:27:14.000+00:00", "title": "资源列表", "level": 1, "sort": 0, "name": "resource", "icon": "ums-resource", "hidden": 0 }, 
             { "id": 24, "parentId": 21, "createTime": "2021-08-21T01:36:21.000+00:00", "title": "分配菜单", "level": 1, "sort": 0, "name": "allocMenu", "icon": "allocMenu", "hidden": 1 }, 
             { "id": 25, "parentId": 21, "createTime": "2021-07-15T14:27:14.000+00:00", "title": "分配资源", "level": 1, "sort": 0, "name": "allocResource", "icon": "allocResource", "hidden": 1 },
             { "id": 26, "parentId": 21, "createTime": "2021-07-15T14:27:14.000+00:00", "title": "编辑角色", "level": 1, "sort": 0, "name": "editRole", "icon": "editRole", "hidden": 1 }, 
             { "id": 27, "parentId": 21, "createTime": "2021-08-21T01:36:21.000+00:00", "title": "添加菜单", "level": 1, "sort": 0, "name": "addMenu", "icon": "addMenu", "hidden": 1 },
          ]
        }
    },
    getters:{

      getNewMenus(state){
        const newMenus:NewMenus = {}
        const menus = state.menus
        console.log(menus);
        
        for(let i = 0; i < menus.length;i++){
          if(menus[i].parentId === 0){
            // 一级菜单
            newMenus[menus[i].id] ={...menus[i]} 
          }else{
            // 二级菜单
            let parentId =  menus[i].parentId
            newMenus[parentId].children = newMenus[parentId].children || []
            newMenus[parentId].children?.push(menus[i])
            console.log(newMenus[parentId]);
          }
        }
        return newMenus
      }
    },
    actions:{}
})
