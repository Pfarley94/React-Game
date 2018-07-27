import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import characterCard from "./components/characterCard";
import navbar from "./components/navbar";
import wrapper from "./components/wrapper";

function randomizeCharacters(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.roof(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};



export default App;
