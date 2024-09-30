import ListProductBody from "@/components/listProduct/ListProductBody";
import Image from "next/image";


function ListProduct() {
    return (
        <div className="mb-20">
            <div className="w-full">
            <Image
            alt=""
            src="/images/ListProduct_Banner.png"
            width={1000}
            height={400}
            layout="responsive"
            objectFit="cover"
            className="object-fill"
        />
        
            </div>
            <div className="max-w-screen-xl mx-auto h-auto px-4">
                <ListProductBody />
            </div>
        </div>
    );
}

export default ListProduct;