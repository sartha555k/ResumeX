import ClassicTemplete from "./templates/ClassicTemplate";
import ModernTemplete from "./templates/ModernTemplate";
import MinimalImageTemplete from "./templates/MinimalImageTemplate";
import MinimalTemplete from "./templates/MinimalTemplate";

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
  const renderTemplete = () => {
    switch (template) {
      case "modern":
        return <ModernTemplete data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplete data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplete data={data} accentColor={accentColor} />;
      default:
        return <ClassicTemplete data={data} accentColor={accentColor} />;
    }
  };
  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={
          "border border-gray-200 print:shadow-none print:border-none" + classes
        }
      >
        {renderTemplete()}
      </div>
      <style jsx>
        {`
          @page {
            size: letter;
            margin: 0;
          }
          media print {
            html,
            body {
              width: 8.5in;
              height: 11in;
              overflow: hidden;
            }
            body* {
              visibility: hidden;
            }
            #resume-preview,
            #resume-preview * {
              visibility: visible;
            }
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: auto;
              box-shadow: none !important;
              border: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResumePreview;
