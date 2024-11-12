import {OpenAIOutlined} from '@ant-design/icons';
import "./Sidebar.scss";


const Sidebar : React.FC = () => {


  return (
    <div className='sidebar'>
      <div className='new'>
      <OpenAIOutlined style={{ fontSize: '18px', marginRight:'5px' }}/>
        Start a new chat
      </div>
    </div>
  );
}

export default Sidebar;