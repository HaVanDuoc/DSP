"use client"

import { DUMP_PRODUCTS } from "@/data";
import { ProductProps } from "@/models";
import { useParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import RatingStar from "./RatingStars";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import { Button, Divider } from "@nextui-org/react";
import { saveSeenProductToLocalStorage } from "./SeenProducts";
import { saveCartProductToLocalStorage } from "@/utils";
import { formatVND } from "@/utils";

const COMMITMENTS = [
    {
        icon: <MilitaryTechOutlinedIcon />,
        content: "There are many variations of passages of Lorem Ipsum available",
    },
    {
        icon: <VerifiedUserOutlinedIcon />,
        content: "There are many variations of passages of Lorem Ipsum available",
    },
    {
        icon: <LocalShippingOutlinedIcon />,
        content: "There are many variations of passages of Lorem Ipsum available",
    },
    {
        icon: <AccessTimeOutlinedIcon />,
        content: "There are many variations of passages of Lorem Ipsum available",
    },
];

const InfoProduct = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleQuantityChange = (e: any) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setQuantity(value === "" ? 1 : Math.max(Number(value), 1));
        }
    };

    const { id: id_product } = useParams(); // get id product
    const [product, setProduct] = useState<ProductProps | null>(null);
    const name = product?.name;
    const image = product?.image || "";
    const discount = product?.discount;
    const price = product?.price;

    useEffect(() => {
        if (id_product) {
            const data_product = DUMP_PRODUCTS.filter(
                (product) => product.id === Number(id_product)
            )[0];
            saveSeenProductToLocalStorage(data_product); // Save seen product to Local Storage
            setProduct(data_product);
        }
    }, [id_product]);

    const handleAddCart = () => {
        if (product && quantity) {
            saveCartProductToLocalStorage(product, quantity);
        }
    };

    return (
        <div className="flex flex-col flex-1 gap-4">
            <div className="font-bold text-[5vw] sm:text-3xl">{name}</div>

            <div className="flex sm:flex-row flex-wrap gap-2 justify-between items-center">
                <div className="flex gap-2">
                    <RatingStar rating={4} />
                    <div className="text-sm sm:text-base">(0.00 / 0 đánh giá)</div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-2">
                    <div className="flex justify-center items-center bg-[#1877F2] gap-2 px-3 py-1 rounded cursor-pointer">
                        <ThumbUpIcon
                            sx={{
                                color: "#fff",
                                fontSize: {
                                    xs: 18,
                                    sm: 22,
                                },
                            }}
                        />
                        <span className="text-white text-sm">Like</span>
                        <span className="text-white text-sm">0</span>
                    </div>
                    <div className="flex justify-center items-center bg-[#1877F2] gap-2 px-3 py-1 rounded cursor-pointer">
                        <span className="text-white text-sm">Share</span>
                    </div>
                </div>
            </div>

            <div className="text-sm sm:text-base">
                Tình trạng: <span className="text-[#F01919]">Còn hàng</span>
            </div>

            <div className="flex flex-wrap items-center gap-5">
                <div className="text-[#F01919] font-bold text-3xl">
                    {discount && discount > 0
                        ? formatVND(Number(Number(price) - Number(price) * Number(discount / 100)))
                        : formatVND(Number(price))}
                </div>

                <div className="flex flex-col">
                    {discount && discount > 0 ? (
                        <div className="text-gray line-through">{formatVND(Number(price))}</div>
                    ) : (
                        <Fragment />
                    )}

                    {discount && discount > 0 ? (
                        <div className="text-[#F01919]">Khuyến mại {discount}%</div>
                    ) : (
                        <Fragment />
                    )}
                </div>
            </div>

            <div className="text-sm sm:text-base">Mã sản phẩm: 8936211620138</div>

            <div className="flex flex-col text-sm sm:text-base text-justify gap-2">
                <div>
                    Ba chỉ bò (short plate) là phần thịt được lấy ở bụng con bò (tại cơ
                    hoành), ngay dưới phần xương sườn. Ba chỉ có phần thịt nạc và mỡ xếp
                    xen kẽ nhau, phần mỡ nhiều hơn một ít hoặc bằng phần thịt, nếu có thêm
                    sụn ăn vào sẽ thấy vừa mềm vừa sần sật rất ngon.
                </div>

                <div>
                    Thực chất, hàm lượng protein trong ba chỉ bò tốt cho việc tạo cơ và
                    cung cấp nhiều dưỡng chất lành mạnh chứ không hề gây béo, cho nên
                    những người đang trong chế độ giảm cân vẫn có thể sử dụng. Trong 100
                    gram thịt ba chỉ bò sẽ chứa 28 gram protein cùng nhiều Vitamin B6 và
                    B12, kali, kẽm, magie, sắt. Axit amin trong thịt sẽ giúp tăng cường
                    chuyển hóa và đốt cháy năng lượng trong thời gian ngắn. Khi ăn chúng
                    ta sẽ cảm nhận được thịt mềm tan trong miệng, không hề dai và không
                    chút ngấy. Bên cạnh đó, khoáng chất sắt trong thịt bò rất cần thiết
                    trong việc bổ sung máu cho cơ thể. Theo khuyến cáo thì 300 - 500 gram
                    một tuần là lượng thịt bò tiêu thụ hợp lý cho một người.
                </div>
            </div>

            <div className="flex flex-col gap-4 py-4">
                {COMMITMENTS.map((commit, index) => (
                    <div className="flex justify-start items-center gap-2" key={index}>
                        {commit.icon}
                        <div className="text-sm sm:text-base">{commit.content}</div>
                    </div>
                ))}
            </div>

            {/* Box Counter */}
            <div className="flex items-center gap-7 text-black py-5">
                <span className=" text-base sm:text-xl font-semibold">Số lượng</span>
                <div className="flex items-center border border-gray-300">
                    <button onClick={decreaseQuantity} className="p-2">
                        <HorizontalRuleIcon />
                    </button>
                    <Divider orientation="vertical" />
                    <input
                        type="text"
                        value={quantity}
                        min={1}
                        className="w-16 text-center border-none outline-none"
                        onChange={handleQuantityChange}
                    />
                    <Divider orientation="vertical" />
                    <button onClick={increaseQuantity} className="p-2">
                        <AddIcon />
                    </button>
                </div>
            </div>

            {/* Button */}
            <div className="flex flex-row gap-3">
                <Button className="flex flex-1 bg-[#FFC535] border border-[#FFC535] text-base text-white font-semibold rounded py-7">
                    Mua ngay
                </Button>
                <Button
                    className="flex flex-1 bg-[#fff] border border-black text-base text-black font-semibold rounded py-7"
                    onClick={handleAddCart}
                >
                    Thêm vào giỏ hàng
                </Button>
            </div>
        </div>
    );
};

export default InfoProduct;
