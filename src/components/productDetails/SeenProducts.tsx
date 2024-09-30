"use client"

import { ProductProps } from '@/models';
import React, { Fragment, useEffect, useState } from 'react'
import SlideProduct from './SlideProduct';

export const saveSeenProductToLocalStorage = (product: ProductProps) => {
    // Lấy danh sách sản phẩm hiện có từ localStorage (nếu có)
    let productString = localStorage.getItem('seenProducts');
    let products: ProductProps[] = productString ? JSON.parse(productString) : [];

    // Kiểm tra xem sản phẩm đã tồn tại trong danh sách chưa (tránh trùng lặp)
    const productIndex = products.findIndex((p: any) => p?.id === product.id);
    if (productIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, xóa sản phẩm đó khỏi danh sách
        products.splice(productIndex, 1);
    }

    // Thêm sản phẩm mới vào cuối danh sách
    products.push(product);

    // Kiểm tra nếu danh sách sản phẩm vượt quá giới hạn 5
    if (products.length > 5) {
        // Xóa sản phẩm cũ nhất (sản phẩm đầu tiên trong mảng)
        products.shift();
    }

    // Lưu lại danh sách sản phẩm vào localStorage
    localStorage.setItem("seenProducts", JSON.stringify(products));
};

export const getSeenProductsFromLocalStorage = () => {
    let productsString = localStorage.getItem('seenProducts');
    let products = productsString ? JSON.parse(productsString) : [];
    return products;
}

const SeenProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const products = getSeenProductsFromLocalStorage().slice(0, 4)
        setProducts(products)
    }, [])

    return products && products?.length > 0 ? (
        <SlideProduct title='Đã xem gần đây' products={products} />
    ) : <Fragment />
}

export default SeenProducts