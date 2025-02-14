"use client";
import { CloudUpload } from "@carbon/icons-react";
import {
  ProgressIndicator,
  ProgressStep,
  FormItem,
  FileUploaderDropContainer,
  Button,
} from "@carbon/react";

export default function ApplyPermit() {
  return (
    <>
      <h3
        style={{ textAlign: "center", marginTop: "2.25rem", fontWeight: "400" }}
      >
        Work and Live Permit Application
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.5rem",
        }}
      >
        <ProgressIndicator spaceEqually style={{ width: "50%" }}>
          <ProgressStep current label="Upload Files" />
          <ProgressStep label="Auto Fill Form" />
          <ProgressStep label="Review and Edit Form" />
          <ProgressStep label="Submit Form" />
        </ProgressIndicator>
      </div>
        <div style={{ marginTop: "2rem" }}>
        <h5 style={{ textAlign: "center", fontWeight: "400" }}>
          Upload Required Documents
        </h5>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center',marginTop: '2rem',marginBottom: '5rem'}}>
        <div>
          <p className="cds--file--label" style={{display: 'flex', alignItems: 'flex-start'}}>Upload files</p>
          <p className="cds--label-description">
            Max file size is 10mb. Supported file types are .pdf .jpg and .png.
          </p>
          <FileUploaderDropContainer
            accept={["image/jpeg", "image/png","application/pdf"]}
            innerRef={{
              current: "[Circular]",
            }}
            labelText="Drag and drop files here or click to upload"
            multiple
            name=""
            onAddFiles={function noRefCheck() {}}
            onChange={function noRefCheck() {}}
            tabIndex={0}
          />
          <div className="cds--file-container cds--file-container--drop" />
        </div>
      </div>
    </>
  );
}
