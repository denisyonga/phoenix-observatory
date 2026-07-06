export type CsvRow = {
    Country: string;
    Latency: string;
    PacketLoss: string;
    IPv4: string;
    IPv6: string;
  };
  
  export function parseCsv(text: string): CsvRow[] {
  
    const lines = text.trim().split("\n");
  
    const headers = lines[0].split(",");
  
    return lines.slice(1).map((line) => {
  
      const values = line.split(",");
  
      return headers.reduce((obj, header, index) => {
  
        obj[header.trim() as keyof CsvRow] =
          values[index]?.trim() ?? "";
  
        return obj;
  
      }, {} as CsvRow);
  
    });
  
  }