import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Toplam Soru Sayısı</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Bugün Yapılan Sorular</p>
        <p className="amount">420</p>
        <p className="desc">Ortalama yapılan sorular</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Hedef</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">30.000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Geçen Hafta</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">50</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Geçen Ay</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
