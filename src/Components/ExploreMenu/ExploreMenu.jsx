import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>ExploreMenu</h1>
      <p className='explore-menu-text'>Getting your food delivered right to your doorstep has never been easier! There are so many food delivery options available, and each one has its own unique slogan. Here are MORE food delivery slogans ideas to get you started:</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory((prev=>(prev===item.menu_name?"All":item.menu_name)))} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr/>
    </div>
  );
}

export default ExploreMenu;
