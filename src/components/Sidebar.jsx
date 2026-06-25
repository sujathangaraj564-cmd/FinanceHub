import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaWallet,
  FaExchangeAlt,
  FaBell,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Finance-Hub</h2>

      <Link to="/dashboard">
        <FaHome /> Dashboard
      </Link>

      <Link to="/investments">
        <FaChartLine /> Investments
      </Link>

      <Link to="/members">
        <FaUsers /> Members
      </Link>

      <Link to="/analytics">
        <FaWallet /> Analytics
      </Link>

      <Link to="/transactions">
        <FaExchangeAlt /> Transactions
      </Link>

      <Link to="/updates">
        <FaBell /> Daily Updates
      </Link>

      <Link to="/settings">
        <FaCog /> Settings
      </Link>
    </div>
  );
}

export default Sidebar;