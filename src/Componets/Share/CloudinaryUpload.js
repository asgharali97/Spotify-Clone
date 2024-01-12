import {openUploadWidget} from "../../Utils/CloudinaryService";
import {cloudinary_upload_preset,CloudName} from "../../config";

const CloudinaryUpload = ({setUrl,setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: CloudName,
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename)
                    console.log(result)
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black rounded-full p-3 font-semibold"
            onClick={uploadImageWidget}
        >
            Select Song
        </button>
    );
};

export default CloudinaryUpload;