import { ProductVariant } from "@medusajs/medusa"

export const canBuy = (
  variant: Omit<ProductVariant, "beforeInsert">,
  items: any
) => {
  // return variant.inventory_quantity > 0 || variant.allow_backorder === true
  console.log("items", items)
  if(items.length === 0 && variant.inventory_quantity > 0) return true
  if(items.length === 0 && variant.inventory_quantity === 0) return false
  let currentProductVariant:any = items.filter((cartItem:any)=>cartItem.variant_id===variant.id)
  let cartAddedQuantity:any;
  cartAddedQuantity = currentProductVariant[0]?.quantity || 0 
  if (variant.inventory_quantity > cartAddedQuantity) return true
  if(variant.inventory_quantity === cartAddedQuantity) return false
}
