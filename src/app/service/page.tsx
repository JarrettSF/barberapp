import Link from "next/link"
import { prisma } from "../db"
import { redirect } from "next/navigation"

async function createCut(data: FormData){
  "use server"
  
  const regular = data.get("regular")?.valueOf()
  const fade = data.get("fade")?.valueOf()
  const shave = data.get("shave")?.valueOf()
  const women = data.get("women")?.valueOf()
  const children = data.get("children")?.valueOf()
  const senior = data.get("senior")?.valueOf()
  
  
  if(typeof regular !== "string" || regular.length === 0){
  throw new Error("invalid")
  }
   else if(typeof fade !== "string" || fade.length === 0){
    throw new Error("invalid")}
  
    else if(typeof shave !== "string" || shave.length === 0){
      throw new Error("invalid")}
    
     else if(typeof women !== "string" || women.length === 0){
        throw new Error("invalid")}
  
        else if(typeof children !== "string" || children.length === 0){
          throw new Error("invalid")}

          else if(typeof senior !== "string" || senior.length === 0){
            throw new Error("invalid")}

await prisma.haircut.create({data:{
    
    regular,
    fade,
    shave,
    women,
    children,
    senior
    
    }}) 
  redirect('/') 
  
  }

export default async function Home(){
   
  
    return <>
    
    <header className=" flex justify-center items-center mb-4">
    
  <h1 className="text-4xl">Describe the service would you like?</h1>
 
  </header>
<form action = {createCut}>
  <div className=" flex justify-even items-center p-4">

  <label className="p-3 m-2" > Regular Hair Cut</label>
  <input className="m-3" type="text"  name="regular" />

  <label className="p-3 m-2" htmlFor="fade"> Fade / Special Cut</label>
<input className="m-3" type="text" id="fade" name="fade" value="cut"/>

<label  className="p-3 m-2" htmlFor="shave"> Shave</label>
<input  className="m-3" type="text" id="shave" name="shave" value="cut"/>


  </div>
  
  <div className=" flex justify-even items-center">

<label className="p-3 m-2" htmlFor="womensCut"> Womens Cut</label>
<input className="m-3" type="text" id="womensCut" name="women" value="cut"/>

<label className="p-3 m-2" htmlFor="childrensCut"> Childrens Cut</label>
<input className="m-3" type="text" id="childrensCut" name="children" value="cut"/>

<label className="p-3 m-2" htmlFor="seniorCut"> Senior Cut</label>
<input className="m-3" type="text" id="seniorCut" name="senior" value="cut"/>


</div>


<Link href= "./"
  className="border border-slate-300 text-slate-300 px-2 py-1 rounded
  hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
    
     Cancel</Link>

  <button 
  type="submit"
  className="border border-slate-300 text-slate-300 px-2 py-1 rounded
  hover:bg-slate-700 focus-within:bg-slate-700 outline-none">
    Select Service
     </button>



</form>

    </>
   }
  