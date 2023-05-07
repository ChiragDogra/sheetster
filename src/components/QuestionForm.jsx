import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import AccordionDetails from '@mui/material/AccordionDetails';
import {Radio }from '@mui/icons-material';
import { MenuItem, Select } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SubjectIcon from '@mui/icons-material/Subject';
import ShortTextIcon from '@mui/icons-material/ShortText';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { IconButton } from "@mui/material";


function QuestionForm() {
  const [questions, setQuestions] = useState([
    {
      questionText: "Where is Tajmahal Located?",
      questionType: "radio",
      options: [
        { optionText: "Gurgaon" },
        { optionText: "Bengaluru" },
        { optionText: "Agara" },
        { optionText: "Delhi" },
      ],
      open: true,
      required: false,
    },
    {
      questionText: "Where is Qutub Minar",
      questionType: "radio",
      options: [
        { optionText: "Delhi " },
        { optionText: "Bengaluru" },
        { optionText: "Gurgaon" },
        { optionText: "Bhatinda" },
      ],
      open: true,
      required: false,
    },
  ]);

  function questionsUI() {
    return questions.map((ques, i) => {
      return (
        <Accordion
          expanded={questions[i].open}
          className={questions[i].open ? "" : " "}
          key={i}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            elevation={1}
            style={{ width: "100%" }}
          >
            {questions[i].open ? (
              <div className="savedQuestions">
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: ".1px",
                    lineHeight: "24px",
                    paddingBottom: "8px",
                  }}
                >
                  {i + 1}. {questions[i].questionText}
                </Typography>

                {ques.options.map((op, j) => {
                  return (
                    <div key={j}>
                      <div style={{ display: "flex" }}>
                        <FormControlLabel
                          style={{ marginLeft: "5px", marginBottom: "5px" }}
                          control={
                            <input
                              type={ques.questionType}
                              color="primary"
                              style={{ marginRight: "3px" }}
                              required={ques.required}
                            />
                          }
                          label={
                            <Typography
                              style={{
                                fontFamily: "Roboto, Arial, sans-serif",
                              }}
                            >
                              {ques.options[j].optionText}
                            </Typography>
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div></div>
            )}
          </AccordionSummary>
          <div className="flex flex-row justify-center">
            <AccordionDetails className="bg-white rounded-md px-6 py-4 capitalize flex flex-col w-11/12 ml-5">
              <div className="flex flex-row items-center justify-between">
                {/* <input type="text" className="box-border mt-5 font-sans text-base font-medium flex-1 leading-10 w-2/5 mr-3 p-5" placeholder="Question" value={ques.questionText}  /> */}
                <CropOriginalIcon style={{}} />
                <Select className="Select">
                  <MenuItem  id="text" value="text"><SubjectIcon style={{marginRight: "10px"}}/> Paragraph</MenuItem>
                  <MenuItem  id="text" value="text"><CheckBoxIcon style={{marginRight: "10px"}}/> CheckBox</MenuItem>
                  <MenuItem  id="text" value="text"><RadioButtonCheckedIcon style={{marginRight: "10px"}}/> Multiple Choice</MenuItem>
                </Select>
              </div>
              {ques.options.map((op, j)=>{
                <div className="flex items-center" key={j}>
                  {
                    (ques.questionType!="text")? 
                    <input type={ques.questionType} style = {{marginRight: "10px"}}/> :
                    <ShortTextIcon style={{marginRight: "10px"}}/>
                  }
                  <div>
                    <input type="text" className = "h-10 w-96 font-mono font-semibold text-xl tracking-wide " placeholder="option" value={ques.options[j].optionText} />
                  </div>

                  <CropOriginalIcon/>
                  <IconButton>
                    <CloseIcon/>
                  </IconButton>
                </div>
              })}
            </AccordionDetails>
          </div>
        </Accordion>
        
      );
    });
  }

  return (
    <div>
      <div className="h-full pb-5 bg-purple-50">
        <br />
        <div className="m-auto w-1/2 ">
          <div className="Question Title section">
            <div className="bg-white border-t-8 border-purple-800 rounded-md px-9 py-7 capitalize">
              <input
                type="text"
                className="box-border font-sans text-xl font-bold w-full text-black h-8 leading-10 "
                placeholder="Untitled Document"
              />
              <input
                type="text"
                className="box-border mt-2 font-sans text-base font-bold leading-10 w-full border-b-1 border-blue-400 text-black h-8"
                placeholder="Document Description"
              />
            </div>
          </div>
          {questionsUI()}
        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
