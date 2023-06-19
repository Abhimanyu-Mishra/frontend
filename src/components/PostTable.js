import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { detail } from './Data';

const PostTable = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);
  const [sortedColumn, setSortedColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedPosts = posts.sort((a, b) => {
    const valueA = a[sortedColumn];
    const valueB = b[sortedColumn];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
      return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
    }
  });

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.body.toLowerCase().includes(searchTerm)
    );
    setPosts(filteredPosts);
  };

  const transferdata = (dt)=>{
    detail.push(dt)
    navigate('/postdetails');
    

  }

  return (
    <div>
      <input className='input-box' type="text" placeholder="Search" onChange={handleSearch} />

      <table border={1}>
        
          <tr>
            <th onClick={() => handleSort('id')}>ID</th>
            <th onClick={() => handleSort('title')}>Title</th>
            <th onClick={() => handleSort('body')}>Body</th>
            <th onClick={() => handleSort('userId')}>User ID</th>
          </tr>
       
        
          {sortedPosts && sortedPosts.map(post => (
            <tr key={post.id} onClick={()=>transferdata(post)}>
            
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.userId}</td>
             
            </tr>
          ))}
        
      </table>
    </div>
  );
};

export default PostTable;
