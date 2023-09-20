import "./single.scss";
import Chart from "../../components/chart/Chart";
import * as React from "react";
import { DataGrid} from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const Single = () => {
  const [filterValue, setFilterValue] = React.useState("");
 

  const columns = [
    { field: "id", headerName: "Sınav ID", width: 250 },
    {
      field: "examName",
      headerName: "Sınav Adı",
      width: 300,
      editable: false,
      description: "Sınav Adı",
    },
    {
      field: "examDate",
      headerName: "Soru Sayısı",
      width: 300,
      editable: false,
      description: "Soru Sayısı",
    },
    
  ];

  const rows = [
    { id: 1, examName: "BTD", examDate: "5" },
    { id: 2, examName: "GBT", examDate: "4" },
    { id: 3, examName: "OKUBEG", examDate: "3" },
    { id: 4, examName: "FENBEG", examDate: "4" },
    { id: 5, examName: "sınav", examDate: "0" },
    { id: 6, examName: "sınav", examDate: "0" },
    { id: 8, examName: "sınav", examDate: "0" },
    { id: 9, examName: "sınav", examDate: "0" },
  ];

  const filteredRows = rows.filter((row) => {
    return (
      row.examName.toLowerCase().includes(filterValue.toLowerCase()) ||
      row.examDate.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
          <div className="editButton"> Düzenle</div>
            <h1 className="title">Kişi Bilgisi</h1>
            <div className="item">
              <img
                src="https://www.bestepebloggers.com/wp-content/uploads/2019/11/%C3%B6%C4%9Fretmen.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Değerlendiciri 1</h1>
                <div className="detailItem">
                  <span className="itemKey">Atanan Soru Sayısı:</span>
                  <span className="itemValue">5</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Yetki:</span>
                  <span className="itemValue">Master</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Kullanıcı Değerlendirme Grafiği" />
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Filtrele..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="filterInput"
          />
          <Box
            sx={{
              height: 400,
              width: 1100,
              marginLeft: "1rem",
              marginRight: "2rem",
              marginTop: "2rem",
            }}
          >
            <DataGrid
              rows={filteredRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
              
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Single;
