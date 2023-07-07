type ItemProps = {
    firstName : string
    lastName : string
   
  
}


export function TodoItem ({firstName, lastName,} :ItemProps)

{

return <li className="flex gap-1 items-center">


<label  className="cursor-pointer peer-checked:line-through">
    
   Thanks for signing up {firstName}  {lastName}. Create a User Name and Password.
    
</label>

</li>

}