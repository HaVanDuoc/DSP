import appConfig from "@/config/appConfig";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import { Tag } from "@/config/icons";

export const NAV_PROFILE = [
  {
    name: "Thông tin tài khoản",
    href: appConfig.path.account,
    startContent: <PersonOutlineOutlinedIcon />,
  },
  {
    name: "Sổ địa chỉ",
    href: appConfig.path.address,
    startContent: <ArchiveOutlinedIcon />,
  },
  {
    name: "Quản lý đơn hàng",
    href: appConfig.path.order,
    startContent: <DiscountOutlinedIcon />,
  },
  {
    name: "Thông báo",
    href: appConfig.path.notify,
    startContent: <NotificationsNoneOutlinedIcon />,
  },
  {
    name: "Mã giảm giá",
    href: appConfig.path.promotion,
    startContent: <Tag size={20} />,
  },
];
