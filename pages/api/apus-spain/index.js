const target = `https://raw.githubusercontent.com/falconsoft3d/preciosconstruccion/main/public/data/apus/spain/apus.csv`; //file


export default async function handler(req, res) {
    try {
      const response = await fetch(target);
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      console.log("A");
      let result = await reader.read();
      const csv = decoder.decode(result.value);
      console.log("B");
      const lines = csv.split("\n");
      result = [];
      const headers = lines[0].split(",");
      let counter = 0;
      for (const line of lines) {
        counter++;
        const obj = {};
        const currentLine = line.split(",");
        for (const [index, header] of headers.entries()) {
          obj[header] = currentLine[index];
        }
        result.push(obj);
      }
      console.log("counter:", counter);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred");
    }
  }