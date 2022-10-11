import { MEDUSA_BACKEND_URL, queryClient } from "@lib/config"
import { AccountProvider } from "@lib/context/account-context"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { StoreProvider } from "@lib/context/store-context"
import { CartProvider, MedusaProvider } from "medusa-react"
import { Hydrate } from "react-query"
// import "styles/globals.css"
import "@styles/custom.css"
import { AppPropsWithLayout } from "types/global"
import { SidebarProvider } from "@modules/common/components/context/SidebarContext"
import { CategoryProvider } from "@lib/context/CategoryContext"
import "react-loading-skeleton/dist/skeleton.css"
import { AllProductProvider } from "@lib/context/all-product-context"
import { LoaderProvider } from "@lib/context/loader-context"
import { PaymentMethodProvider } from "@lib/context/paymeny-method-context"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
    >
      <Hydrate state={pageProps.dehydratedState}>
        <LoaderProvider>
          <PaymentMethodProvider>
            <AllProductProvider>
              <CategoryProvider>
                <SidebarProvider>
                  <CartDropdownProvider>
                    <MobileMenuProvider>
                      <CartProvider>
                        <StoreProvider>
                          <AccountProvider>
                            {getLayout(<Component {...pageProps} />)}
                          </AccountProvider>
                        </StoreProvider>
                      </CartProvider>
                    </MobileMenuProvider>
                  </CartDropdownProvider>
                </SidebarProvider>
              </CategoryProvider>
            </AllProductProvider>
          </PaymentMethodProvider>
        </LoaderProvider>
      </Hydrate>
    </MedusaProvider>
  )
}

export default App
