"use client";

import { DUMP_PRODUCTS } from "@/data";
import useDebouncedSearch from "@/hooks/useDebouncedSearch";
import { ProductProps } from "@/models";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SearchNavigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<ProductProps[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false); // Trạng thái mở/đóng của hộp tìm kiếm
  const [isClear, setClear] = useState<boolean>(false); // State show/hide of button clear input search
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1); // Track highlighted item
  const debouncedSearchTerm = useDebouncedSearch(searchTerm, 500);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { locale } = useParams();

  const fetchSearchResults = async (term: string) => {
    const results =
      DUMP_PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      ) ?? [];

    setResults(results);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchResults(debouncedSearchTerm);
      setIsOpen(true);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //
  useEffect(() => {
    if (searchTerm && searchTerm !== "") {
      setClear(true);
    } else {
      setClear(false);
    }
  }, [searchTerm]);

  // Handle keydown events for navigating the results
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && results.length > 0) {
        if (event.key === "ArrowDown") {
          setHighlightedIndex((prevIndex) =>
            prevIndex < results.length - 1 ? prevIndex + 1 : 0
          );
        } else if (event.key === "ArrowUp") {
          setHighlightedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : results.length - 1
          );
        } else if (event.key === "Enter") {
          if (highlightedIndex >= 0) {
            const selectedProduct = results[highlightedIndex];
            setSearchTerm(selectedProduct.name);
            setIsOpen(false);
            router.push(`/${locale}/productDetails/${selectedProduct.id}`); // Navigate to product detail
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, results, highlightedIndex]);

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        ref={inputRef}
        value={searchTerm}
        onClick={() => setIsOpen(true)}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="w-full xl:h-10 lg:h-8 xl:text-sm lg:text-[10px] bg-white rounded-md py-2 xl:pl-4 lg:pl-2 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
      />

      <div className="absolute inset-y-0 right-0 flex items-center xl:pr-3 lg:pr-1 gap-2">
        {isClear && (
          <CancelIcon
            fontSize="small"
            style={{ opacity: 60, cursor: "pointer" }}
            onClick={() => setSearchTerm("")}
          />
        )}
        <motion.div
          whileHover={{ x: [0, -2, 2, -2, 2, 0] }} // Shake effect
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <SearchIcon />
        </motion.div>
      </div>
      {isOpen && results && results.length > 0 && (
        <div className="flex flex-col absolute my-3 rounded overflow-hidden w-full bg-white text-black text-xs z-10 border border-gray-300 shadow">
          {results?.map((item, index) => (
            <Link
              href={`/${locale}/productDetails/${item.id}`}
              onClick={() => {
                setSearchTerm(item.name);
                setIsOpen(false);
              }}
              className={`p-3 cursor-pointer hover:bg-gray-200 ${
                highlightedIndex === index ? "bg-gray-200" : ""
              }`}
              key={index}
            >
              {`${item.category} ${item.name}`}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchNavigation;
