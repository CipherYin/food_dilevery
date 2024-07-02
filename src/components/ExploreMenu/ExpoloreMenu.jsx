import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"
const ExpoloreMenu = ({category,setCategory}) => {


  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>
            Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience,one delicious meal at time.
        </p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(category===item.menu_name?"ALL":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr></hr>
    </div>
  )
}

export default ExpoloreMenu
