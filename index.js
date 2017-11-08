//index.js
const http = require(&#39;http&#39;);
const hostname = &#39;0.0.0.0&#39;;
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) =&gt; {
res.statusCode = 200;
res.setHeader(&#39;Content-Type&#39;, &#39;text/plain&#39;);
res.end(&#39;Hello World\n&#39;);
});
server.listen(port, hostname, () =&gt; {
console.log(`Server running at http://${hostname}:${port}/`);
});
