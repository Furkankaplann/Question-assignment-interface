export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Kullanıcı",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Durum",
    width: 350,

    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Değerlendirici - 1",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Master",
  },
  {
    id: 2,
    username: "Değerlendirici - 2",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Pasif",
  },
  {
    id: 3,
    username: "Değerlendirici - 3",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Master",
  },
  {
    id: 4,
    username: "Değerlendirici - 4",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Normal",
  },
  {
    id: 5,
    username: "Değerlendirici - 5",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Normal",
  },
  {
    id: 6,
    username: "Değerlendirici - 6",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Normal",
  },
  {
    id: 7,
    username: "Değerlendirici - 6",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Normal",
  },
  {
    id: 8,
    username: "Değerlendirici - 7",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Master",
  },
  {
    id: 9,
    username: "Değerlendirici - 8",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Normal",
  },
  {
    id: 10,
    username: "Değerlendirici - 9",
    img: "https://www.okulistik.com/anasayfa/images/okulistik-logo.svg",
    status: "Master",
  },
];
