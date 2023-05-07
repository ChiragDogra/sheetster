
import { Tabs, Typography } from '@arco-design/web-react';
import QuizIcon from '@mui/icons-material/Quiz';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuestionForm from './QuestionForm';
const TabPane = Tabs.TabPane;
const style = {
  textAlign: 'center',
  marginTop: 20,
};

const FormTabs = () => {
  return (
    <Tabs defaultActiveTab='1' className="justify-between">
      <TabPane
        key='1'
        title={
          <span>
            <QuizIcon style={{ marginRight: 6 }} />
            Questions
          </span>
        }
      >
              <QuestionForm/>

      </TabPane>
      <TabPane
        key='2'
        title={
          <span>
            <QuestionAnswerIcon style={{ marginRight: 6 }} />
            Response
          </span>
        }

      >
        <Typography.Paragraph style={style}>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      
    </Tabs>
  );
};

export default FormTabs;