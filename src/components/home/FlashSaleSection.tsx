import React from "react";
import { DUMP_PRODUCTS } from "@/data";
import ListSectionProducts from "../common/products/ListSectionProducts";
import appConfig from "@/config/appConfig";
import Countdown from "./TitleSection/CountDown";
import TitleSection from "./TitleSection/TitleSection";

const FlashSales = ({ locale }: { locale: string }) => {
  // Đặt ngày kết thúc countdown
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2); // Ví dụ: đếm ngược 1 ngày từ bây giờ

  return (
    <div>
      <TitleSection
        title="Flash sales"
        redirectMore={`/${locale}/${appConfig.path.listProduct}`}
      >
        <Countdown targetDate={targetDate} />
      </TitleSection>

      <ListSectionProducts products={DUMP_PRODUCTS} count={10} />
    </div>
  );
};

export default FlashSales;
