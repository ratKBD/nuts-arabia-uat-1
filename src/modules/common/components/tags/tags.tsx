import React from "react"
export interface ITagsProps {
  product: any
}
const Tags: React.FC<ITagsProps> = ({ product }: ITagsProps) => {
  return (
    <>
      {product.tag.length !== 0 && (
        <div className="flex flex-row">
          {JSON.parse(product?.tag).map((t: any, i: any) => (
            <span
              key={i + 1}
              className="bg-gray-50 mr-2 border-0 text-gray-600 rounded-full inline-flex items-center justify-center px-3 py-1 text-xs font-semibold font-serif mt-2"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

export default Tags
