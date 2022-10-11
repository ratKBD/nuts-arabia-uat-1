import React from "react"
import { IoBagAddSharp, IoAdd, IoRemove } from "react-icons/io5"
import { useProductActions } from "@lib/context/product-context"
import { ChevronDownIcon } from "@heroicons/react/outline"

export default function IncrementDecrementBtn({
  isOnModal,
  currentDisplayableVariant,
  modalOpen,
  setModalOpen,
  variants,
}: any) {
  const {
    updateOptions,
    addToCart,
    options,
    inStock,
    variant: contextVariant,
    increaseQuantity,
    decreaseQuantity,
    setSelectedVariantInProvider,
    quantity,
  } = useProductActions()
  const [selectedVariantId, setSelectedVariantId] = React.useState(null)

  // React.useEffect(() => {
  //   console.log("options", options)

  //   let selectedVarient
  //   if (selectedVariantId) {
  //     selectedVarient = variants.filter(
  //       (variant: any) => variant.id === selectedVariantId
  //     )
  //     console.log(selectedVariantId, "selectedVarient", selectedVarient)
  //     setSelectedVariantInProvider(selectedVarient[0])
  //   }
  // }, [selectedVariantId])

  React.useEffect(() => {
    if (
      currentDisplayableVariant &&
      Object.keys(currentDisplayableVariant).length > 0 &&
      currentDisplayableVariant.options &&
      currentDisplayableVariant.options.length > 0 &&
      currentDisplayableVariant.options[0]?.value &&
      variants &&
      variants.length > 0
    ) {
      console.log(
        "currentDisplayableVariant.options[0]",
        currentDisplayableVariant.options[0]
      )
      console.log(
        "ProductCardFootervariants",
        variants,
        currentDisplayableVariant.options[0]?.variant_id
      )
      let currentVariant = variants.filter(
        (variant: any) =>
          variant.id === currentDisplayableVariant.options[0]?.variant_id
      )
      console.log("currentVariant", currentVariant)
      setSelectedVariantId(currentDisplayableVariant.options[0]?.variant_id)
      setSelectedVariantInProvider(currentVariant[0])
      updateOptions({
        [currentDisplayableVariant.options[0].id]:
          currentDisplayableVariant.options[0].value,
      })
    }
    let selectedVarient
    if (selectedVariantId) {
      selectedVarient = variants.filter(
        (variant: any) => variant.id === selectedVariantId
      )
      console.log(selectedVariantId, "selectedVarient", selectedVarient)
      setSelectedVariantInProvider(selectedVarient[0])
    }
  }, [currentDisplayableVariant, variants, selectedVariantId])

  return (
    <>
      {isOnModal ? (
        <span className="h-9 w-auto flex items-center justify-center transition-all text-lg font-normal text-gray-600">
          {currentDisplayableVariant &&
            Object.keys(currentDisplayableVariant).length > 0 &&
            currentDisplayableVariant.options &&
            currentDisplayableVariant.options.length > 0 &&
            currentDisplayableVariant.options[0]?.value}
        </span>
      ) : (
        <div
          className="flex justify-content items-center border border-gray-200 rounded shadow hover:border-emerald-500 px-2 text-sm sm:text-lg font-normal text-gray-600"
          onClick={() => setModalOpen(!modalOpen)}
        >
          <span className="h-9 w-auto flex items-center justify-center transition-all">
            {currentDisplayableVariant &&
              Object.keys(currentDisplayableVariant).length > 0 &&
              currentDisplayableVariant.options &&
              currentDisplayableVariant.options.length > 0 &&
              currentDisplayableVariant.options[0]?.value}
          </span>

          <ChevronDownIcon
            className="ml-1 h-3 w-3 group-hover:text-emerald-600"
            aria-hidden="true"
          />
        </div>
      )}
      {isOnModal ? (
        <div
          // key={item.id}
          className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded"
        >
          <button
            onClick={() => decreaseQuantity()}
            disabled={quantity === 0}
            // onClick={() =>
            //   updateItemQuantity(item.id, item.quantity - 1)
            // }
          >
            <span className="text-dark text-base">
              <IoRemove />
            </span>
          </button>
          <p className="text-sm text-dark px-1 font-serif font-semibold">
            {/* item.quantity */ quantity}
          </p>
          <button
            onClick={() => increaseQuantity()}
            disabled={!inStock}
            // onClick={() =>
            //   updateItemQuantity(item.id, item.quantity + 1)
            // }
            // disabled={product.quantity === item.quantity}
          >
            <span className="text-dark text-base">
              <IoAdd />
            </span>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setModalOpen(!modalOpen)}
          // disabled={product.quantity < 1}
          aria-label="cart"
          className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all shadow"
        >
          <span className="text-xl">
            <IoBagAddSharp />
          </span>
        </button>
      )}
    </>
  )
}
