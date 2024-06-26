import React from 'react'
import* as FaIcons from "react-icons/fa"
import* as AiIcons from "react-icons/ai"
import* as IoIcons from "react-icons/io"
import* as RiIcons from "react-icons/ri"


export const SidebarData=[
    {
        title:'Home',
        path:'/home',
        icon:<AiIcons.AiFillHome />,
        iconClosed:<RiIcons.RiArrowDownFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[{
            title:'Users',
            path:'/home/users',
            icon:<IoIcons.IoIosPaper />,
        },{
            title:'Revenue',
            path:'/home/revenue',
            icon:<IoIcons.IoIosPaper />,
            cName:'nav-text'}
    ],
        cName:'nav-text'
    },

    {
        title:'Reports',
        path:'/reports',
        icon:<IoIcons.IoIosPaper />,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<IoIcons.IoMdPeople />,
        cName:'nav-text'
    },
    {
        title:'Messages',
        path:'/',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },{
        title:'Support',
        path:'/supports',
        icon:<IoIcons.IoMdHelpCircle />,
        cName:'nav-text'
    }
]