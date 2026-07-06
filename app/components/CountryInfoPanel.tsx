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
    networkData?: NetworkData;
  };
  type NetworkData = {
    latency: number;
    packetLoss: string;
    ipv4: string;
    ipv6: string;
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
          Country Information
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
        Population (2005)
      </p>
      <p className="text-xl font-semibold">
        {selectedCountry.properties.POP2005.toLocaleString()}
      </p>
    </div>

    <div className="rounded-lg border bg-slate-50 p-4">
      <p className="text-sm text-slate-500"> Region
  </p>

  <p className="text-xl font-semibold">
    {regionNames[selectedCountry.properties.REGION] ?? "Unknown"}
  </p>
</div>

<div className="rounded-lg border bg-slate-50 p-4">
  <p className="text-sm text-slate-500">
    Subregion
  </p>

  <p className="text-xl font-semibold">
    {subregionNames[selectedCountry.properties.SUBREGION] ?? "Unknown"}
  </p>
</div>

</div>
<hr className="my-6" />

<h4 className="mb-3 text-lg font-semibold">
  ERGO Network
</h4>

<div className="rounded-lg border bg-blue-50 p-4">

  <div className="grid grid-cols-2 gap-3">

    <div className="rounded border bg-white p-3">
      <p className="text-xs text-slate-500">Latency</p>
      <p className="mt-1 text-lg font-semibold">
        {networkData?.latency ?? "—"} ms
      </p>
    </div>

    <div className="rounded border bg-white p-3">
      <p className="text-xs text-slate-500">Packet Loss</p>
      <p className="mt-1 text-lg font-semibold">
        {networkData?.packetLoss ?? "—"}%
      </p>
    </div>

    <div className="rounded border bg-white p-3">
      <p className="text-xs text-slate-500">IPv4</p>
      <p className="mt-1 text-lg font-semibold">
        {networkData?.ipv4 ?? "—"}
      </p>
    </div>

    <div className="rounded border bg-white p-3">
      <p className="text-xs text-slate-500">IPv6</p>
      <p className="mt-1 text-lg font-semibold">
        {networkData?.ipv6 ?? "—"}
      </p>
    </div>

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