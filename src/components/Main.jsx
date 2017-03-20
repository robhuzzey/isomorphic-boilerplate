import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
    </ul>
    <h1>This is a React Isomorphic Boilerplate</h1>
    <p><Link to="/about">Read more...</Link></p>
  </div>
)
