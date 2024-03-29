 import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// custom loader
// const MyLoadingRenderer = ({ document, fileName }) => {
//   const fileText = fileName || document?.fileType || "";

//   if (fileText) {
//     return <div>Loading Renderer ({fileText})...</div>;
//   }

//   return <div>Loading Renderer...</div>;
// };
//  method to find latest saturday version of pdf file
function Home() {
  // for docx, pptx & xlsx, you need to upload in any cloud platform it could be amazon s3, github and all. But you need to make sure there is no cors policy. for more info visit this link: https://www.npmjs.com/package/@cyntler/react-doc-viewer
  const docs = [
    {
      // uri: "url", // for remote file
      uri: "https://cdn.jsdelivr.net/gh/Butcanudothis/jsDeliverCDN@main/sda-Digital-Bulletin.pdf", // for local file
    },
    {
      uri: "https://github.com/kartikxisk/docx-xlsx-pptx-pdf-viewer-nextjs-and-reactjs/files/11781031/demo.docx", // for remote file
      // uri: "/demo.pptx", // for local file
    },
    {
      uri: "https://github.com/kartikxisk/docx-xlsx-pptx-pdf-viewer-nextjs-and-reactjs/files/11781036/demo.pptx", // for remote file
      // uri: "/demo.docx", // for local file
    },
    {
      uri: "https://github.com/kartikxisk/docx-xlsx-pptx-pdf-viewer-nextjs-and-reactjs/files/11781037/demo.xlsx", // for remote file
      // uri: "/demo.xlsx", // for local file
    },
  ];
  return (
    <div>
      <DocViewer
        prefetchMethod="GET" // for remote fetch
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: "100vh" }} //custom style
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false,
          },
          csvDelimiter: ",", // "," as default,
          pdfZoom: {
            defaultZoom: 1.2, // 1 as default,
            zoomJump: 0.2, // 0.1 as default,
          },
          pdfVerticalScrollByDefault: true, // false as default
        }}
      />
    </div>
  );
}

export default Home;
