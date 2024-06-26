import React,{useState} from 'react'
import* as FaIcons from "react-icons/fa"
import* as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import SubMenu from './SubMenu'

   
   
    const Nav=styled(Link)`
    background:#15171c;
    height:80px;
    display:flex;
    justify-content:flex-start;
    aliign-items:center;

    `;
    const NavIcon=styled(Link)`
    margin-left:2rem;
    font-size:2rem;
    height:80px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    `;
    const SidebarNav=styled.nav`
    background:#15171c;
width:250px;
height:100vh;display:flex;
justify-content:center;
position:fixed;
top:0;
left:${({sidebar})=>(sidebar ?'0':'-100%')};
transition:360ms;
z-index:10;
    `;
    const SidebarWrap=styled.div`
width:100%;
    `
    const Navbar=()=> {debugger;
        const[sidebar,setSidebar]=useState(false);
   
        const showSidebar=()=> setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <Nav>
        <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}><SidebarWrap>
        <NavIcon>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {
    SidebarData.map((item,index)=>{debugger;
    return<SubMenu item={item} key={index}/>;
    })
}
            </SidebarWrap></SidebarNav></IconContext.Provider></>
  );
};
  
export default Navbar