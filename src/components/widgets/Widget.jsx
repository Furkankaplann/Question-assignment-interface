import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AddBoxIcon from "@mui/icons-material/AddBox";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "ÖĞRETMEN SAYISI",
        isMoney: false,
        link: "Tüm Öğretmenleri Görüntüle",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "EMİRLER",
        isMoney: false,
        link: "Tüm Emirleri Görüntüle",
        icon: (
          <AddBoxIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "SORULAR SAYISI",
        isMoney: true,
        link: "Tüm Soruları Görüntüle",
        icon: (
          <QuestionAnswerIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "KALAN SORU SAYISI",
        isMoney: true,
        link: "Tüm Kalan Soruları Görüntüle",
        icon: (
          <HelpCenterIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
