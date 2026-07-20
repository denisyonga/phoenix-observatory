type Feature = {
    properties: {
      NAME: string;
      ISO2: string;
      ISO3: string;
      POP2005: number;
      REGION: number;
      SUBREGION: number;
    };
  };
  
  type Props = {
    selectedCountry?: Feature;
  };
  
  export default function CountryInfoPanel({
    selectedCountry,
    networkData,
  }: Props) {
    function countryFlag(code: string) {
        return code
          .toUpperCase()
          .split("")
          .map((char) =>
            String.fromCodePoint(127397 + char.charCodeAt(0))
          )
          .join("");
      }
      const regionNames: Record<number, string> = {
        150: "Europe",
        142: "Asia",
      };
      const subregionNames: Record<number, string> = {
        39: "Southern Europe",
        151: "Eastern Europe",
        154: "Northern Europe",
        155: "Western Europe",
        145: "Western Asia",
      };
    return (
        <div className="rounded-lg border bg-white p-6 shadow">

        <h2 className="mb-4 text-2xl font-bold">
        Country Profile
        </h2>

        {selectedCountry ? (
  <>
       <h3 className="mb-6 text-2xl font-bold text-slate-800">
        {countryFlag(selectedCountry.properties.ISO2)}{" "}
        {selectedCountry.properties.NAME}
      </h3>

  <div className="space-y-4">

    <div className="rounded-lg border bg-slate-50 p-4">
      <p className="text-sm text-slate-500">ISO2</p>
      <p className="text-xl font-semibold">
        {selectedCountry.properties.ISO2}
      </p>
    </div>

    <div className="rounded-lg border bg-slate-50 p-4">
      <p className="text-sm text-slate-500">ISO3</p>
      <p className="text-xl font-semibold">
        {selectedCountry.properties.ISO3}
      </p>
    </div>

    <div className="rounded-lg border bg-slate-50 p-4">
      <p className="text-sm text-slate-500">
        Reference Population
      </p>
      <p className="text-xl font-semibold">
        {selectedCountry.properties.POP2005.toLocaleString()}
      </p>
    </div>

    <div className="rounded-lg border bg-slate-50 p-4">
      <p className="text-sm text-slate-500"> European Region
  </p>

  <p className="text-xl font-semibold">
    {regionNames[selectedCountry.properties.REGION] ?? "Unknown"}
  </p>
</div>

<div className="rounded-lg border bg-slate-50 p-4">
  <p className="text-sm text-slate-500">
    Geographical Area
  </p>

  <p className="text-xl font-semibold">
    {subregionNames[selectedCountry.properties.SUBREGION] ?? "Unknown"}
  </p>
</div>

</div>

</>
) : (
  <div className="text-center py-12 text-slate-500">
    <p className="text-5xl mb-4">🌍</p>

    <p className="font-semibold">
      No country selected
    </p>

    <p className="mt-2 text-sm">
      Click any country on the map to begin exploring.
    </p>
  </div>
)}
</div>

  );
}