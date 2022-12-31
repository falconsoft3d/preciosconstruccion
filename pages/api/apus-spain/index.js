const target = `https://raw.githubusercontent.com/falconsoft3d/preciosconstruccion/main/public/data/apus/spain/apus.csv`; //file

export default async function handler(req, res) {
    await fetch(target).then(function (response) {
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');
        return reader.read().then(function (result) {
            return decoder.decode(result.value);
        });
    }).then(function (csv) {
        let lines = csv.split("\n");
        let result = [];
        let headers = lines[0].split(",");
        let counter = 0;
        for (let i = 1; i < lines.length; i++) {
            counter++;
            let obj = {};
            let currentline = lines[i].split(",");
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        // console.log("counter:", counter);
        res.status(200).json(result);
        
    });
  }