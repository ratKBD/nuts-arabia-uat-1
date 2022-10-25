import { useAllProduct } from "@lib/context/all-product-context";
import usePreviews from "@lib/hooks/use-previews";
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons";
import repeat from "@lib/util/repeat";
import Card from "@modules/common/components/cta-card/Card";
import CategoryCarousel from "@modules/products/components/carousel/CategoryCarousel";
import ProductPreview from "@modules/products/components/product-preview";
import ProductCard from "@modules/products/templates/theme/ProductCard";
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview";
import { fetchCollectionProducts } from "@pages/collections/[id]";
import ApiService from "@services/ApiService";
import useFilter from "hooks/useFilter";
import { filter } from "lodash";
import { useCart } from "medusa-react";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Skeleton from "react-loading-skeleton";
import { useInfiniteQuery } from "react-query";

type CollectionTemplateProps = {
  collection: {
    id: string;
    title: string;
  };
};

const CollectionTemplate: React.FC<CollectionTemplateProps> = ({
  collection,
}) => {
  const { cart } = useCart();
  const { ref, inView } = useInView();
  const { allProduct, setAllProduct } = useAllProduct();
  const [showableData, setShowableData] = useState<any>([]);
  const { productData, setSortedField } = useFilter(showableData);

  useEffect(() => {
    let filteredCollectionProduct: any;
    const getAllProductData = async () => {
      const allProducts = await ApiService.getAllProduct();
      console.log("testPro", allProduct);
      if (allProducts?.length > 0) {
        setAllProduct(allProducts);
        filteredCollectionProduct = allProducts?.filter((product: any) => {
          return product.collection_id === collection.id;
        });

        setShowableData(filteredCollectionProduct);
      }
    };

    if (allProduct && allProduct.length > 0) {
      filteredCollectionProduct = allProduct.filter((product: any) => {
        return product.collection_id === collection.id;
      });
      setShowableData(filteredCollectionProduct);
    } else {
      getAllProductData();
    }

    console.log("filteredCollectionProduct", filteredCollectionProduct);
  }, [collection.id]);

  const {
    data: infiniteData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery(
    [`get_collection_products`, collection.id, cart?.id],
    ({ pageParam }) =>
      fetchCollectionProducts({
        pageParam,
        id: collection.id,
        cartId: cart?.id,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
  console.log("specificData", infiniteData);

  const previews = usePreviews({
    pages: infiniteData?.pages,
    region: cart?.region,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage]);

  console.log("showableData", showableData);
  return (
    // <div className="content-container py-6">
    //   <div className="mb-8 text-2xl-semi">
    //     <h1>{collection.title}</h1>
    //   </div>
    //   <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8">
    //     {previews.map((p) => (
    //       <li key={p.id}>
    //         <ProductPreview {...p} />
    //       </li>
    //     ))}
    //     {isLoading &&
    //       !previews.length &&
    //       repeat(8).map((index) => (
    //         <li key={index}>
    //           <SkeletonProductPreview />
    //         </li>
    //       ))}
    //     {isFetchingNextPage &&
    //       repeat(getNumberOfSkeletons(infiniteData?.pages)).map((index) => (
    //         <li key={index}>
    //           <SkeletonProductPreview />
    //         </li>
    //       ))}
    //   </ul>
    //   <div
    //     className="py-16 flex justify-center items-center text-small-regular text-gray-700"
    //     ref={ref}
    //   >
    //     <span ref={ref}></span>
    //   </div>
    // </div>
    <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
      <div className="flex py-10 lg:py-12">
        <div className="flex w-full">
          <div className="w-full">
            <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
              <Card />
            </div>
            <div className="relative">
              <CategoryCarousel />
            </div>
            {
              /* previews.length === 0 ? (
            <div className="text-center align-middle mx-auto p-5 my-5">
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                Sorry, we can not find this product 😞
              </h2>
            </div>
          ) : ( */
              <>
                <div className="flex justify-between my-3 bg-orange-100 border border-gray-100 rounded p-3">
                  <h6 className="text-sm font-serif">
                    Total{" "}
                    <span className="font-bold">{showableData?.length}</span>{" "}
                    items Found
                  </h6>
                  <span className="text-sm font-serif">
                    <select
                      onChange={(e) => setSortedField(e.target.value)}
                      className="py-0 text-sm font-serif font-medium block w-full rounded border-0 bg-white pr-10 cursor-pointer focus:ring-0"
                    >
                      <option
                        className="px-3"
                        value="All"
                        /* defaultValue */ hidden
                      >
                        Sort By Price
                      </option>
                      <option className="px-3" value="Low">
                        Low to High
                      </option>
                      <option className="px-3" value="High">
                        High to Low
                      </option>
                    </select>
                  </span>
                </div>
                <div className="flex flex-col small:flex-row small:items-start py-6">
                  <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                    <div className="flex">
                      <div className="w-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                          {
                            /* previews */ showableData
                              ? showableData.map((productDetails: any) => (
                                  <ProductCard
                                    key={productDetails.id}
                                    product={productDetails}
                                  />
                                ))
                              : [1, 2, 3, 4, 5].map((productDetails: any) => (
                                  <Skeleton
                                    key={productDetails.id}
                                    height={278}
                                    width={212}
                                  />
                                ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              /* ) */
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionTemplate;
