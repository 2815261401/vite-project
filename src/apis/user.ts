import { request } from "@/utils";

export class User {
  id?: string;
  userType!: string
  userName!: string;
  constructor(data:User) {
    this.id = data.id;
    this.userType = data.userType;
    this.userName = data.userName;
  }
}
export const userList =async () => {
  if (import.meta.env.SSR) {
    return void 0;
  }
  const {data} =(await request({
    
    url: "/user/list",
    method: "post",
    
  }) as {data:User[]})
  return data.map(v=>new User(v));
};
