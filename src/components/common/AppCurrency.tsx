import React from 'react'

type OriginPriceProps = {
    type: "price",
    className?: string,
    price: number,
    discount?: number,
    quantity?: never
}

type DiscountProps = {
    type: "discount",
    className?: string,
    price?: never,
    discount: number,
    quantity?: never
}

type FinalPriceProps = {
    type: "price - % discount";
    className?: string;
    price: number;
    discount: number;
    quantity?: never
};

type IntoMoneyProps = {
    type: "price * quantity";
    className?: string;
    price: number;
    discount: number;
    quantity: number
}

type IAppCurrency = OriginPriceProps | DiscountProps | FinalPriceProps | IntoMoneyProps

const AppCurrency: React.FC<IAppCurrency> = ({ type, className, price, discount = 0, quantity = 1 }) => {
    let value = 0
    let styles = ''

    switch (type) {
        case "price":
            value = price
            styles = `line-through opacity-60 ${discount > 0 ? "" : "hidden"}`
            break;
        case "price - % discount":
            value = price - (price * discount / 100)
            styles = "text-[#EB0000] font-semibold"
            break;
        case "discount":
            value = discount
            styles = `${discount > 0 ? "" : "hidden"}`
            break;
        case "price * quantity":
            value = (price - (price * discount / 100)) * quantity
            styles = ""

        default:
            break;
    }

    const formatValue = (value: number | React.ReactNode) => {
        if (type === "discount") {
            // Nếu type là discount, định dạng theo kiểu phần trăm
            if (typeof value === 'number') {
                return `-${value}%`;
            }
        } else {
            // Định dạng tiền VND
            if (typeof value === 'number') {
                return new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }).format(value);
            }
        }
        return value;
    };

    return (
        <div className={`${styles} ${className}`}>{formatValue(value)}</div>
    )
}

export default AppCurrency

