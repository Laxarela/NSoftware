const ipworkszip = require("@nsoftware/ipworkszip");
const fs = require("fs");

if (!ipworkszip) {
  console.error("Cannot find ipworkszip.");
  process.exit(1);
}

main();

async function main() {
  const argv = process.argv;
  if (argv.length < 2 || argv.length > 6) {
    console.log(
      "Usage: node unzipper.js -zip path-of-zip-file -f name-of-the-file"
    );
    console.log(
      "By default the unzipped file is saved at the current directory!"
    );
    console.log("Options: ");
    console.log("  -zip    the path of the zip file ( default samplezip.zip).");
    console.log(
      "  -f      the name of the file to be extracted ( default foo.txt )"
    );
    console.log("Example: node unzipper.js -zip samplezip.zip -f foo.txt");
    process.exit();
  }

  let zipPath = "samplezip.zip",
    file = "foo.txt";

  for (i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("-")) {
      if (argv[i] === "-zip") {
        zipPath = argv[i + 1];
      }
      if (argv[i] === "-f") {
        file = argv[i + 1];
      }
    }
  }

  // Firstly check if the given archive exists and is valid or not
  if (!zipPath.endsWith(".zip")) {
    console.error("The " + zipPath + " archive does not exist.");
    process.exit();
  }

  try {
    await fs.promises.access(zipPath);
  } catch (error) {
    console.error("The " + zipPath + " archive does not exist.");
    process.exit();
  }

  const zip = new ipworkszip.zip();

  try {


    zip.setArchiveFile(zipPath);
    zip.setRecurseSubdirectories(true);

    // Secondly we do a scan and check the result of scan if the required file is inside or not
    // We do this because the .Extract method does not return any error if the required file is not found
    await zip.scan();
    
    var fileExists = false;
    for(var i = 0; i< zip.getFiles().list.elementCount; i++ ){

      if(zip.getFiles().get(i).getDecompressedName().endsWith(file)){
        //console.log(zip.getFiles().get(i));
        fileExists = true;
        break;
      }
    }

    if(! fileExists){
      console.error("The required file does not exists inside the archive!");
      process.exit();
    }


    zip.setExtractToPath( process.cwd() );

    zip.on("EndFile", (e) => {
      console.log(
        "Extracted: " + zip.getFiles().get(e.index).getDecompressedName()
      );
    });


    // NOTE: It needs to perform an all search, that is why the * is needed
    // It means search everywhere for this file
    await zip.extract( "*"+file );
  
    //await zip.extractAll();

    console.log("File was extracted succesfully!");
  } catch (e) {
    console.error(e);
    process.exit();
  }
}
