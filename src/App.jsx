import { useState } from 'react';
import clsx from 'clsx';
import { LikeButton } from './components/LikeButton';
import { FortuneButton } from './components/FortuneButton';
import { Quiz } from './components/Quiz';
import { ColorChange } from './components/ColorChange';
import { CharaGacha } from './components/CharaGacha';
import { MemoPad } from './components/MemoPad';
import { Practice } from './components/Practice';
import { ShoppingList } from './components/ShoppingList/ShoppingList';
import { Timer } from './components/Timer';
import { DarkModeToggle } from './components/DarkModeToggle';
import { UserList } from './components/UserList';
import { RandomCats } from './components/RandomCats';

const menuItems = [
  {
    id: 'like',
    label: 'いいねボタン',
    description: 'クリックでカウント',
    component: LikeButton,
  },
  {
    id: 'fortune',
    label: '運試しボタン',
    description: '今日の運勢を引く',
    component: FortuneButton,
  },
  {
    id: 'quiz',
    label: 'クイズ',
    description: '2択クイズ',
    component: Quiz,
  },
  {
    id: 'color',
    label: '色チェンジ',
    description: 'テーマカラー切替',
    component: ColorChange,
  },
  {
    id: 'gacha',
    label: 'キャラ生成ガチャ',
    description: 'ランダムでキャラ生成',
    component: CharaGacha,
  },
  {
    id: 'memo',
    label: 'メモ帳',
    description: 'ローカル保存',
    component: MemoPad,
  },
  {
    id: 'practice',
    label: '練習課題',
    description: '初心者向け練習課題',
    component: Practice,
  },
  {
    id: 'shopping',
    label: '買い物リスト',
    description: 'カテゴリごとに表示・管理',
    component: ShoppingList,
  },
  {
    id: 'timer',
    label: 'タイマー',
    description: 'カウントアップタイマー',
    component: Timer,
  },
  {
    id: 'dark-mode',
    label: 'ダークモード切替',
    description: 'ダークモードとライトモードを切り替える',
    component: DarkModeToggle,
  },
  {
    id: 'user-list',
    label: 'ユーザーリスト',
    description: 'APIからユーザーリストを取得して表示する',
    component: UserList,
  },
  {
    id: 'random-cats',
    label: 'ランダム猫ビューアー',
    description: 'APIからランダムで猫を取得して表示する',
    component: RandomCats,
  },
];

export default function App() {
  const [activeId, setActiveId] = useState(menuItems[0].id);
  const activeItem =
    menuItems.find((item) => item.id === activeId) ?? menuItems[0];

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-base-100/80 backdrop-blur border-b border-base-300 sticky top-0 z-10">
        <div className="flex-1 gap-2">
          <span className="text-xl font-bold">React課題</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-base-content/60">
          <span className="badge badge-ghost">
            {menuItems.length}カード
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6 grid gap-6 md:grid-cols-[260px_1fr]">
        <aside className="card bg-base-100 shadow-sm border border-base-300 h-fit">
          <div className="card-body p-4 gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">メニュー</h2>
              {/* <span className="badge badge-ghost">{menuItems.length}個</span> */}
            </div>
            <p className="text-xs text-base-content/60">
              表示したいカードを選択してください。
            </p>
            <ul className="menu menu-md p-0">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-pressed={activeId === item.id}
                    onClick={() => setActiveId(item.id)}
                    className={clsx(
                      'flex w-full flex-col items-start gap-1 rounded-box',
                      activeId === item.id && 'active'
                    )}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs text-base-content/60 text-wrap">
                      {item.description}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="space-y-4">
          <div>
            {menuItems.map((item) => {
              const Component = item.component;
              return (
                <div
                  key={item.id}
                  className={clsx(activeId === item.id ? 'block' : 'hidden')}
                >
                  <Component label={item.label} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
