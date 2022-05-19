export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "username",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img
                        src={params.row.img}
                        alt="avatar"
                        className="cellImg"
                    />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//TEMPORARY DATA
export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "active",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "passive",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 3,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "active",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 4,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "passive",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "pending",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 6,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "passive",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 7,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "active",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 8,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "pending",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 9,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "active",
        email: "Snow@gmail.com",
        age: 35,
    },
    {
        id: 10,
        username: "Snow",
        img: "./images/wolf1.jpg",
        status: "active",
        email: "Snow@gmail.com",
        age: 35,
    },
];
