import { Avatar, Button, Image, Tab, Tabs, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { ProductProps } from "@/models";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useRouter } from "next/navigation";

interface ITabsInfo {
    product: ProductProps;
}

const TabsInfo: React.FC<ITabsInfo> = ({ product }) => {
    const [activeTab, setActiveTab] = useState<"description" | "introduce" | "review">("description");
    const router = useRouter();

    const tabsContent = {
        description: (
            <div className="flex flex-col gap-5" id="description">
                <div className="text-xl sm:text-3xl font-bold text-center uppercase">
                    Mô tả
                </div>
                <div className="text-base sm:text-lg font-bold">{product.name}</div>
                <div className="flex flex-col text-sm sm:text-base text-justify gap-3">
                    <p>
                        Ba chỉ bò (short plate) là phần thịt được lấy ở bụng con bò (tại cơ
                        hoành), ngay dưới phần xương sườn. Ba chỉ có phần thịt nạc và mỡ xếp
                        xen kẽ nhau, phần mỡ nhiều hơn một ít hoặc bằng phần thịt, nếu có
                        thêm sụn ăn vào sẽ thấy vừa mềm vừa sần sật rất ngon.
                    </p>
                    <p>
                        Thực chất, hàm lượng protein trong ba chỉ bò tốt cho việc tạo cơ và
                        cung cấp nhiều dưỡng chất lành mạnh chứ không hề gây béo, cho nên
                        những người đang trong chế độ giảm cân vẫn có thể sử dụng. Trong 100
                        gram thịt ba chỉ bò sẽ chứa 28 gram protein cùng nhiều Vitamin B6 và
                        B12, kali, kẽm, magie, sắt. Axit amin trong thịt sẽ giúp tăng cường
                        chuyển hóa và đốt cháy năng lượng trong thời gian ngắn. Khi ăn chúng
                        ta sẽ cảm nhận được thịt mềm tan trong miệng, không hề dai và không
                        chút ngấy. Bên cạnh đó, khoáng chất sắt trong thịt bò rất cần thiết
                        trong việc bổ sung máu cho cơ thể. Theo khuyến cáo thì 300 - 500
                        gram một tuần là lượng thịt bò tiêu thụ hợp lý cho một người.
                    </p>
                    <p>
                        Trên thị trường có rất nhiều loại thịt bò từ nhiều nước khác nhau,
                        có loại đạt tiêu chuẩn nhập khẩu chất lượng cao, có loại không rõ
                        nguồn gốc, kém chất lượng.
                    </p>

                    <div className="flex justify-center items-center">
                        <Image
                            src="/images/f374ed179d8617c0536737acd2238915sdf.png"
                            alt="dsklfjsdweoruw"
                            className="w-full h-full object-cover rounded-none"
                        />
                    </div>
                    <p>
                        Qua đó, để chọn được loại ba chỉ bò ngon cần xem xét các yếu tố:
                    </p>
                    <p>
                        1. Phần thịt/mỡ: vân thịt đẹp mắt, sạch sẽ, mỡ màu vàng nhạt, thớ
                        thịt mịn màng. 2. Màu sắc: đỏ tươi3. Mùi: mùi thơm đặc trưng của
                        thịt bò, không có mùi hôi4. Xuất xứ: lựa chọn đơn vị cung cấp uy
                        tín, sản phẩm có thông tin địa chỉ, ngày đóng gói, hạn sử dụng,..
                    </p>
                    <p>
                        Các món ngon từ thịt Ba chỉ heo: 1. Lẩu thái nhúng thịt bò2. Ba chỉ
                        bò cuộn nấm kim châm3. Canh kim chi Hàn Quốc với ba chỉ bò 4. Mì
                        udon cà ri bò 5. Ba chỉ bò Mỹ áp chảo6. Thịt bò xiên chiên vừng
                    </p>
                </div>
            </div>
        ),
        introduce: (
            <div className="flex flex-col gap-5" id="introduce">
                <div className="text-xl sm:text-3xl font-bold text-center uppercase">
                    Giới thiệu
                </div>

                <div className="text-base sm:text-lg font-bold">THÔNG TIN SẢN PHẨM</div>
                <ul className="list-disc pl-5">
                    <li>
                        Thương hiệu: TRUST FARM, GREEN CATTLE, SEAFOOD KINGDOM, YUMPO,
                        JINSHIM ABALONE KOREA{" "}
                    </li>
                    <li>
                        Lưu ý giá bán lẻ: giá sản phẩm áp dụng cho khách hàng mua sắm thông
                        qua kênh online, số điện thoại hotline sẽ tương ứng với giá website
                        niêm yết. Giá bán lẻ tại các cửa hàng nằm trong các khu vực quận
                        huyện khác nhau có dao động trong phạm vi cho phép.
                    </li>
                </ul>

                <div className="text-base sm:text-lg font-bold">
                    VÌ SAO NÊN CHỌN THỊT NHẬP KHẨU ĐÔNG LẠNH CỦA VIET INTER
                </div>
                <div className="flex flex-col text-sm sm:text-base text-justify gap-3">
                    <p>
                        Công ty TNHH Phát triển Việt Inter, được thành lập từ 29/10/2014,
                        với sứ mệnh cung cấp thực phẩm xanh, sạch, an toàn, tiện lợi và tốt
                        cho sức khỏe người tiêu dùng Việt. Sau 8 năm hoạt động, Việt Inter
                        ngày càng củng cố thế mạnh và khẳng định vị trí dẫn đầu trong việc
                        nhập khẩu và phân phối thực phẩm đông lạnh với 5 Cty thành viên cùng
                        danh mục sản phẩm đa dạng cả chiều rộng, lẫn chiều sâu bao gồm heo,
                        bò, gà, trâu, hải sản, khoai tây, phomai, bơ sữa cùng các hàng cắt
                        và đóng gói sẵn tiện lợi với các thương hiệu hàng đầu thế giới như
                        Bò: bò Kobe, Omi của Nhật (Việt Inter là hội viên của hiệp hội Bò
                        Kobe thế giới), Bò Kilkoy của Úc, Bò Black Angus của Mỹ. Heo: Heo
                        Miratog, APK Nga, Van Roo Hà Lan, Bratpol Balan, De Vlaeminck - Bỉ,
                        Pancarni – Ý. Gà: Pancarni – Ý, Sadia – BRA, Seara – BRA, System
                        Drob - BaLan, Plukon - Bỉ, MeirkHalan Clazing - Hà Lan, Friato 50gr
                        - BRA Pilgrim. Hải sản: Cá Cam Nhật và Hàn Quốc, Cá Saba Nhật, Hàn
                        Quốc, mực nang và mực ống. Khoai tây: Grand Chef-Bỉ,Country
                        Cuisine-Hà Lan, Ecofrost-Bỉ, Golden Phoenix-Bỉ, Yumpo-Ấn Độ,
                        KDHY-Trung Quốc, SunnyDale-Trung Quốc, Lutosa-Bỉ… góp phần làm nên
                        quy mô doanh số cho Cty khoảng 300containers/ tháng.
                    </p>
                    <p>
                        Nhà máy: Chúng tôi có 2 nhà máy lớn đặt tại quận Bình Tân và sẽ
                        trang bị thêm dây chuyền máy móc hiện đại để sản xuất thực phẩm chế
                        biến, thực phẩm bảo quản mát và thực phẩm ăn liền. @ Công nghệ: Tiêu
                        chuẩn HACCP, ATVSTP.
                    </p>
                    <p>
                        Triết lý sản xuất: - Chất lượng là thước đo của mọi công việc. An
                        toàn sức khỏe mọi nhà là kim chỉ nam cho mọi hoạt động sản xuất. -
                        Đội ngũ nhân viên công ty quan niệm người tiêu dùng cũng là thành
                        viên trong gia đình mình, con cháu mình, người thân của mình. Thực
                        hành sản xuất tốt chất lượng tốt, đặt sức khỏe và sự an toàn của
                        người tiêu dùng làm tiêu chí hàng đầu khi thiết kế sản phẩm, vận
                        hành, chăm sóc khách hàng, huấn luyện kênh phân phối. - Ngoài ra,
                        phải đặt sự an toàn của công nhân lên trên hết, áp dụng nguyên tắc
                        5S trong nhà máy xí nghiệp, chăm lo đời sống và công việc cho nhân
                        công, giúp người thợ máy an tâm và nhiệt huyết sản xuất. - Theo xu
                        hướng của toàn cầu, toàn cầu hóa, nhà máy nghiên cứu ứng dụng cách
                        tổ chức quản lý sản xuất đưa yếu tố môi trường xanh - sạch - tiết
                        kiệm nhiên liệu và năng lượng tài nguyên vào vận hành. - Hiệu quả
                        sản xuất thể hiện ở mức độ chuyên nghiệp trong chọn lọc nhân sự nhà
                        máy, đội ngũ giàu kinh nghiệm, quy trình kiểm soát chặt chẽ từ đầu
                        vào đến đầu ra thành phẩm, liên tục cải tiến máy móc thiết bị và
                        công nghệ mới, đảm bảo vệ sinh môi trường, trang bị tủ chứa hàng
                        đúng chuẩn nhiệt độ và quản lý vận chuyển, quản lý chất lượng thành
                        phẩm đến tay người dùng. - Tuyệt đối không để khách hàng sử dụng
                        hàng tồn kho, quá hạn sử dụng. Có biện pháp thu gom, xử lý sản phẩm
                        nếu xảy ra tình trạng chậm luân chuyển.
                    </p>
                    <p>
                        Phòng R&D: Xây dựng phòng nghiên cứu và phát triển sản phẩm với lực
                        lượng kỹ sư dồi dào kinh nghiệm, tương lai R&D sẽ cho ra đời thêm
                        nhiều dòng sản phẩm được thị trường săn đón và ưa chuộng.
                    </p>
                    <p>
                        Các đối tác chiến lược: Việt Inter có cơ hội làm việc cùng các
                        chuyên gia thực phẩm lớn ở đấu trường quốc tế và các nhà hàng lớn
                        nhỏ trong nước, các chuỗi nhà hàng quán ăn mô hình mới. Do đó, khách
                        hàng hoàn toàn yên tâm khi sử dụng và mua lẻ cho gia đình. Chất
                        lượng đã được kiểm chứng và ủng hộ bởi nhiều thương hiệu uy tín.
                    </p>
                </div>
            </div>
        ),
        review: (
            <div className="flex flex-col gap-5" id="review">
                <div className="text-xl sm:text-3xl font-bold text-center uppercase">
                    Nhận xét sản phẩm
                </div>

                <div className="flex flex-col gap-5">
                    <div className="font-bold text-base sm:text-lg">1 bình luận</div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Comment */}
                        <div className="flex flex-col gap-3">
                            <div className="font-bold">Nguyễn Hữu Tiến</div>

                            <div className="flex flex-col gap-2">
                                <div>
                                    Really hydrating and full coverage! A little goes a long way.
                                    I have dry skin and it did not accentuate any dry patches or
                                    wrinkles. I also love the shade range this product
                                    offers.Really hydrating and full coverage!
                                </div>
                                <div>Review by Chi Posted on 11/7/19</div>
                            </div>

                            <div className="flex flex-row gap-8">
                                <div className="text-main">Trả lời</div>
                                <div className="text-[#828282]">2023-06-20 14:12</div>
                            </div>

                            {/* Reply */}
                            <div className="grid grid-flow-row md:grid-flow-col gap-4 p-6 bg-gray-100 ml-[5vw]">
                                <div className="row-span-1-auto md:row-span-3 flex items-center sm:items-start">
                                    <Avatar
                                        src="/images/avatar-reply-1.png"
                                        alt="avatar-reply"
                                        className="w-14 h-14 sm:w-16 sm:h-16"
                                    />
                                </div>

                                <div className="row-span-1 md:col-span-2 flex flex-wrap justify-start items-center gap-2 sm:gap-7">
                                    <div className="row-span-1 text-base md:text-lg">
                                        Lâm Thành Huy
                                    </div>
                                    <div className="row-span-1 text-white text-sm bg-[#FFC535] rounded-full px-5 py-1">
                                        Quản trị viên
                                    </div>
                                </div>

                                <div className="col-span-3 row-span-3 md:row-span-2 md:col-span-2 flex flex-col gap-3">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            Really hydrating and full coverage! A little goes a long
                                            way. I have dry skin and it did not accentuate any dry
                                            patches or wrinkles. I also love the shade range this
                                            product offers.Really hydrating and full coverage!
                                        </div>

                                        <div>Review by Chi Posted on11/7/19</div>
                                    </div>

                                    <div className="flex flex-wrap gap-8">
                                        <div className="text-main">Trả lời</div>
                                        <div className="flex flex-row justify-center items-center gap-1">
                                            <ThumbUpAltIcon
                                                sx={{
                                                    color: "var(--main)",
                                                    fontSize: {
                                                        xs: 18,
                                                    },
                                                }}
                                            />
                                            <span className="text-main">Hài lòng</span>
                                        </div>
                                        <div className="flex flex-row justify-center items-center gap-1">
                                            <ThumbDownAltIcon
                                                sx={{
                                                    color: "var(--main)",
                                                    fontSize: {
                                                        xs: 18,
                                                    },
                                                }}
                                            />
                                            <span className="text-main">Không hài lòng</span>
                                        </div>
                                        <div className="text-[#828282]">2023-06-20 14:12</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Đánh giá hoặc bình luận sản phẩm */}
                        <div className="flex flex-col gap-4 w-full lg:w-3/4">
                            <div className="font-bold">Đánh giá hoặc bình luận sản phẩm</div>

                            <div className="flex flex-wrap gap-3">
                                <Button className="bg-[#FFC535] text-white rounded-full px-7 border-none">
                                    Bình luận
                                </Button>
                                <Button className="bg-[#E3E3E3] text-black rounded-full px-7 border-none">
                                    Đánh giá
                                </Button>
                            </div>

                            <Textarea
                                placeholder="Gửi đánh giá hoặc bình luận của bạn"
                                minRows={7}
                                className="w-full "
                            />
                        </div>
                    </div>
                </div>
            </div>
        ),
    };

    return (
        <div className="flex flex-col">
             {/* Display all tabs content in column on large screens */}
             <div className="md:flex flex-col hidden">
                <div className="flex flex-1 flex-row gap-5 mb-12">
                    <div className="text-xl opacity-75 hover:opacity-100 cursor-pointer flex-1 flex justify-center" onClick={() => router.push("#description")}>Mô tả</div>
                    <div className="text-xl opacity-75 hover:opacity-100 cursor-pointer flex-1 flex justify-center" onClick={() => router.push("#introduce")}>Giới thiệu</div>
                    <div className="text-xl opacity-75 hover:opacity-100 cursor-pointer flex-1 flex justify-center" onClick={() => router.push("#review")}>Nhận xét sản phẩm</div>
                </div>

                <div className="flex flex-col gap-12">
                    {Object.values(tabsContent).map((content, index) => (
                        <div key={index}>{content}</div>
                    ))}
                </div>
            </div>
            
            {/* Tabs for mobile */}
            <div className="flex flex-col justify-between items-center gap-5 mb-[2vw] md:hidden">
                <Tabs
                    aria-label="Options"
                    variant="underlined"
                    selectedKey={activeTab}
                    onSelectionChange={(key) =>
                        setActiveTab(key as "description" | "introduce" | "review")
                    }
                    classNames={{ tabList: "w-full", tab: "flex-1 text:lg sm:text-xl" }}
                    style={{ width: "100%" }}
                >
                    <Tab
                        key="description"
                        title="Mô tả"
                        onClick={() => router.push("#description")}
                    />
                    <Tab
                        key="introduce"
                        title="Giới thiệu"
                        onClick={() => router.push("#introduce")}
                    />
                    <Tab
                        key="review"
                        title="Nhận xét sản phẩm"
                        onClick={() => router.push("#review")}
                    />
                </Tabs>

                <div className="mt-4">{tabsContent[activeTab]}</div>
            </div>
        </div>
    );
};

export default TabsInfo;
