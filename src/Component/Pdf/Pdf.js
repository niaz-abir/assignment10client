import React from "react";
import jspdf from "jspdf";
import { useLoaderData } from "react-router-dom";
import "./Pdf.css";

const Pdf = () => {
  const pdf = useLoaderData();
  console.log(pdf);
  const generatePDF = () => {
    var doc = new jspdf("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  };
  return (
    <div className="ml-28 mt-8">
      <div>
        <div>
          <h2 className="text-2xl border-2 border-blue-400 rounded-md px-2 py-4 w-48">
            This is your pdf
          </h2>
          <div id="content">
            <h1 className="text mt-8">This course help you so much.</h1>
            <h2 className="text mt-2">You should read it</h2>
            <p className="text mt-2">
              Detail: This is a course where you can learn a programing
              method.Which help you lot of <br></br> in your carrier.If you can
              give your hardly work your can success
            </p>
            <p className="text mt-2">You must try to finish it in two months</p>
            <p className="text mt-2">Watch Tutorial and practise it</p>
            <p className="text mt-2">Face problem then try to google</p>
          </div>
        </div>
        <button
          onClick={generatePDF}
          type="primary"
          className=" btn bg-cyan-600 hover:bg-rose-500 mt-4"
        >
          Download Pdf
        </button>
      </div>
    </div>
  );
};

export default Pdf;
