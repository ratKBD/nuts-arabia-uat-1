import React from "react"
import ScaleLoader from "react-spinners/ScaleLoader"

const SectionLoading = ({
  loading,
  height,
  width = "auto",
  loaderHeight = 30,
}: any) => {
  //   React.useEffect(() => {
  //     console.log("section loading", loading)
  //     if (loading) document.body.style.overflow = "hidden"
  //     else document.body.style.overflow = "visible"
  //   }, [loading])
  return (
    loading && (
      <div
        style={{ height, width }}
        className="h-full w-full z-10 flex justify-center items-center bg-slate-100"
      >
        {/* text-lg text-center py-6  */}
        <ScaleLoader
          color="#592316"
          loading={loading}
          height={loaderHeight}
          width={3}
          radius={3}
          margin={2}
        />
      </div>
    )
  )
}

export default SectionLoading
