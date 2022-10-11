import { medusaClient } from "@lib/config"
import { IS_BROWSER } from "@lib/constants"
import {
  CategoryContext,
  useCategoryActions,
} from "@lib/context/CategoryContext"
import { getCollectionIds } from "@lib/util/get-collection-ids"
import StickyCart from "@modules/cart/templates/theme/StickyCart"
import CollectionTemplate from "@modules/collections/templates"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import SkeletonCollectionPage from "@modules/skeletons/templates/skeleton-collection-page"
import TypeTemplate from "@modules/types/templates/TypeTemplate"
import ApiService from "@services/ApiService"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { ReactElement, useContext, useEffect, useState } from "react"
import { dehydrate, QueryClient, useQuery } from "react-query"
import { NextPageWithLayout, PrefetchedPageProps } from "../../types/global"

interface Params extends ParsedUrlQuery {
  id: string
}

// const fetchCollection = async (id: string) => {
//   return await medusaClient.collections.retrieve(id).then(({ collection }) => ({
//     id: collection.id,
//     title: collection.title,
//   }))
// }

export const fetchCollectionProducts = async ({
  pageParam = 0,
  id,
  cartId,
}: {
  pageParam?: number
  id: string
  cartId?: string
}) => {
  const { products, count, offset } = await medusaClient.products.list({
    limit: 12,
    offset: pageParam,
    collection_id: [id],
    cart_id: cartId,
  })

  return {
    response: { products, count },
    nextPage: count > offset + 12 ? offset + 12 : null,
  }
}

const CollectionPage: NextPageWithLayout<PrefetchedPageProps> = ({
  notFound,
}) => {
  const { query, isFallback, replace } = useRouter()
  const id = typeof query.id === "string" ? query.id : ""
  const [currentType, setCurrentType] = useState<any>(null)

  useEffect(() => {
    async function getAllTypeData() {
      const allProduct = await ApiService.getAllProduct()
      const typeIdProducts = allProduct.filter((product: any) => {
        return product.type_id === id
      })
      const typeIdProduct: any = [typeIdProducts[0]].map((product: any) => {
        return { typeId: product.type.id, title: product.type.value }
      })
      setCurrentType(typeIdProduct)
    }
    getAllTypeData()
  }, [id])

  console.log("currentType", currentType)
  //   const { data, isError, isSuccess, isLoading } = useQuery(
  //     ["get_collection", id],
  //     () => fetchCollection(id)
  //   )

  //   console.log("queryData", data)

  if (notFound) {
    if (IS_BROWSER) {
      replace("/404")
    }

    return <SkeletonCollectionPage />
  }

  //   if (isError) {
  //     replace("/404")
  //   }

  //   if (isFallback || isLoading || !data) {
  //     return <SkeletonCollectionPage />
  //   }

  if (!notFound && currentType && Object.keys(currentType).length > 0) {
    return (
      <>
        <Head
          title={currentType.title}
          description={`${currentType.title} collection`}
        />
        <StickyCart />
        <TypeTemplate type={currentType} />
      </>
    )
  }

  return <></>
}

CollectionPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  //   const ids = await getCollectionIds()
  //   return {
  //     paths: ids.map((id) => ({ params: { id } })),
  //     fallback: true,
  //   }
  const allProduct = await ApiService.getAllProduct()
  const typeIdProducts = allProduct.filter((product: any) => {
    return product.type_id
  })
  const idsWithDuplicateValue: any = typeIdProducts.map((product: any) => {
    return product.type_id
  })
  // let mySet = new Set();
  let ids = idsWithDuplicateValue.filter((elem: any, index: any, self: any) => {
    return index === self.indexOf(elem)
  })

  return {
    paths: ids.map((id: any) => ({ params: { id } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  let typeIdProduct: any = null
  const queryClient = new QueryClient()
  const id = context.params?.id as string

  const allProduct = await ApiService.getAllProduct()
  const typeIdProducts = allProduct?.filter((product: any) => {
    return product.type_id === id
  })
  if (typeIdProducts && typeIdProducts.length > 0) {
    typeIdProduct = [typeIdProducts[0]]?.map((product: any) => {
      return { typeId: product?.type?.id, title: product?.type?.value }
    })
  }

  //   await queryClient.prefetchQuery(["get_collection", id], () =>
  //     fetchCollection(id)
  //   )

  //   await queryClient.prefetchInfiniteQuery(
  //     ["get_collection_products", id],
  //     ({ pageParam }) => fetchCollectionProducts({ pageParam, id }),
  //     {
  //       getNextPageParam: (lastPage) => lastPage.nextPage,
  //     }
  //   )

  //   const queryData = await queryClient.getQueryData([`get_collection`, id])
  //   const queryData = await queryClient.getQueryData([`get_collection`, id])

  if (!typeIdProduct) {
    return {
      props: {
        notFound: true,
      },
    }
  }

  return {
    props: {
      // Work around see – https://github.com/TanStack/query/issues/1458#issuecomment-747716357
      //   dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      notFound: false,
    },
  }
}

export default CollectionPage
