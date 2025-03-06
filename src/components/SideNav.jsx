import { useState } from "react";
import { Home, List, Calendar, BarChart, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [active, setActive] = useState("Dashboard");

    const menuItems = [
        { name: "Dashboard", icon: <Home size={20} />, link: "/dashboard" },
        { name: "Tasks", icon: <List size={20} />, link: "/task-manager" },
        { name: "Calendar", icon: <Calendar size={20} />, link: "/calendar" },
        { name: "Analytics", icon: <BarChart size={20} />, link: "#" },
        { name: "Settings", icon: <Settings size={20} />, link: "#" },
    ];
    const navigate = useNavigate();

    const handleClick = (item) => {
        // Redirect to the specified link
        setActive(item.name)
        navigate(item.link, { new: true });

    }

    return (
        <>        <aside className="h-screen w-64 bg-white shadow-md flex flex-col p-4">

            <nav>
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => handleClick(item)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg text-gray-700 transition-all hover:bg-gray-100 ${active === item.name ? "bg-blue-100 text-blue-600 font-semibold" : ""
                            }`}
                    >
                        {item.icon}
                        <span className="ml-3">{item.name}</span>
                    </button>
                ))}
            </nav>
        </aside>
        </>

    );
};

export default Sidebar;