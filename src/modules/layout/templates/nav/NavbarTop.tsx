import Link from "next/link"
import { FiPhoneCall, FiUser } from "react-icons/fi"

const NavBarTop: any = () => {
  return (
    <>
      <div className="relative z-20 hidden lg:block bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className=" text-gray-700 py-2 font-sans text-xs font-medium border-b flex justify-between items-center">
            <span className="flex items-center">
              <FiPhoneCall className="mr-2" />
              We are available 24/7, Need help? Call Us:{" "}
              <a
                href="tel:+012345609"
                className="font-bold ml-1"
                style={{ color: "#592316" }}
              >
                +01234560352
              </a>
            </span>

            <div className="lg:text-right flex items-center">
              <Link href="/about-us">
                <a className="font-medium">About Us</a>
              </Link>
              <span className="mx-2">|</span>
              <Link href="/contact-us">
                <a className="font-medium ">Contact Us</a>
              </Link>
              <span className="mx-2">|</span>
              <button
                // onClick={handleModal}
                className="font-medium "
              >
                My account
              </button>
              <span className="mx-2">|</span>
              <button
                // onClick={() => setModalOpen(!modalOpen)}
                className="flex items-center font-medium "
              >
                <span className="mr-1">
                  <FiUser />
                </span>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBarTop
