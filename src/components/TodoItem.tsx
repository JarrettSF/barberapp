type ItemProps = {
    firstName : string
    lastName : string
    shopName : string
    phoneNumber : string
  
}


export function TodoItem ({firstName, lastName, shopName, phoneNumber} :ItemProps)

{

return <li className="flex gap-1 items-center">


<label  className="cursor-pointer peer-checked:line-through">
    
    {firstName}{lastName}
    
</label>

</li>

}