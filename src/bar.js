import { BsPlus,  BsGearFill, BsFillPieChartFill, BsBicycle } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaDiscord size="28" />} />
        <Divider />
        
        <SideBarIcon icon={<BsFillPieChartFill size="20" />} />
        <SideBarIcon icon={<BsBicycle size="20" />} />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'eewwwww' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;