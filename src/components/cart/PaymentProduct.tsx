import { ProductProps } from '@/models'
import { formatVND } from '@/utils'
import { Divider, Image } from '@nextui-org/react'
import React from 'react'

const PaymentProduct: React.FC<ProductProps & { quantity: number }> = ({ id, name, image, price, discount = 0, quantity }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-start gap-3">
                <div className="flex flex-row gap-1">
                    <div className="w-[100px]">
                        <Image src={image} alt={name} className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-2 grid-rows-[auto_auto] w-full gap-4">
                    <div className="col-span-2 flex flex-col sm:flex-row justify-between gap-1 sm:gap-10">
                        <div className="flex flex-col w-full md:w-[300px] gap-1">
                            <div className="font-semibold">{name}</div>
                            <div className="text-xs text-[#707070]">Mô tả sản phẩm 1, Mô tả sản phẩm 2, Mô tả sản phẩm 3, Mô tả sản phẩm 4.</div>
                        </div>

                        <div className="flex flex-col flex-start sm:items-end gap-3">
                            <div className="flex flex-row flex-start items-center sm:items-end sm:flex-col gap-3 sm:gap-1">
                                <div className="text-lg">{formatVND(Number((price - (price * discount / 100)) * quantity))}</div>
                                <div className="text-sm text-[#F01919]">- {formatVND(49000)}</div>
                            </div>
                            <div className="text-xs text-[#707070]">đã giảm giá</div>
                        </div>
                    </div>

                    <div className="pointer-events-none opacity-50">
                        <div className="inline-flex flex-row justify-center items-center border border-black rounded-full w-auto py-[2px] px-1 gap-[2px]">
                            <Minus size={14} />
                            <Divider orientation="vertical" className="h-[15px] bg-black my-[2px]" />
                            <input type="text" value={quantity} className="w-[50px] text-center outline-none border-none" />
                            <Divider orientation="vertical" className="h-[15px] bg-black my-[2px]" />
                            <Plus size={14} />
                        </div>
                    </div>

                    <div className="justify-self-end pointer-event-none opacity-50">
                        <Trash size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentProduct

const Minus = ({ size = 24, color = "#000000" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>);

const Plus = ({ size = 24, color = "#000000" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>);

const Trash = ({ size = 24, color = "#000000" }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>);