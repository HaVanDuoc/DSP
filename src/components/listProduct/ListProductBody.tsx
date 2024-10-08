'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Chip, Accordion, AccordionItem, CheckboxGroup, Checkbox, Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BreadcrumbNav from '../common/BreadcrumbNav';
import BoxProduct from '../BoxProduct';
import CustomPagination from '../common/Pagination';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { DUMP_PRODUCTS } from '@/data';
import { ProductProps } from '@/models';
import { formatVND } from '@/utils';


function ListProductBody() {
    const itemsPerPage = 12;
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [priceFilter, setPriceFilter] = useState<string[]>([]);
    const [cateFilter, setCateFilter] = useState<string[]>([]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get('page') || '1', 10);
        const prices = params.getAll('price');
        const categories = params.getAll('category');

        setCurrentPage(page);
        setPriceFilter(prices);
        setCateFilter(categories);
    }, []);

    useEffect(() => {
        const params = new URLSearchParams();
        if (priceFilter.length > 0) priceFilter.forEach(value => params.append('price', value));
        if (cateFilter.length > 0) cateFilter.forEach(value => params.append('category', value));

        params.set('page', currentPage.toString());
        router.push(`?${params.toString()}`, { scroll: false });

    }, [priceFilter, cateFilter, currentPage, router]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handlePriceFilterChange = (values: string[]) => {
        setPriceFilter(values);
        setCurrentPage(1);
    };

    const handleCategoryFilterChange = (values: string[]) => {
        setCateFilter(values);
        setCurrentPage(1);
    };

    const handleChipClose = (range: string) => {
        setPriceFilter((prevFilter) => prevFilter.filter((item) => item !== range));
        setCateFilter((prevFilter) => prevFilter.filter((item) => item !== range));
        setCurrentPage(1);
    };

    const filterByPrice = (product: ProductProps) => {
        if (priceFilter.length === 0) return true;

        const discountedPrice = product.price * (1 - product.discount / 100);

        return priceFilter.some((range) => {
            const [min, max] = range.split('-').map(Number);
            if (max) {
                return discountedPrice >= min && discountedPrice < max;
            }
            return discountedPrice >= min;
        });
    };

    const resetFilter = () => {
        setPriceFilter([]);
        setCateFilter([]);
    };

    const filterByCategory = (product: ProductProps) => {
        if (cateFilter.length === 0) return true;
        return cateFilter.includes(product?.category ? product.category.toLowerCase() : "");
    };

    const filteredProducts = DUMP_PRODUCTS.filter(product => filterByPrice(product) && filterByCategory(product));
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (

        <div>
            <div className="py-5 h-[62px]">
                <BreadcrumbNav
                    items={[
                        { name: 'Trang chủ', link: '/' },
                        { name: 'Sản phẩm', link: '/listproduct' },
                        { name: 'S2 JOY', link: '#' },
                    ]}
                />
            </div>
            <div className="py-5 h-[62px]">
                <div className="flex items-center">
                    <span className="font-bold text-2xl">S2 JOY</span>
                    <div className="flex-grow border-t border-black ml-4" />
                </div>
            </div>
            <div className="py-5 h-[120px] lg:block flex lg:items-center flex-col lg:flex-row items-start">
                <div className="mr-4 mb-2 flex justify-between items-center w-full">
                    <div className='text-base font-normal'>
                        Bộ lọc đã chọn
                    </div>
                    <div className='lg:block hidden'>
                        <Button onClick={resetFilter}>Xóa bộ lọc</Button>
                    </div>
                    <div className='lg:hidden block'>
                        <div className='flex items-center'>
                            <div>
                                Lọc:
                            </div>
                            <Button onPress={onOpen} className='bg-transparent px-0 min-w-0'>
                                <FilterAltOutlinedIcon />
                            </Button>
                        </div>

                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Lọc</ModalHeader>
                                        <ModalBody>
                                            <Accordion selectionMode="multiple" className="px-0" defaultExpandedKeys={["category", "price"]}>
                                                <AccordionItem key="price" indicator={<ArrowLeftIcon />} aria-label="Price" title="Price">
                                                    <CheckboxGroup value={priceFilter} onChange={handlePriceFilterChange}>
                                                        <Checkbox value="0-99000">0 - 99.000</Checkbox>
                                                        <Checkbox value="100000-199000">100.000 - 199.000</Checkbox>
                                                        <Checkbox value="200000-299000">200.000 - 299.000</Checkbox>
                                                        <Checkbox value="300000-399000">300.000 - 399.000</Checkbox>
                                                        <Checkbox value="400000">400.000 +</Checkbox>
                                                    </CheckboxGroup>
                                                </AccordionItem>
                                                <AccordionItem key="category" indicator={<ArrowLeftIcon />} aria-label="Category" title="Category">
                                                    <CheckboxGroup value={cateFilter} onChange={handleCategoryFilterChange}>
                                                        <Checkbox value="headphone">Headphone</Checkbox>
                                                        <Checkbox value="tv">TV</Checkbox>
                                                        <Checkbox value="laptop">Laptop</Checkbox>
                                                        <Checkbox value="smartphone">Smart Phone</Checkbox>
                                                    </CheckboxGroup>
                                                </AccordionItem>
                                            </Accordion>
                                        </ModalBody>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
                <div className='w-full h-20 overflow-scroll hidden-scrollbar' style={{ whiteSpace: 'nowrap' }}>
                    {priceFilter.map((filter) => {
                        const [min, max] = filter.split('-').map(value => formatVND(parseFloat(value)));

                        return (
                            <Chip
                                key={filter}
                                onClose={() => handleChipClose(filter)}
                                variant="bordered"
                                className="text-base mr-2"
                            >
                                {max ? `${min} - ${max}` : `${min}+`}
                            </Chip>
                        );
                    })}

                    {cateFilter.map((filter) => (
                        <Chip key={filter} onClose={() => handleChipClose(filter)} variant="bordered" className="text-base mr-2">
                            {filter}
                        </Chip>
                    ))}
                </div>
                <div className='lg:hidden block'>
                        <Button onClick={resetFilter}>Xóa bộ lọc</Button>
                    </div>
            </div>

            <div className="flex w-full gap-5 flex-col lg:flex-row mb-10">
                <div className="w-1/4 lg:block hidden">
                    <Accordion selectionMode="multiple" className="px-0" defaultExpandedKeys={["category", "price"]}>
                        <AccordionItem key="price" indicator={<ArrowLeftIcon />} aria-label="Price" title="Price" >
                            <CheckboxGroup value={priceFilter} onChange={handlePriceFilterChange}>
                                <Checkbox value="0-99000">0 - 99.000</Checkbox>
                                <Checkbox value="100000-199000">100.000 - 199.000</Checkbox>
                                <Checkbox value="200000-299000">200.000 - 299.000</Checkbox>
                                <Checkbox value="300000-399000">300.000 - 399.000</Checkbox>
                                <Checkbox value="400000">400.000+</Checkbox>
                            </CheckboxGroup>
                        </AccordionItem>
                        <AccordionItem key="category" indicator={<ArrowLeftIcon />} aria-label="Category" title="Category">
                            <CheckboxGroup value={cateFilter} onChange={handleCategoryFilterChange}>
                                <Checkbox value="headphone">Headphone</Checkbox>
                                <Checkbox value="tv">TV</Checkbox>
                                <Checkbox value="laptop">Laptop</Checkbox>
                                <Checkbox value="smartphone">Smart Phone</Checkbox>
                            </CheckboxGroup>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="flex-1 grid lg:grid-cols-3 grid-cols-2 gap-5">
                    {currentProducts.map((product) => (
                        <BoxProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <div className="flex justify-end w-full">
                <CustomPagination
                    totalItems={filteredProducts.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={(page: number) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
}

export default ListProductBody;
