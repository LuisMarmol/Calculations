const servidor = require('http');

const server = servidor.createServer((req, res) => {

    console.log('Incoming Request');
    console.log(req.method, req.url);

    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            let arrayNum = body.split('&');
            console.log(arrayNum);

            let n1 = arrayNum[0].split('=')[1];
            
            let n2 = arrayNum[1].split('=')[1];
            
            let n3 = arrayNum[2].split('=')[1];

            let num1 = parseInt(n1);
            let num2 = parseInt(n2);
            let num3 = parseInt(n3);

            let sum = num1 + num2;
            let mult = sum * num3;

            res.end(`R1 = ${sum} y R2 = ${mult}`);
            return;
        })
    }
    else {
        res.setHeader('Content-Type', 'text/html');

        res.end(`<form method='POST'>
                    <input type="text" name="n1"/>
                    <br><br>
                    <input type="text" name="n2"/>
                    <br><br>
                    <input type="text" name="n3"/>
                    <br><br>
                    <button type="submit">Calcular</button>
                </form>`)
    }
});

server.listen(5005)