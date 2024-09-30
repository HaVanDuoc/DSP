"use client";

import { IUser, ProductProps } from "@/models";
import * as Yup from 'yup';

export const convertBirthdayToString = (birthday: any) => {
    if (!birthday || !birthday.year || !birthday.month || !birthday.day) {
        return ''; // Trả về chuỗi rỗng hoặc giá trị mặc định nếu dữ liệu không hợp lệ
    }

    // Đảm bảo tháng và ngày có 2 chữ số
    const month = String(birthday.month).padStart(2, '0');
    const day = String(birthday.day).padStart(2, '0');

    // Chuyển đổi thành chuỗi theo định dạng YYYY-MM-DD
    return `${birthday.year}-${month}-${day}`;
};

export const validationSchema = Yup.object({
    email: Yup.string().email('Địa chỉ email không hợp lệ').required('Email là bắt buộc'),
    fullName: Yup.string().matches(/^[A-Za-zÀ-Ỹà-ỹ\s'-]{1,50}$/, 'Tên không hợp lệ').max(50, 'Tên không quá 50 ký tự').required('Họ tên là bắt buộc'),
    nickname: Yup.string().matches(/^[A-Za-zÀ-Ỹà-ỹ\s'-]{1,20}$/, 'Nickname không hợp lệ').max(20, 'Nickname không quá 20 ký tự').required('Nickname là bắt buộc'),
    phoneNumber: Yup.string().matches(/^(0[3-9][0-9]{8})$/, 'Số điện thoại không hợp lệ').required('Số điện thoại là bắt buộc'),
    birthday: Yup.date().required('Ngày sinh là bắt buộc'),
    gender: Yup.string().required('Giới tính là bắt buộc'),
    country: Yup.string().required('Quốc tịch là bắt buộc'),
    password: Yup.string().min(8, 'Mật khẩu phải có ít nhất 8 ký tự').required('Mật khẩu là bắt buộc'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Mật khẩu xác nhận không khớp').required('Xác nhận mật khẩu là bắt buộc'),
});

export const formatVND = (amount: number) => {
    if (typeof amount === 'number') {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount);
    }

    return amount
}

export const saveCartProductToLocalStorage = (
    product: ProductProps,
    quantity: number
) => {
    let cartProductsString = localStorage.getItem("cartProducts");
    let cartProducts = JSON.parse(cartProductsString ?? "[]");

    // Tìm chỉ mục của sản phẩm trong danh sách
    const existingProductIndex = cartProducts.findIndex(
        (p: any) => p.product.id === product.id
    );

    if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        cartProducts[existingProductIndex].quantity = quantity;
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào danh sách
        cartProducts.push({ product, quantity });
    }

    // Lưu lại danh sách sản phẩm đã đặt vào localStorage
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
};

export const updateCartProductToLocalStorage = (
    cart: any,
) => {
    // Lưu lại danh sách sản phẩm đã đặt vào localStorage
    localStorage.setItem("cartProducts", JSON.stringify(cart));
};

export const getCartProductToLocalStorage = () => {
    let productsString = localStorage.getItem("cartProducts");
    let products = productsString ? JSON.parse(productsString) : [];
    return products;
};

export const registerUser = (user: any) => {
    let users: IUser[] = JSON.parse(localStorage.getItem("users") ?? "[]");

    // Tìm chỉ mục của user trong danh sách
    const existingUserIndex = users.findIndex(
        (u: IUser) => u.phoneNumber === user.phoneNumber
    );

    if (existingUserIndex !== -1) {
        // Nếu user đã tồn tại
        return {
            error: true,
            message: "Số điện thoại đã được đăng ký"
        }
    } else {
        // Nếu user chưa tồn tại, thêm user mới vào danh sách
        users.push(user);
    }

    // Lưu lại danh sách user đã đặt vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    return {
        message: "Đăng ký thành công!"
    }
};


export const hiddenMenuPaths = ['/profile/account', '/profile/address', '/profile/notify', '/profile/order', '/profile/promotion'];
