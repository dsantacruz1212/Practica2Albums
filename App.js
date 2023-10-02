
import React from 'react';
import { useState } from 'react';
import { Header, MusicUDB } from './src/components';

export default function App() {
  const [activeAlbum, setActiveAlbum] = useState(null)
  return (
    <Header component={MusicUDB} activeAlbum setActiveAlbum />
  );
}
