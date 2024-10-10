const ipworks = require("@nsoftware/ipworks");
const axios = require("axios");

if (!ipworks) {
  console.error("Cannot find ipworks.");
  process.exit(1);
}

main();

function main() {
  const options = {
    url: "https://dummyjson.com/products",
    method: "get",
    maxBodyLength: Infinity,
    responseType: "text",
  };

  // We use axios to perform the http request
  // so we can get the data from dummy json
  axios
    .request(options)
    .then(async (response) => {
      var jsonProcessor = new ipworks.json();

      // Then according to the documentation we can use the JSON class from IPWorks 2024 to get the data
      // In the documentation it is shown an example
      try {
        jsonProcessor.setInputData(response.data);
        jsonProcessor.setBuildDOM(true);
        await jsonProcessor.parse();

        // According to the documentation of jsonpath https://goessner.net/articles/JsonPath/
        // this is the way to handle this case.
        // But there might be an issue with the js implementation of the library.
        //jsonProcessor.setXPath("$.products[*].title");
        //console.log(jsonProcessor.getXText());

        // Tha is why i am doing a very naive implementation to get all the titles from the json!

        var index = 0;
        while (true) {
          jsonProcessor.setXPath("$.products[" + index + "].title");
          console.log(jsonProcessor.getXText());

          index++;
        }
      } catch (e) {
        // Note ignorin the exception thrown by the implementation above.
        // since for the index 29 the xpath is invalid
        if (e.message != "Invalid XPath.") console.error(e);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
