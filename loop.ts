const files: string[] = ["foo.txt ", ".bar", "   ", "baz.foo"];

function getFilePaths(files: string[]): string[] {
  let filesPaths: string[] = [];

  for (let file of files) {
    const fileName = file.trim();
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`;
      filesPaths.push(filePath);
    }
  }
  console.log(filesPaths);
  return filesPaths;
}

function reduceGetFilePaths(files: string[]): string[] {
  const filesPaths: string[] = [];
  files.reduce((acc, file) => {
    const fileName = file.trim();
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`;
      filesPaths.push(filePath);
    }
    return acc;
  }, []);

  console.log("reduce", filesPaths);
  return filesPaths;
}

function mapGetFilePaths(files: string[]):string[] {
  const filePaths:string[] = files
    .filter((file) => {
      return file.trim();
    })
    .map((fileName) => {
      return `~/cool_app/${fileName}`;
    });
  return filePaths;
}

getFilePaths(files);
reduceGetFilePaths(files);
console.log(mapGetFilePaths(files));
