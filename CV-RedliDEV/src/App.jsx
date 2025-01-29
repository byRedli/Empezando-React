import React, { useState } from 'react';
import {Sidebar} from './components/Sidebar.jsx';
import {Content} from './components/Content.jsx';
import './App.css';

export function App () {
  return (
    <div className="app">
      <Sidebar/>
      <Content/>
    </div>
  );
};

