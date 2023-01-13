
var inputFolder = Folder.selectDialog("Select the input folder");

var outputFolder = Folder.selectDialog("Select the output folder");

var pdfFiles = inputFolder.getFiles("*.pdf");

pdfFiles.sort(function(a, b) {

    return a.name > b.name;
});

for (var i = 0; i < pdfFiles.length; i++) {
    var pdfFile = pdfFiles[i];
    var doc = app.open(pdfFile);
    }
    var saveFile = new File(outputFolder + "/" + pdfFile.name.replace(".pdf",  ".ai"));
    var saveOpts = new IllustratorSaveOptions();
    saveOpts.compatibility = Compatibility.ILLUSTRATOR8;
    doc.saveAs(saveFile, saveOpts);
    doc.close();
}
