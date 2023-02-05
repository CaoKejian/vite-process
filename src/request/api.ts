import request from './request'

interface AdminLoginData {
  "username":string,
  "pwd":string
}
interface AdminLoginRes {
  code:number,
  data: {
    token:string
  },
  message:string
}

const adminLoginApi = (data:AdminLoginData):Promise<AdminLoginRes> => request.get('/login',{params:data})

export default adminLoginApi
