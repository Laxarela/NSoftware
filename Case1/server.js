const ipworks = require("@nsoftware/ipworks");
 
 if(!ipworks) {
     console.error("Cannot find ipworks.");
     process.exit(1);
   }


/*
Which tool do I purchase to develop a client/server set of applications that transfer binary info? 
After reading the IPWorks 2024 documentation (https://cdn.nsoftware.com/help/IPF/dlp/IPPort.htm), I think the best tool(s) to handle this case would be the TCPServer and TCPClient classes


NOTE: This is showed in the below case where I configure a simple server to accept a request from a specific client
and then send the information to him.
But in the asked case we might need only the client( since the server is already in place ).

*/


main();

async function main() {

  const argv = process.argv;

  if (argv.length != 4) {
    console.log("Usage: node server.js -p port");
    console.log("  port	  the TCP port in the local host where the component listens");
    console.log("Example: node server.js -p 777");
    return;
  }

const tcpserver = new ipworks.tcpserver();

tcpserver.on("SSLClientAuthentication", function (e) {
  e.accept = true;
}).on("Disconnected", function (e) {
  console.log("\nDisconnected " + e.description + " from " + e.connectionId);
})
  .on("Connected", function (e) {
    let connections = tcpserver.getConnections();
    let connection = connections.get(e.connectionId);
    console.log(connection.getRemoteHost(e.connectionId) + " has connected.");
  })
  .on("DataIn", function (e) {

    // Here the server can validate the message if it is fine or not
    // And then can start sending it's information
  
    let connections = tcpserver.getConnections();
    let connection = connections.get(e.connectionId);
    console.log("Echoing 'Hello client from server' to client " + connection.getRemoteHost() + ".");
    tcpserver.sendText(e.connectionId, "Hello client from server");
  })

//tcpserver.setLocalPort( 0 ); // pass a random port
tcpserver.setLocalPort( parseInt( argv[ 3 ] ));
await tcpserver.startListening()

console.log(`Server Started Listening. at port ${tcpserver.getLocalPort()}`);

while (true) {
  await tcpserver.doEvents(function (err) {
    if (err) {
      console.log(err);
      return;
    }
  });
}
}