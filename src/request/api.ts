import request from './request'

interface AdminLoginData {
  username:string,
  pwd:string
}
interface AdminListParams {
  keyword:string
  pageNum:number
  pageSize:number
}
type PromiseRes<T> = Promise<ManageResult<T>>
interface ManageResult<T> {
  code:number,
  data: T,
  // message:string
}
interface AdminLoginRes{
  token:string
}
interface AdminInfoRes{
  menus:[]
}
interface Admin{

}

export const adminLoginApi = (data:AdminLoginData):PromiseRes<AdminLoginRes> => request.get('/login',{params:data})

export const getAdminInfoApi = ():PromiseRes<AdminInfoRes> => request.get('/info')

export const getAdminLists = (data:AdminListParams):PromiseRes<{list:{}[]}> => request.get('/list/root',{params:data})