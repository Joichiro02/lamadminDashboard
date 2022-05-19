import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTable = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter((info) => info.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to={window.location.pathname + "/" + params.row.id}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="view-button">View</div>
                        </Link>
                        <div
                            className="delete-button"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="data-table">
            <div className="data-table-title">
                {window.location.pathname.charAt(1).toUpperCase() +
                    window.location.pathname.slice(2, -1)}{" "}
                Lists
                <Link to={window.location.pathname + "/new"} className="link">
                    Add new
                </Link>
            </div>
            <DataGrid
                className="data-grid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default DataTable;
