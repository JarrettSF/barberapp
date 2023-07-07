import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createBarber(data: FormData){
"use server"

const firstName = data.get("firstName")?.valueOf()
const lastName = data.get("lastName")?.valueOf()
const shopName = data.get("shopName")?.valueOf()
const phoneNumber = data.get("phoneNumber")?.valueOf()


if(typeof firstName !== "string" || firstName.length === 0){
throw new Error("invalid")
}
 else if(typeof lastName !== "string" || lastName.length === 0){
  throw new Error("invalid")}

  else if(typeof shopName !== "string" || shopName.length === 0){
    throw new Error("invalid")}
  
   else if(typeof phoneNumber !== "string" || phoneNumber.length === 0){
      throw new Error("invalid")}

 await prisma.barber.create({data:{
    
  firstName,
  lastName,
  shopName,
  phoneNumber
  
  }}) 
redirect('/password') 

}  

export default function Home(){

    return <>
    
    <header className=" flex justify-center items-center mb-4">
    
    <h1 className=" flex justify-center text-2x1">New Barber Sign Up</h1> 

  </header>
  
  <form action={createBarber} className="flex justify-center  flex-col">
<label>First Name</label>
<input type="text" 
        name="firstName"
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded
  hover:bg-slate-700 focus-within:bg-slate-700 outline-none" />
 
 <label>Last Name</label>
<input type="text" 
        name="lastName"
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded
  hover:bg-slate-700 focus-within:bg-slate-700 outline-none" />
 
 <label>Shop Name</label>
<input type="text" 
        name="shopName"
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded
  hover:bg-slate-700 focus-within:bg-slate-700 outline-none" />
 
 <label>Phone Number</label>
<input type="text" 
        name="phoneNumber"
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
     Sign Up
     </button>

    </div>
    </form>
    </>
   }
