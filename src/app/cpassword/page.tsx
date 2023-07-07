import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";
import { TodoItem } from "@/components/TodoItem";

function getFirstName() {
  return prisma.client.findMany()
}


async function createPassword(data: FormData){
"use server"

const userName = data.get("userName")?.valueOf()
const password = data.get("password")?.valueOf()


if(typeof userName !== "string" || userName.length === 0){
throw new Error("invalid")
}
 else if(typeof password !== "string" || password.length === 0){
  throw new Error("invalid")}


 await prisma.password.create({data:{
    
  userName,
  password
  
  }}) 
redirect('/service') 

}  

export default async function Home(){
  const name = await getFirstName()

  return <>
  
  <header className=" flex justify-center items-center mb-4">
  <ul className =" flex justify-center p1-4">
  {name.map( todo => 
    ( 
    
    <TodoItem  {...todo} />
    
    )
    )}
 </ul>


</header>

<form action={createPassword} className="flex justify-center  flex-col">
<label>User Name</label>
<input type="text" 
      name="userName"
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded
hover:bg-slate-700 focus-within:bg-slate-700 outline-none" />

<label>Password</label>
<input type="text" 
      name="password"
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded
hover:bg-slate-700 focus-within:bg-slate-700 outline-none" />


<div className="flex gap-1 justify-end">

<Link href= "./"
className="border border-slate-300 text-slate-300 px-2 py-1 rounded
hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
  
   Cancel</Link>

<button 
type="submit"
className="border border-slate-300 text-slate-300 px-2 py-1 rounded
hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
   Create 
   </button>

  </div>
  </form>
  </>
 }
