"use client";

import React, { Fragment, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Checkbox, Image } from "@nextui-org/react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { IOrders, ItemCart, ProductProps } from "@/models";
import AppCurrency from "@/components/common/AppCurrency";
import {
    formatVND,
    getCartProductToLocalStorage,
    saveCartProductToLocalStorage,
    updateCartProductToLocalStorage,
} from "@/utils";
import { useRouter } from "next/navigation";
import AppContainer from "../common/AppContainer";
import AppBreadcrumbs from "../common/AppBreadcrumbs";

const CartSection = () => {
    const [cart, setCart] = useState<ItemCart[]>([]);
    const [allSelected, setSelectAll] = useState<boolean>(false);

    const router = useRouter();

    const amountSelected = (cart && cart?.filter((item) => item.selected).length) || 0;

    const totalPayment = cart && cart?.filter((item) => item.selected).reduce((total, item) => {
        const finalPrice =
            item.product.price -
            (item.product.price * (item.product.discount || 0)) / 100;
        return total + finalPrice * item.quantity;
    }, 0);

    useEffect(() => {
        setCart(getCartProductToLocalStorage());
    }, []);

    useEffect(() => {
        const allSelected = cart.every((product) => product.selected === true);
        setSelectAll(allSelected);
    }, [cart]);

    // console.log("cart", cart);

    const increaseQuantity = (product: ProductProps) => {
        setCart((prevCart) => {
            const updateCart = prevCart.map((item) => {
                if (item.product === product) {
                    const newQuantity = item.quantity + 1;
                    saveCartProductToLocalStorage(product, newQuantity); // update local storage
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            return updateCart;
        });
    };

    const decreaseQuantity = (product: ProductProps) => {
        setCart((prevCart) => {
            const updateCart = prevCart.map((item) => {
                if (item.product === product) {
                    if (item.quantity > 1) {
                        const newQuantity = item.quantity - 1;
                        saveCartProductToLocalStorage(product, newQuantity); // update local storage
                        return { ...item, quantity: newQuantity };
                    }
                }
                return item;
            });

            return updateCart;
        });
    };

    const handleCheckSelected = (product: ProductProps) => {
        setCart((prevCart) => {
            const updateSelect = prevCart.map((item) => {
                if (item.product === product) {
                    const newSelect = item.selected ? !item.selected : true;
                    return { ...item, selected: newSelect };
                }
                return item;
            });

            return updateSelect;
        });
    };

    const handleSelectAll = () => {
        setCart(() => {
            const hasAll = cart.every((item) => item.selected === true);

            const updateCart = cart.map((item) => {
                return { ...item, selected: !hasAll };
            });

            return updateCart;
        });
    };

    const handleRemove = (product: ProductProps) => {
        setCart((prevCart) => {
            const updateCart = prevCart.filter((item) => item.product !== product);
            updateCartProductToLocalStorage(updateCart);
            return updateCart;
        });
    };

    const removeAll = () => {
        const update = cart.filter(item => !item.selected)
        updateCartProductToLocalStorage(update)
        setCart(update)
    };

    const paymentConfirm = () => {
        const products = cart.filter((item) => item.selected) || [];
        if (products && products.length > 0) {
            const orderDetails: IOrders = {
                products,
                totalPayment,
                status: "Chưa xác nhận",
            };
            localStorage.setItem("orders", JSON.stringify(orderDetails));
            router.push("/cart/payment");
        }
    };

    return (
        <div className="bg-gray-100 text-black sm:text-sm text-xs">
            <AppContainer className="flex flex-col min-h-screen">
                <Fragment>
                    <div className="sticky top-0 z-20 pt-5 flex flex-col gap-5 bg-gray-100">
                        <AppBreadcrumbs items={[{ name: "Trang chủ", href: "/", startContent: <HomeIcon fontSize="small" /> }, { name: "Giỏ hàng", href: "/cart" }]} separator="/" gap={4} />

                        {/* Top bar cart */}
                        {cart && cart.length > 0 ? (<div className="flex flex-row gap-3 bg-white rounded py-2 items-center justify-between px-2 sm:px-5 shadow-sm">
                            <div className="flex flex-row items-center gap-2">
                                <Checkbox
                                    isSelected={allSelected}
                                    isIndeterminate={allSelected}
                                    onClick={handleSelectAll}
                                />
                                <div className="lg:w-[460px]">
                                    All ({amountSelected} products)
                                </div>
                            </div>
                            <div className="flex-1 text-center hidden lg:block">Price</div>
                            <div className="flex-1 text-center hidden lg:block">Number</div>
                            <div className="flex-1 text-center hidden lg:block">
                                Into money
                            </div>
                            <div className="text-right">
                                <DeleteOutlineOutlinedIcon
                                    className="opacity-60 cursor-pointer"
                                    onClick={removeAll}
                                />
                            </div>
                        </div>) : <Fragment />}
                    </div>

                    {cart && cart.length > 0 ? (
                        <main className="relative flex flex-col flex-grow overflow-auto">
                            {cart.map((item, index) => {
                                const { selected, quantity, product } = item;
                                const {
                                    id,
                                    name,
                                    image,
                                    price,
                                    category,
                                    discount = 0,
                                } = item.product;

                                return (
                                    <div
                                        className={`flex flex-row gap-3 items-center justify-between px-2 sm:px-5 py-4 sm:py-0 bg-white ${index > 0 ? "border-t-1" : ""}`}
                                        key={index}
                                    >
                                        <div className="flex flex-row items-center">
                                            <div className="flex justify-start items-center">
                                                <Checkbox
                                                    isSelected={selected}
                                                    onClick={() => handleCheckSelected(product)}
                                                />
                                            </div>

                                            <div className="flex justify-center items-center w-[17vw] sm:w-[150px] md:w-[180px]  h-[17vw] sm:h-[150px] md:h-[180px] ">
                                                <Image
                                                    src={image}
                                                    alt={name}
                                                    className="w-auto h-auto object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="lg:flex-row flex-col flex flex-1 items-start lg:items-center justify-between gap-2 sm:gap-5 lg:gap-0">
                                            <div className="font-medium sm:text-sm text-[12px] lg:max-w-[280px]">
                                                {name}
                                            </div>

                                            <div className="flex flex-row lg:flex-1 flex-auto items-center gap-5 lg:gap-0">
                                                <div className="hidden md:flex lg:flex-1 flex-auto flex-row lg:flex-col gap-2 lg:gap-1 items-center ">
                                                    <div className="flex flex-row items-center gap-1 ">
                                                        <AppCurrency type="price" price={price} discount={discount} />
                                                        <AppCurrency type="discount" discount={discount} className={"text-xs"} />
                                                    </div>
                                                    <AppCurrency type="price - % discount" price={price} discount={discount} className={"text-xs sm:text-base"} />
                                                </div>

                                                <div className="flex lg:flex-1 flex-auto flex-row justify-between items-center bg-gray-100 rounded-lg overflow-hidden text-center py-1 px-2 ">
                                                    <Button
                                                        isIconOnly
                                                        className="bg-white w-[20px] h-[20px] sm:w-[30px] md:w-[40px] sm:h-[30px] md:h-[40px] flex justify-center items-center min-w-0 sm:min-w-10"
                                                        onClick={() => decreaseQuantity(product)}
                                                    >
                                                        <RemoveOutlinedIcon className="w-[14px] h-[14px] sm:w-[20px] md:w-[24px] sm:h-[20px] md:h-[24px]" />
                                                    </Button>

                                                    <input
                                                        value={quantity}
                                                        min={1}
                                                        className="bg-inherit text-center text-xs sm:text-sm w-[26px] sm:w-[50px]  outline-none"
                                                        onChange={(e: any) => {
                                                            const value = e.target.value;
                                                            if (/^\d*$/.test(value)) {
                                                                const newValue =
                                                                    value === "" ? 1 : Math.max(Number(value), 1);
                                                                setCart((prevCart) => {
                                                                    const updateCart = prevCart.map((item) => {
                                                                        if (item.product === product) {
                                                                            saveCartProductToLocalStorage(
                                                                                product,
                                                                                newValue
                                                                            ); // update local storage
                                                                            return { ...item, quantity: newValue };
                                                                        }
                                                                        return item;
                                                                    });

                                                                    return updateCart;
                                                                });
                                                            }
                                                        }}
                                                    />

                                                    <Button
                                                        isIconOnly
                                                        className="bg-white w-[20px] h-[20px] sm:w-[30px] md:w-[40px] sm:h-[30px] md:h-[40px] flex justify-center items-center min-w-0 sm:min-w-10"
                                                        onClick={() => increaseQuantity(product)}
                                                    >
                                                        <AddOutlinedIcon className="w-[14px] h-[14px] sm:w-[20px] md:w-[24px] sm:h-[20px] md:h-[24px]" />
                                                    </Button>
                                                </div>

                                                <div className=" flex-1 text-center text-main font-bold text-xs sm:text-sm">
                                                    <AppCurrency type="price * quantity" price={price} discount={discount} quantity={quantity} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" text-right cursor-pointer">
                                            <DeleteOutlineOutlinedIcon
                                                className="opacity-60"
                                                onClick={() => handleRemove(product)}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </main>
                    ) : <EmptyCart />}

                    {/* Foot bar cart */}
                    <footer
                        className="sticky bottom-0 z-20"
                        style={{ boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em", }}
                    >
                        <div className="flex flex-row items-center justify-between bg-white py-2 px-5">
                            <div className="md:text-xl text-base text-main font-extrabold">
                                {formatVND(totalPayment)}
                            </div>
                            <Button
                                color="primary"
                                radius="sm"
                                className="uppercase sm:text-sm text-xs sm:px-4 sm:py-2 px-2 py-1"
                                onClick={paymentConfirm}
                            >
                                PAYMENT <span className="hidden sm:block">CONFIRMATION</span>
                            </Button>
                        </div>
                    </footer>
                </Fragment>

            </AppContainer>
        </div>
    );
};

export default CartSection;

const EmptyCart = () => (
    <div className="text-xs flex-1 sm:text-2xl text-nowrap bg-white rounded-3xl flex justify-center items-center shadow-md my-auto">
        Giỏ hàng trống
    </div>
)