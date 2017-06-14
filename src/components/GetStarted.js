import React from 'react';
import { Link } from 'react-router-dom';
import OAuth from './OAuth';

export const GetStarted = () => (
  <div>
    <Link to="/auth/signin">Sign in</Link>
    {' or '} 
    <Link to="/auth/signup">Sign up</Link>
    {' to get started.'}
    <OAuth/>
  </div>
);