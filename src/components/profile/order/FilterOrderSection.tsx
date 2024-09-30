import React, { useState } from "react";
import { Search } from "@/config/icons";
import { DUMP_ORDERS } from "@/data";
import {
  Autocomplete,
  Button,
  AutocompleteItem,
  Input,
} from "@nextui-org/react";
import { IOrders } from "@/models";

const FilterOrderSection = ({
  orders,
  setOrders,
}: {
  orders: IOrders[];
  setOrders: (orders: IOrders[]) => void;
}) => {
  const [codeOrders, setCodeOrders] = useState<IOrders[]>([]);
  const [value, setValue] = React.useState<string>("");
  const [selectedKey, setSelectedKey] = React.useState<React.Key | null>(null);
  const [key, setKey] = useState(""); // key search

  // Search with code order
  const onSelectionChange = (key: React.Key | null) => {
    if (key !== null) {
      setSelectedKey(key);

      // Tìm order dựa trên code đã chọn
      const filter = DUMP_ORDERS.filter((order) => order.code === key);
      setOrders(filter);
    }
  };

  const onInputChange = (value: string) => {
    setValue(value);

    // tránh phân biệt chữ hoa chữ thường, chuyển đổi thành chữ thường hết
    const lowercaseValue = value.toLowerCase();
    const filter = DUMP_ORDERS.filter((order) =>
      order.code?.toLocaleLowerCase().includes(lowercaseValue)
    );

    setCodeOrders(filter);
  };

  // Search with key input
  const onChangeSearch = (key: any) => {
    setKey(key.target.value);
  };

  const onClickSearch = () => {
    // Dùng key để tìm code order hoặc tên sản phẩm
    const filter = DUMP_ORDERS.filter(
      (order) =>
        order.code?.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
        order.products.some((product) =>
          product.product.name
            .toLocaleLowerCase()
            .includes(key.toLocaleLowerCase())
        )
    );
    setOrders(filter);
  };

  const onEnterSearch = (event: any) => {
    if (event.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 items-center">
      <Input
        variant="bordered"
        placeholder="Nhập từ khóa tìm kiếm"
        size="lg"
        startContent={<Search size={18} />}
        className="col-span-2 md:col-span-1"
        onChange={onChangeSearch}
        onKeyDown={onEnterSearch}
        isClearable
      />
      <div className="flex flex-row gap-3 items-center col-span-2 md:col-span-1">
        <Autocomplete
          defaultItems={codeOrders}
          allowsCustomValue={true}
          onInputChange={onInputChange}
          onSelectionChange={onSelectionChange}
          label="Mã đơn hàng"
          size="sm"
          variant="bordered"
        >
          {(item) => (
            <AutocompleteItem key={item.code || ""}>
              {item.code}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Button
          color="warning"
          className="text-white"
          size="lg"
          onClick={onClickSearch}
        >
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default FilterOrderSection;
