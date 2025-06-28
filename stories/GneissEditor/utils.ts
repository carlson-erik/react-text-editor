// Creates a file name using some value and a file exntension
const createFileName = (value: string, extension: string): string => {
  return `${value.replace(/\s/g, "-")}.${extension}`;
};

// Create and Downloads a user configured (file name + content) file.
const createAndDownloadFile = (fileName: string, fileContent: string) => {
  //create a file and put the fileContent, name and type
  var file = new File(["\ufeff" + fileContent], fileName, {
    type: "text/plain:charset=UTF-8",
  });

  //create a ObjectURL in order to download the created file
  var url = window.URL.createObjectURL(file);

  //create a hidden link and set the href and click it
  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = file.name;
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
};

// Copies string value to the user's clipboard
const copyToClipboard = (content: string): void => {
  navigator.clipboard.writeText(content);
};

export { createAndDownloadFile, createFileName, copyToClipboard };
