import AppBreadcrumbs from "@/components/common/AppBreadcrumbs";
import AppContainer from "@/components/common/AppContainer";
import { Button, Image, Input } from "@nextui-org/react";
import React from "react";

const AboutPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-center">
                <Image
                    src={"/images/f374ed179d8617c0536737acd2238915.png"}
                    alt=""
                    className="w-full object-cover rounded-none h-[200px] sm:h-auto sm:min-h-[300px]"
                />
            </div>
            <AppContainer>
                <div className="flex flex-col gap-10 text-sm sm:text-base text-justify">
                    <AppBreadcrumbs
                        items={[
                            { name: "Trang chủ", href: "/" },
                            { name: "Câu chuyện thương hiệu", href: "" },
                        ]}
                    />

                    <div className="flex flex-col gap-2 ">
                        <div className="text-3xl sm:text-5xl text-[#FFC535] font-bold">
                            Vietinter Food
                        </div>
                        <div className="text-lg sm:text-3xl font-bold">
                            CÔNG TY TNHH PHÁT TRIỂN VIỆT QUỐC TẾ
                        </div>
                        <div className="pt-3">
                            Công Ty TNHH Phát Triển Việt Quốc Tế chính thức thành lập vào ngày
                            29 tháng 10 năm 2014.
                            <br />
                            Khởi điểm ban đầu là một văn phòng, bao gồm 10 nhân sự, vốn điều
                            lệ 1 tỷ đồng, vật chất còn hạn chế. Nhưng chỉ sau 5 năm, Công Ty
                            TNHH Phát Triển Việt Quốc Tế đã hoàn toàn thay đổi diện mạo và
                            năng lực trên thị trường trong nước và quốc tế. Với những nỗ lực
                            không ngừng của tập thể nhân viên công ty và tâm huyết của Ban
                            Lãnh Đạo, đi cùng triết lý kinh doanh “Đặt uy tín, chất lượng lên
                            hàng đầu”, ngày nay Công ty Việt Quốc Tế đã trở thành một trong
                            những tập đoàn uy tín nhất trong lĩnh vực chuyên cung cấp Thực
                            Phẩm Nhập Khẩu Đông Lạnh, Nhập Khẩu Thực Phẩm Đông Lạnh và Phân
                            Phối tại Việt Nam. Công ty đã cho ra đời nhiều dòng sản phẩm chất
                            lượng và những thương hiệu nổi tiếng về giá trị trong suốt nhiều
                            năm kinh doanh, kể cả mảng bán sỉ hay bán lẻ, giúp Công ty ngày
                            càng khẳng định vị thế và niềm tin đối với tất cả các khách hàng
                            gần xa.
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex flex-1">
                            <Image
                                src="/images/6cae63927389f3dd82ba2decaa93265c.jfif"
                                alt=""
                                className="md:mb-14 w-full object-cover md:h-[400px] h-auto "
                            />
                        </div>
                        <div className="flex flex-1">
                            <Image
                                src="/images/d91ea2910be016d80cce9d1da031b309.jfif"
                                alt=""
                                className="md:mt-14 w-full object-cover md:h-[400px] h-auto "
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p>
                            Đến nay, Việt Quốc Tế đã có hơn 100 nhân viên và vốn điều lệ là
                            137.5 tỷ đồng. Tổng sản lượng nhập khẩu trên 350 container/ tháng.
                            Đặc biệt, Công ty đã mở được các kho lạnh riêng trong nội thành
                            Thành phố Hồ Chí Minh.
                        </p>
                        <p>
                            Mạng lưới hoạt động “đa dạng mặt hàng” của Việt Quốc Tế trải dài
                            từ Bắc tới Nam.
                        </p>
                        <p>
                            Với sự thay đổi không ngừng của thị trường, người tiêu dùng –
                            khách hàng lâu dài của chúng tôi, một mặt có nhiều lựa chọn hơn về
                            bữa ăn hàng ngày, mặt khác họ cũng đang đứng trước những thách
                            thức chưa từng có trước đây về bài toán thực phẩm sạch, an toàn
                            dinh dưỡng và mức chi phí hợp lý cho cả gia đình.
                        </p>
                        <p>
                            Để phục vụ tốt hơn nhu cầu của triệu gia đình Việt Nam, Công ty
                            Việt Quốc Tế với tầm nhìn và sứ mệnh “Hoàn thiện bữa ăn của Người
                            Việt”, với quyết tâm của Ban Lãnh Đạo và tuổi trẻ đầy nhiệt huyết
                            của tập thể nhân viên, luôn đi đầu trong những thay đổi để kiến
                            tạo nên bề dày giá trị tốt hơn cho người tiêu dùng.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <Image
                            src={"/images/096950874ebdbdcfdc646892cea24a6c.png"}
                            alt=""
                        />
                        <div className="md:p-8">
                            Những nỗ lực bền bỉ từ nhà máy, phân xưởng đến khối văn phòng, đội
                            ngũ thị trường là nền tảng và thước đo giúp mang đến những thành
                            công cho Việt Quốc Tế trong tương lai. Thế mạnh của chúng tôi là
                            đội ngũ nhân lực giỏi, có tính kế thừa. Công ty thường xuyên nâng
                            cao chất lượng nhân sự, kiện toàn bộ máy giúp phát huy tối đa sức
                            mạnh của tập thể, tạo nên một khối đoàn kết vững chắc. Đây chính
                            là chuỗi giá trị cốt lõi xây dựng nên sự phát triển bền vững của
                            Tập đoàn, là nền tảng để Việt Quốc Tế tự tin tiếp bước sang giai
                            đoạn phát triển mới – giai đoạn “hội nhập chuyên sâu”.
                        </div>
                    </div>

                    <div
                        className={
                            "flex flex-col justify-center items-center text-white min-h-[200px] md:h-[300px] gap-3 bg-cover bg-center"
                        }
                        style={{
                            backgroundImage:
                                "url('/images/d339a2a8117dd15a0bc94b13dd717488.jfif')",
                        }}
                    >
                        <div className="text-[5vw] sm:text-4xl font-bold">
                            Hoàn thiện bữa ăn của Người Việt
                        </div>
                        <div className="text-sm sm:text-base">Vietinter Food</div>
                    </div>

                    <div className="fle flex-col gap-3">
                        <div className="text-[5vw] sm:text-4xl mb-3 font-bold">
                            Câu chuyện doanh nghiệp
                        </div>
                        <div>
                            Một vị doanh nhân đi khắp thế giới. Trên chặng đường và bước chân
                            thỏa sức khám phá, anh nhận ra nhiều điều mới lạ của từng quốc
                            gia, dân tộc, của các nền văn hóa khác biệt cũng như đặc trưng ẩm
                            thực ở từng địa phương. Trong đó, anh đặc biệt được thưởng thức và
                            thẫm thấu tinh thần xây dựng giá trị của món ăn, tinh hoa của ẩm
                            thực. Tất cả vị ngon và sự quyến rũ của món ăn, nếu không kể đến
                            công phu tay nghề của người đầu bếp, phần nhiều được gói gọn trong
                            độ tinh khiết, tươi ngon ở bản thân nguyên liệu chế biến. Thịt
                            càng tươi, ăn càng ngon, chiên xào nấu nướng món nào cũng ngon.
                            Thịt sạch, nếm vào cảm nhận độ ngon ngọt không thể tả. Thịt nguyên
                            liệu dùng ở các nước bạn, là thịt sạch, được lấy từ những nông
                            trại sạch áp dụng quy trình quản lý chuyên nghiệp, tiêu chuẩn sản
                            xuất nghiêm ngặt, dùng khoa học kỹ thuật tiên tiến của quốc tế để
                            can thiệp từ khâu nuôi gia súc, chăm sóc vật nuôi đến khâu sản
                            xuất và bảo quản, đảm bảo an toàn chất lượng tối ưu từ trang trại
                            đến khi dọn lên bàn ăn. Ở những nơi đã đi qua, trải nghiệm của mỗi
                            vùng miền đem đến những cách thưởng thức rất riêng và khác biệt
                            cho vị doanh nhân. Nếu như ở Việt Nam, anh đã quen thuộc các món
                            cơm nhà vốn hay được kho, rim, chiên, xào với nhiều gia vị, cách
                            nấu truyền thống này đôi khi lấn át hương vị nguyên bản của nguyên
                            liệu chính, khiến anh khó phân biệt và cảm nhận độ tươi ngon ngọt
                            thịt. Trái lại, ở nước ngoài, phong cách nấu ăn với phương châm vì
                            sức khỏe đã biến người đầu bếp trở nên khắt khe hơn, bằng cách gia
                            giảm bột ngọt và đường, hạn chế muối cũng như dầu ăn, anh biết rõ
                            các gia vị này đã không còn đóng vai trò then chốt tạo nên hương
                            vị món ăn nữa, mà chính là độ thơm ngon, tươi sạch của thịt mới
                            quyết định cho sự thành công và hương vị đặc trưng của từng món
                            ăn.
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 items-center gap-5 sm:gap-14">
                        <div className=" order-2 md:order-1">
                            Với tâm huyết muốn đem những tinh túy ẩm thực này về Việt Nam, làm
                            sinh động hơn các giá trị ẩm thực truyền thống mang tâm hồn Việt,
                            và tạo điều kiện cho người dân Việt Nam có cơ hội hòa nhập thế
                            giới, tận hưởng nguồn thịt sạch thơm ngon một cách yên tâm, thoải
                            mái, không lo về chi phí, vị doanh nhân đã ấp ủ giấc mơ trong
                            nhiều năm.
                        </div>
                        <div className="grid grid-cols-2 gap-2 order-1 md:order-2">
                            <Image
                                src="/images/0d92cde4441cb6a41209b086bbb27a73.jfif"
                                alt=""
                            />
                            <Image
                                src="/images/4241defec937f46140c406ad886e61ae.jfif"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        <Image src="/images/bb609de840a47df9ee1187f433c5448e.png" alt="" />
                        <div className="flex flex-col gap-3">
                            <p>
                                Trong những chuyến đi về sau, anh đã không ngừng tìm kiếm đối
                                tác chuyên nghiệp và uy tín – có cùng đam mê và định hướng phục
                                vụ thị trường – có giải pháp cung ứng những sản phẩm chất lượng,
                                an toàn để cùng đưa sản phẩm sang Việt Nam. Từng khó khăn trong
                                việc đảm bảo chất lượng và hương vị nguyên bản được chuẩn hóa
                                trong từng giai đoạn.
                            </p>
                            <p>
                                Chính những lúc ở trên đất bạn, anh thấy chạnh lòng khi nghĩ về
                                quê nhà, bị thôi thúc bởi khát vọng được kết nối những ý tưởng
                                trở thành sự thật, những mong người thân và cộng đồng Việt sớm
                                được thưởng thức những thực phẩm chất lượng cao, sớm phát huy
                                nền ẩm thực Việt vươn tầm thế giới và khắc dấu những món ngon
                                gia đình trong xã hội cùng tâm thức người xa quê. Các sản phẩm
                                mang thương hiệu Trust Farm, Seafood Kingdom, Green Cattle,
                                Yumpo, Topona cũng ra đời từ đó.
                            </p>
                        </div>
                    </div>
                </div>
            </AppContainer>

            <div className=" bg-[#FFC535]">
                <div className="grid md:grid-cols-2 gap-5 md:gap-10 py-5 max-w-screen-xl mx-auto px-4 items-center">
                    <div className="text-center md:text-right">
                        <div className="text-xl font-bold uppercase">
                            ĐĂNG KÝ NHẬN THÔNG TIN
                        </div>
                        <div className="text-sm">
                            Để nhận thông tin mới từ Vietinter Food cũng như các chương trinh
                            khuyến mại hấp dẫn
                        </div>
                    </div>
                    <div className="flex flex-row items-center rounded overflow-hidden">
                        <Input
                            placeholder="Nhập email của bạn"
                            radius="none"
                            className="outline-none"
                        />
                        <Button className="bg-black text-white rounded-none">
                            Gửi đăng ký
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
