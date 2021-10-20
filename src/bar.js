import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';





const SideBar =() => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-primary text-white shadow-lg">
        <SideBarIcon icon={<FaFire size="38" />} />
        <SideBarIcon icon={<BsPlus size="40" />} />
        <SideBarIcon icon={<BsFillLightningFill size="30" />} />
        <SideBarIcon icon={<FaPoo size="28" />} />
        <SideBarIcon icon={<BsGearFill size="30" />} />
        </div>
    )
};



const SideBarIcon =({icon, text="eww"}) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);








export default SideBar;