import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import "./table.scss";

const List = () => {
    const rows = [
        {
            id: 1234567,
            product: "ASUS ROG Strix",
            img1: "./images/wolf1.jpg",
            img2: "../images/wolf1.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2345678,
            product: "ASUS ROG Strix",
            img1: "./images/wolf1.jpg",
            img2: "../images/wolf1.jpg",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Online Delivery",
            status: "Pending",
        },
        {
            id: 1234561,
            product: "ASUS ROG Strix",
            img1: "./images/wolf1.jpg",
            img2: "../images/wolf1.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 1234562,
            product: "ASUS ROG Strix",
            img1: "./images/wolf1.jpg",
            img2: "../images/wolf1.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
        },
        {
            id: 1234563,
            product: "ASUS ROG Strix",
            img1: "./images/wolf1.jpg",
            img2: "../images/wolf1.jpg",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
        },
    ];
    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">
                            Payment Method
                        </TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">
                                {row.id}
                            </TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                    <img
                                        src={
                                            window.origin + "/users/:userId"
                                                ? row.img2
                                                : row.img1
                                        }
                                        alt=""
                                        className="image"
                                    />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.customer}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.date}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.amount}
                            </TableCell>
                            <TableCell className="tableCell">
                                {row.method}
                            </TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>
                                    {row.status}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;
