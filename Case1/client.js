const ipworks = require("@nsoftware/ipworks");

if(!ipworks) {
  console.error("Cannot find ipworks.");
  process.exit(1);
}

main();

async function main() {
  const argv = process.argv;

  if (argv.length < 4 || argv.length > 6) {
    console.log("Usage: node client.js -s server -p port");
    console.log("Options: ");
    console.log("  -s    the address of the remote host.");
    console.log("  -p    the TCP port of the remote host ( default localhost )");
    console.log("Example: node echoclient.js -s localhost -p 777");
    process.exit();
  }

  const tcpclient = new ipworks.tcpclient();
  tcpclient.config("AcceptAnyServerCert=true");
  let server = 'localhost', port;

  for (i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("-")) {
      if (argv[i] === "-s") { server = argv[i + 1]; }
      if (argv[i] === "-p") { port = argv[i + 1]; }
    }
  }


  tcpclient.on('SSLServerAuthentication', function (e) {
    e.accept = true;
  })
    .on('Connected', function (e) {
      console.log(tcpclient.getRemoteHost() + " has connected.")
    })
    .on('Disconnected', function (e) {
      console.log("Disconnected " + e.description + " from " + tcpclient.getRemoteHost() + ".");
    });

  await tcpclient.connectTo(server, parseInt(port)).catch((err) => {
    console.log("Error: " + err.message);
    process.exit();
  });

  await tcpclient.doEvents().catch((err) => {
    console.log("Error: " + err.message);
    process.exit();
  });

  if (tcpclient.isConnected()) {

    // Since in the document the communication says serial
    // Here the client can send some kind of aknowledgment message
    console.log( "Sending message to the server...");
    tcpclient.sendText( "Hello server from client!" )

    // Here the client can do custom logic after receiveing the data
    // Example parse it, store it in db etc
    tcpclient.on('DataIn', function (e) {
        console.log("Received " + e.text + " from " + tcpclient.getRemoteHost());
      })
  }
}