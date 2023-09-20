import React, {useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Select,
  MenuItem,
  Checkbox,
  InputLabel,
  FormControl,
  Autocomplete,
  TextField,
} from "@mui/material";


const Assignments = () => {
  const dummyData = [
    {
      id: 1,
      questionName: "Soru 1",
      evaluatorName: "",
      evaluatorId: null,
      evaluationDate: null,
    },
    {
      id: 2,
      questionName: "Soru 2",
      evaluatorName: "",
      evaluatorId: null,
      evaluationDate: null,
    },
    {
      id: 5,
      questionName: "Soru 3",
      evaluatorName: "",
      evaluatorId: 105,
      evaluationDate: "",
    },
    {
      id: 6,
      questionName: "Soru 4",
      evaluatorName: "",
      evaluatorId: 106,
      evaluationDate: "",
    },
    {
      id: 7,
      questionName: "Soru 5",
      evaluatorName: "",
      evaluatorId: null,
      evaluationDate: null,
    },
    {
      id: 8,
      questionName: "Soru 6",
      evaluatorName: "",
      evaluatorId: null,
      evaluationDate: null,
    },
   
  ];

  const [data, setData] = useState(dummyData);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const dummyExams = [
    {
      id: 1,
      examName: "GBT",
    },
    {
      id: 2,
      examName: "BTD",
    },
    {
      id: 3,
      examName: "OKUBEG",
    },
    {
      id: 4,
      examName: "FENBEG",
    },
  ];
  const [exams, setExams] = useState(dummyExams);
  const [selectedExam, setSelectedExam] = useState([]);

  const dummyEvaluators = [
    {
      id: 1,
      name: "Değerlendirici 1",
    },
    {
      id: 2,
      name: "Değerlendirici 2",
    },
    {
      id: 3,
      name: "Değerlendirici 3 ",
    },
    {
      id: 4,
      name: "Değerlendirici 4",
    },
    {
      id: 5,
      name: "Değerlendirici 5",
    },
    {
      id: 6,
      name: "Değerlendirici 6",
    },
    {
      id: 7,
      name: "Değerlendirici 7",
    },
    {
      id: 8,
      name: "Değerlendirici 8",
    },
  ];
  const [evaluators, setEvaluators] = useState(dummyEvaluators);
  const [selectedEvaluator, setSelectedEvaluator] = useState([]);

  const selectClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const assignEvaluator = () => {
    const selectedEvaluatorIds = selectedEvaluator.map(
      (evaluator) => evaluator.id
    );

    setData((prevData) => {
      const updatedData = prevData.map((item) => {
        if (selected.map((e) => e.id).includes(item.id)) {
          return {
            ...item,
            evaluatorId: selectedEvaluatorIds,
            evaluatorName: selectedEvaluator
              .map((evaluator) => evaluator.name)
              .join(),
            evaluationDate: new Date().toLocaleString("tr-TR"),

          };
        }
        return item;
      });
      return updatedData;
    });

    setSelectAll(false);
    setSelected([]);
  };

  const onSelectAllClick = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      setSelected(data);
    } else {
      setSelected([]);
    }
  };

  useEffect(() => {
    setData([]);
    setTimeout(() => {
      setData(dummyData);
      setSelected([]);
    }, 400);
  }, [selectedExam]);


  return (
    <div>
      <Grid
        container
        justifyContent="space-between"
        spacing={70}
        style={{ padding: 15 }}
      >
        <Grid item xs={12} sm={7}>
          <FormControl fullWidth>
            <InputLabel id="exam">Sınav</InputLabel>
            <Select
              size="small"
              labelId="exam"
              value={selectedExam}
              label="Exam"
              onChange={(e) => setSelectedExam(e.target.value)}
            >
              {exams.map((exam) => (
                <MenuItem key={exam.id} value={exam.id}>
                  {exam.examName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  onChange={onSelectAllClick}
                  checked={selectAll}
                  inputProps={{
                    "aria-label": "select all desserts",
                  }}
                />
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins", fontWeight: 600 }}>
                Soru ID'leri:
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins", fontWeight: 600 }}>
                Değerlendirici Adı & Durumu{" "}
              </TableCell>
              <TableCell style={{ fontFamily: "Poppins", fontWeight: 600 }}>
                Atama Tarihi
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              const isSelected = selected.map((e) => e.id).includes(row.id);
              return (
                <TableRow key={row.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isSelected}
                      onClick={(event) => selectClick(event, row)}
                    />
                  </TableCell>
                  <TableCell>{row.questionName}</TableCell>
                  <TableCell>{row.evaluatorName}</TableCell>
                  <TableCell>{row.evaluationDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {selected.length !== 0 ? (
        <Grid
          container
          style={{ padding: 20, display: "flex", justifyContent: "flex-end" }}
          
        >
          <Grid item xs={6}  style={{ paddingRight: 20 }}>
            <FormControl fullWidth disabled={selected.length === 0}>
              <InputLabel id="evaluator"></InputLabel>
              <Autocomplete
                size="small"
                id="tags-standard"
                options={evaluators}
                multiple
                getOptionLabel={(option) => option.name}
                value={selectedEvaluator}
                onChange={(_, newValue) => setSelectedEvaluator(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="Değerlendirici" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Button 
              disabled={selectedEvaluator.length == 0}
              onClick={assignEvaluator}
              variant="contained"
            >
              Atama Yap
            </Button>
          </Grid>
        </Grid>
      ) : (
        []
      )}
    </div>
  );
};

export default Assignments;
