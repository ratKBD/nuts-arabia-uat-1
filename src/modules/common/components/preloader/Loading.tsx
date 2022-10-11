import React from "react"
import ScaleLoader from "react-spinners/ScaleLoader"

const Loading = ({ loading }: any) => {
  React.useEffect(() => {
    if (loading) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "visible"
  }, [loading])
  return (
    loading && (
      <div
        style={{}}
        className="h-screen w-screen z-40 fixed flex justify-center items-center bg-slate-100"
      >
        {/* text-lg text-center py-6  */}
        <ScaleLoader
          color="#592316"
          loading={loading}
          height={30}
          width={3}
          radius={3}
          margin={2}
        />
      </div>
    )
  )
}

export default Loading
