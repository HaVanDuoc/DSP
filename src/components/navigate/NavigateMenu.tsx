"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Input,
} from "@nextui-org/react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDisclosure } from "@nextui-org/react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { getCartProductToLocalStorage } from "@/utils";
import { IUser } from "@/models";
import { useParams, useRouter } from "next/navigation";
import SearchNavigation from "./SearchNavigation";
import SearchIcon from "@mui/icons-material/Search";
import appConfig from "@/config/appConfig";
import { useTranslations } from "next-intl";
import AnimationShake from "@/components/animation/AnimationShake";

function NavigateMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userData, setUserData] = useState(null);
  const [isSearchMenu, setSearchMenu] = useState(false);
  const searchMenu = useRef<HTMLInputElement>(null);
  const { locale } = useParams();
  const t_navigate = useTranslations("navigate");
  const t_header = useTranslations("header");

  useEffect(() => {
    const amountCart = getCartProductToLocalStorage().length || 0;
    setAmount(amountCart);
    const findLogged = JSON.parse(localStorage.getItem("users") ?? "[]").filter(
      (user: any) => user.loggedIn === true
    );
    if (findLogged.length > 0) setUserData(findLogged[0]);
  }, []);

  useEffect(() => {}, [userData]);

  // Set event close for search menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchMenu.current &&
        !searchMenu.current.contains(event.target as Node)
      ) {
        setSearchMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      href: `/${locale}/${appConfig.path.store}`,
      icon: <LocationOnOutlinedIcon className="lg:w-4 lg:h-4" />,
      text: t_navigate("store"), // "Hệ thống cửa hàng"
    },
    {
      href: "/",
      icon: <SellOutlinedIcon className="lg:w-4 lg:h-4" />,
      text: t_navigate("sale_register"), // "Đăng kí bán hàng"
    },
    {
      href: "/",
      icon: <AutorenewOutlinedIcon className="lg:w-4 lg:h-4" />,
      text: t_navigate("policy"), // "Chính sách đổi trả"
    },
    {
      href: "/",
      icon: <HeadsetOutlinedIcon className="lg:w-4 lg:h-4" />,
      text: t_navigate("support"), // "Trung tâm hỗ trợ"
    },
    {
      href: "/",
      icon: <InfoOutlinedIcon className="lg:w-4 lg:h-4" />,
      text: t_navigate("tutorial"), // "Hướng dẫn"
    },
  ];
  const menu_T = [
    {
      href: `/${locale}/${appConfig.path.contact}`,
      text: t_navigate("contact"),
    }, // "Liên hệ"
    { href: `/${locale}/${appConfig.path.blogs}`, text: t_navigate("news") }, // "Tin tức"
    {
      href: `/${locale}/${appConfig.path.listProduct}`,
      text: t_navigate("products"),
    }, // "Sản phẩm"
    {
      href: `/${locale}/${appConfig.path.about}`,
      text: t_navigate("about"),
    }, // "Về chúng tôi"
  ];

  return (
    <div className="w-full border-b border-gray-200">
      <div className="w-full bg-main lg:block hidden">
        <div className="h-[74px]  py-[10px] max-w-screen-xl mx-auto justify-between flex items-center px-4">
          <Link
            href={`/${locale}/${appConfig.path.home}`}
            className="cursor-pointer"
          >
            <img
              src="/images/logo.png"
              alt=""
              className="w-[140px] h-[28px] object-fill"
            />
          </Link>
          <div className="flex-1 px-20">
            <SearchNavigation />
          </div>
          <div className="text-white flex gap-4 xl:text-sm lg:text-[10px]">
            <div className="flex items-center gap-1">
              <div>
                <LocalPhoneIcon className="xl:h-[30px] xl:w-[30px] lg:w-6 lg:h-6" />
              </div>
              <div className="xl:text-sm lg:text-[10px] cursor-pointer">
                <div>Hotline</div>
                <div className="font-semibold">0326 482 490</div>
              </div>
            </div>
            <AccountUser user={userData || null} />
            <Link href={`/${locale}${appConfig.path.cart}`}>
              <div className="flex items-center gap-1">
                <div className="relative">
                  <ShoppingBagIcon className="xl:h-[30px] xl:w-[30px] lg:w-6 lg:h-6" />
                  <span className="w-4 h-4 bg-secondary flex items-center justify-center rounded-full absolute top-0 right-0">
                    0
                  </span>
                </div>
                <div>
                  <div className="xl:text-sm lg:text-[10px]">
                    {t_header("cart")}
                  </div>
                  <div className="font-semibold">
                    <span>(2)</span> {t_header("products")}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className="bg-main"
        >
          <Link href={`/${locale}/${appConfig.path.home}`}>
            <NavbarItem>
              <img src="/images/logo.png" alt="" className="h-5" />
            </NavbarItem>
          </Link>

          <NavbarContent justify="end" className="gap-0">
            <div
              ref={searchMenu}
              className=" text-white nav_menu__mb-ic w-[50px] relative"
            >
              <Button
                className="bg-transparent w-full min-w-0 border-none text-white px-0"
                onClick={() => setSearchMenu(true)}
              >
                <SearchIcon />
              </Button>
              {isSearchMenu && (
                <div className="absolute right-0  w-[500px] z-30">
                  <SearchNavigation />
                </div>
              )}
            </div>
            <Link href={`/${locale}/${appConfig.path.cart}`}>
              <NavbarContent
                className=" text-white nav_menu__mb-ic ml-2"
                justify="end"
              >
                <ShoppingBagIcon />
              </NavbarContent>
            </Link>
            <NavbarContent
              className=" text-white nav_menu__mb-ic ml-5"
              justify="end"
            >
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </NavbarContent>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={index}>
                <Link
                  className="w-full text-black"
                  color={
                    index === 2
                      ? "warning"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                >
                  {item.text}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>

      <div className="w-full h-[70px] border-b max-w-screen-xl px-4 mx-auto hidden lg:flex items-center justify-between py-[10px] xl:text-sm lg:text-[10px] ">
        <ul className="flex items-center xl:gap-6 lg:gap-1">
          <li>
            <Tooltip
              placement={"bottom"}
              content={
                <div className="relative inline-block text-left">
                  <div className="absolute -right-[84px] -top-8 z-20 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg w-44">
                    <div className="py-1">
                      {menu_T.map((item, index) => (
                        <Link href={item.href} key={item.href}>
                          <div className="block px-4 py-2 xl:text-sm lg:text-[10px] text-gray-700 hover:bg-gray-100">
                            {item.text}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              }
            >
              <Button className="px-0 flex items-center font-semibold xl:text-base lg:text-[10px] bg-transparent">
                {t_navigate("category")}
                <KeyboardArrowDownOutlinedIcon className="lg:h-4 lg:w-4" />
              </Button>
            </Tooltip>
          </li>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className="flex items-center gap-[6px] xl:text-sm lg:text-[10px] hover:text-main"
                href={item.href}
              >
                {item.icon}
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center group cursor-pointer">
          <AnimationShake>
            <PhoneInTalkIcon className="text-main xl:w-7 xl:h-7 lg:w-4 lg:h-4" />
          </AnimationShake>
          <div className="xl:text-medium lg:text-[10px] font-bold group-hover:text-main">
            +1-202-555-0104
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigateMenu;

const AccountUser: React.FC<{ user: IUser | null }> = ({ user }) => {
  const router = useRouter();
  const { locale } = useParams();
  const t_header = useTranslations("header");

  return user ? (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              // isBordered: true,
              src: `${user?.avatar ?? ""}`,
            }}
            className="transition-transform"
            description={user?.nickname ? `@${user?.nickname}` : ""}
            name={user?.fullName ? `${user?.fullName}` : ""}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@{user?.nickname ?? user?.phoneNumber}</p>
          </DropdownItem>
          <DropdownItem
            key="profile"
            onClick={() => router.push("/profile/account")}
          >
            Hồ sơ cá nhân
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => {
              // Lấy dữ liệu người dùng từ localStorage
              const userLocalString = localStorage.getItem("users");
              let userLocal: Array<{
                phoneNumber: string;
                loggedIn?: boolean;
              }> = [];

              if (userLocalString) {
                try {
                  userLocal = JSON.parse(userLocalString);
                } catch (error) {
                  console.error(
                    "Error parsing users from localStorage:",
                    error
                  );
                }
              }

              // Cập nhật trạng thái đăng nhập của người dùng
              const updatedUsers = userLocal.map((u: any) => {
                if (u.phoneNumber == user.phoneNumber) {
                  return { ...u, loggedIn: false };
                }
                return u;
              });

              console.log("updatedUsers", updatedUsers);

              // Lưu lại vào localStorage dưới dạng chuỗi JSON
              localStorage.setItem("users", JSON.stringify(updatedUsers));

              // Tải lại trang nếu cần
              // window.location.reload();
            }}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ) : (
    <div className="flex items-center gap-1">
      <div>
        <PersonIcon className="xl:h-[30px] xl:w-[30px] lg:w-6 lg:h-6" />
      </div>
      <div className="xl:text-sm lg:text-[10px]">
        <div>
          <div>
            <Link
              href={`/${locale}/${appConfig.path.signIn}`}
              className="hover:underline hover:scale-110 "
            >
              {t_header("login")}
            </Link>{" "}
          </div>
          <div>
            <Link
              href={`/${locale}/${appConfig.path.signUp}`}
              className="hover:underline hover:scale-110 "
            >
              {t_header("sign_up")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
