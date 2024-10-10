const ipworks = require("@nsoftware/ipworks");

if(!ipworks) {
    console.error("Cannot find ipworks.");
    process.exit(1);
  }

  main();
 
async function main() {
    const ftp = new ipworks.ftp();

// According to the documentation:
// SSLAcceptAnyServerCert	Whether to trust any certificate presented by the server.
// This should solve the issue.
ftp.on("SSLServerAuthentication", function(e) {
    e.accept = true;
  });

}