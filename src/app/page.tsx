import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient()
export default async function Page() {
    

 return <>

<header className="flex justify-center">
    
    <h1 className=" p-1 text-5xl text-white-600">Barber App</h1> 

    </header>

<article className ="flex justify-evenly p-64 ">

    <Link href= "/Client" className="border border-slate-300 text-slate-300 px-2 py-1 rounded
  hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
    
   New Clients
    </Link>
  
    <Link href= "/barber" className="border border-slate-300 text-slate-300 px-2 py-1 rounded
  hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
    
  New Barbers
    </Link>


    </article>
    <div className="flex justify-center"><button 
  type="submit"
  className="border border-slate-300 text-slate-300 px-2 py-1 rounded
  hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
     Log in
     </button></div>
  
   
  </>}
