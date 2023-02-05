import request from './request'

interface AdminLoginData {
  username:string,
  pwd:string
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
  menus:[],
}


export const adminLoginApi = (data:AdminLoginData):PromiseRes<AdminLoginRes> => request.get('/login',{params:data})

export const getAdminInfoApi = ():PromiseRes<AdminInfoRes> => request.get('/info')