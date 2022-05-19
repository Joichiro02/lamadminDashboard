import {
    ChatBubbleOutline,
    DarkModeOutlined,
    FullscreenExitOutlined,
    LanguageOutlined,
    ListOutlined,
    NotificationsNoneOutlined,
    SearchOutlined,
} from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";
import { Badge } from "@mui/material";
import { useContext } from "react";
import "./navbar.scss";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlined />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon" />
                        Language
                    </div>
                    <div className="item">
                        <DarkModeOutlined
                            className="icon"
                            onClick={() => dispatch({ type: "TOGGLE" })}
                            style={{
                                cursor: "pointer",
                            }}
                        />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon" />
                    </div>
                    <div className="item">
                        <Badge badgeContent={5} color="secondary">
                            <NotificationsNoneOutlined className="icon" />
                        </Badge>
                    </div>
                    <div className="item">
                        <Badge badgeContent={15} color="secondary">
                            <ChatBubbleOutline className="icon" />
                        </Badge>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon" />
                    </div>
                    <div className="item">
                        <img
                            src={
                                window.origin + "/users/:userId"
                                    ? "../images/wolf1.jpg"
                                    : "./images/wolf1.jpg"
                            }
                            alt="wolf"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
