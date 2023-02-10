interface AdminObjItf {
  username?:string
  nickName?:string
  email?:string
  password?:string
  note?:string
  status?:number
}

interface infoObj {
  id:number
  createTime:string
  email:string
  icon:string|null
  id:number
  loginTime:string|null
  nickName:string
  note:string
  password:string
  status:number
  username:string
}

type Newinfo =  {
  [key:number]:infoObj 
}