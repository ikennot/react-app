function Item({name,ispacked}){
  
    return <li className="item">{ispacked ? name + '✅' : name + '❌'}</li>
    

   
}


export default function Packs(){
    return(
        <section>
          <h1>My Packing List</h1>
          <ul>
            <Item name="Shirt" ispacked={false}/>
             <Item name="Polo" ispacked={true}/>
             <Item name="BackPack" ispacked={true}/>

          </ul>
        </section>
       
        
    )
}