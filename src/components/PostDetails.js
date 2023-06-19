

import React from 'react';
import { detail } from './Data';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PostDetails = () => {
  const navigate = useNavigate();

  return (
    <div>

    <div className='back' onClick={()=>{navigate('/posttable')}}><span><ArrowBackIcon/></span><span>Back</span></div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>

          <tr key={detail[detail.length - 1].id}>
            <td>{detail[detail.length - 1].id}</td>
            <td>{detail[detail.length - 1].title}</td>
            <td>{detail[detail.length - 1].body}</td>
            <td>{detail[detail.length - 1].userId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostDetails;

