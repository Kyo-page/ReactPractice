import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import {
  LikeButton,
  FortuneButton,
  Quiz,
  ColorChange,
  CharaGacha,
  MemoPad,
} from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="p-5">
      <h1 className="text-2xl font-bold pb-4">React課題</h1>
      <LikeButton />
      <FortuneButton />
      <Quiz />
      <ColorChange />
      <CharaGacha />
      <MemoPad />
    </div>
  </StrictMode>
);
