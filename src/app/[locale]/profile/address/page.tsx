"use client";

import React, { Fragment, useState } from "react";
import { AddressProps } from "@/models";
import AppContainer from "@/components/common/AppContainer";
import { ADDRESS } from "@/data/profile/address";
import AddAddressButton from "@/components/profile/address/AddAddressButton";
import EditAddressButton from "@/components/profile/address/EditAddressButton";

const AddressPage = () => {
  const [address, setAddress] = useState<AddressProps[]>(ADDRESS);

  return (
    <AppContainer>
      <div className="flex flex-row text-black sm:text-base text-sm gap-10">
        <div className="flex flex-col w-full gap-7">
          {/* Children */}
          <div className="flex flex-col gap-5 text-sm pb-10">
            <AddAddressButton address={address} setAddress={setAddress} />

            {/* List */}
            {address.map((a, index) => {
              const { fullName, address: addr, phone, addressDefault } = a;

              return (
                <div
                  className="flex flex-col gap-4 py-3 px-5 text-xs md:text-sm rounded shadow-[0_0_5px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.2)] shadow-transition"
                  key={index}
                >
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-5 items-center">
                      <div className="font-bold text-sm md:text-lg capitalize">
                        {fullName}
                      </div>
                      {addressDefault ? (
                        <div className="text-warning-500 text-xs md:text-sm">
                          Địa chỉ mặc định
                        </div>
                      ) : (
                        <Fragment />
                      )}
                    </div>

                    <EditAddressButton
                      address={address}
                      setAddress={setAddress}
                      idx={index}
                    />
                  </div>

                  <div className="grid grid-cols-[auto_1fr] md:gap-x-[100px] md:gap-y-4 gap-y-2">
                    <div className="font-bold">Địa chỉ</div>
                    <div className="text-right md:text-left">{addr}</div>
                    <div className="font-bold">Số điện thoại</div>
                    <div className="text-right md:text-left">{phone}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default AddressPage;
