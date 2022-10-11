const CountryMapperService = {
  mapCountryCodeToCountryName: (billingCountry: any) => {
    switch (billingCountry) {
      case "sa":
        return "Saudi Arabia"
      case "ae":
        return "United Arab Emirates"
    }
  },
}
export default CountryMapperService
