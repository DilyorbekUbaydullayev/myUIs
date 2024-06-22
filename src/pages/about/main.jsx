import React from 'react'
import stl from './main.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdMail, IoMdNotifications } from 'react-icons/io';
import img from '../../assets/Без названия (2).jpg';
import { Col, Row } from 'react-bootstrap';
import { FaChartArea, FaChartBar, FaChartLine, FaChartPie, FaLaptop, FaRegKeyboard, FaTable } from 'react-icons/fa';
import { RiDashboard3Fill, RiFileList2Line } from 'react-icons/ri';
import { CgMenuGridO } from 'react-icons/cg';
const dashboard = [
    {
        icon:<RiDashboard3Fill />,
        title:'Dashboard'
    },
    {
        icon:<FaLaptop />,
        title:'Elements'
    },
    {
        icon:<CgMenuGridO />,
        title:'Widgets'
    },
    {
        icon:<FaRegKeyboard />,
        title:'Forms'
    },
    {
        icon:<FaTable />,
        title:'Tables'
    },
    {
        icon:<FaChartLine />,
        title:'Charts'
    },
    {
        icon:<RiFileList2Line />,
        title:'Pages'
    }
]
const  chart = [<FaChartLine />,<FaChartBar />,<FaChartArea />,<FaChartPie />]
const main = () => {
  return (
    <div className={stl.body}>
      <div className={stl.navbar}>
        <div className={stl.div1}>
            <h3 className={stl.h3}>#DASHMIN</h3>
            <div className={stl.div2}>
            <div className={stl.icon1}><GiHamburgerMenu /></div>
            <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className={stl.div2}>
        <IoMdMail className={stl.icon2} />
        <p>Message</p>
        <IoMdNotifications className={stl.icon2} />
        <p>Notifications</p>
        <img src={img} alt="" style={{borderRadius:'50%'}} />
        <p>John Doe</p>
        </div>
      </div>
      <div className={stl.main}>
        <div>
            <div className={stl.div3}>
                <img src={img} alt="" style={{borderRadius:'50%'}} />
                <div>
                    <h5>John Doe</h5>
                    <p>Admin</p>
                </div>
            </div>
            <div>
             {dashboard.map((e, i) =>{
                return(
                    <div className={stl.div4}>
                  <div className={stl.icon3}>
                  {e.icon}
                  </div>
                    <h5>{e.title}</h5>
                    </div>
                )
             })}
            </div>
        </div>
        <div>
            <div>
                <Row className='gx-5'>
                  {chart.map((e, i) =>{
                    return(
                        <Col md={3} className={stl.col}>
                        <div className={stl.chart}>
                        {e}
                        </div>
                        <div>
                            <h5>Today Sale</h5>
                            <p>$1234</p>
                        </div>
                        </Col>
                    )
                  })}
                </Row>
            </div>
        </div>
      </div>
    </div>
  )
}

export default main
