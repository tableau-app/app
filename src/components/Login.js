import React from 'react';
import { Link } from 'react-router-dom';
import OAuth from './OAuth';
import Auth from './Auth';


export const Login = () => (
  <div>
    <div>
      <OAuth/>
    </div>
    <div>
      <Auth/>
    </div>
  </div>
);