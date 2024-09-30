import { INotify, TypeNotify } from "@/models";
import RedeemIcon from "@mui/icons-material/Redeem";
import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const NAV_NOTIFY: TypeNotify[] = [
  { name: "Thông báo chung", icon: <NotificationsNoneOutlinedIcon /> },
  { name: "Thông báo khuyến mãi", icon: <RedeemIcon /> },
  { name: "Thông báo đơn hàng", icon: <LocalShippingOutlinedIcon /> },
  { name: "Thông báo hệ thống", icon: <SettingsOutlinedIcon /> },
];

export const NOTIFY: INotify[] = [
  {
    id: 1,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[0],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
  {
    id: 2,
    dateReceive: "02/02/2023",
    type: NAV_NOTIFY[1],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
  {
    id: 3,
    dateReceive: "03/02/2023",
    type: NAV_NOTIFY[2],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
  {
    id: 4,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[3],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: true,
  },
  {
    id: 5,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[0],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: true,
  },
  {
    id: 6,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[0],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
  {
    id: 7,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[0],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
  {
    id: 8,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[0],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
  {
    id: 9,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[0],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
  {
    id: 10,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[0],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
  {
    id: 11,
    dateReceive: "01/02/2023",
    type: NAV_NOTIFY[0],
    content: "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.",
    seen: false,
  },
];
