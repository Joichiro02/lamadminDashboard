import { DriveFolderUploadOutlined } from "@mui/icons-material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import "./new.scss";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "../images/wolf1.jpg"
                            }
                            alt="wolf"
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="form-input">
                                <label htmlFor="file">
                                    Image:{" "}
                                    <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            {inputs.map((input) => (
                                <div className="form-input" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        type={input.type}
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            ))}

                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
