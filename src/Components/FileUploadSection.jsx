import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";
import FileInput from "./FileInput";

const FileUploadSection = ({ setIsFileUploaded }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState({
        fileError: false,
        uploadError: false,
    });
    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    const handleFileUpload = async (e) => {
        e.preventDefault();
        if (selectedFile.type === "application/json") {
            setError((prev) => ({ ...prev, fileError: false }));
            const formData = new FormData();
            formData.append("file", selectedFile);
            try {
                const response = await fetch(
                    "http://localhost:5000/file/upload",
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const result = await response.json();
                if (response.status === 201) {
                    setIsFileUploaded((prev) => !prev);

                    //emitting a success toast
                    toast("File is uploaded successfully!", {
                        position: "bottom-left",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            } catch (error) {
                console.log(error);
                setError((prev) => ({ ...prev, uploadError: true }));
            }
            console.log({ selectedFile });
        } else {
            setError((prev) => ({ ...prev, fileError: true }));
        }
    };
    return (
        <div className="md:w-1/4  border-slate-200  mb-4">
            <form onSubmit={handleFileUpload} className="md:border-r-2 px-4">
                <FileInput onChange={onFileChange} />

                <Button type="submit">Upload File</Button>
                <ErrorMessage
                    className={`${
                        error.fileError || error.uploadError
                            ? "visible"
                            : "invisible"
                    } h-6 `}
                >
                    {error.fileError && "Please upload a json file"}
                    {error.uploadError && "couldn't upload file"}
                </ErrorMessage>
            </form>
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default FileUploadSection;
