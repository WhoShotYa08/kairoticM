import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";

const url = 'http://localhost:5000/api/upload'

export const UploadButton = generateUploadButton({
    url
});
export const UploadDropzone = generateUploadDropzone({
    url
});
