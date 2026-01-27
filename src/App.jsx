import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import clsx from 'clsx';
import useLocalStorageState from 'use-local-storage-state';

//いいねボタン
export const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const onClickLike = () => {
    setLikeCount((prev) => prev + 1);
  };
  const onClickReset = () => {
    setLikeCount(0);
  };

  const styleLikeCount = clsx('text-4xl font-bold', {
    'text-primary-content': likeCount % 2 === 0,
    'text-base-content': likeCount % 2 !== 0,
  });

  return (
    <>
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body gap-4">
          <div className="flex items-center justify-between">
            <h2 className="card-title">いいねボタン</h2>
            <span className="badge badge-primary badge-outline">Like</span>
          </div>
          <p className="text-sm text-base-content/60">
            クリック回数が偶数のときは色が変わります。
          </p>
          {likeCount >= 10 && (
            <div className="alert alert-error py-2">
              <span className="text-sm font-bold">押しすぎ！</span>
            </div>
          )}
          <div className="flex items-end justify-between">
            <div className={styleLikeCount}>{likeCount}</div>
            <div className="text-xs text-base-content/60">現在のカウント</div>
          </div>
          <div className="join">
            <button className="btn btn-primary join-item" onClick={onClickLike}>
              いいね
            </button>
            <button
              className="btn btn-neutral btn-soft join-item"
              onClick={onClickReset}
            >
              リセット
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

//運試しボタン
export const FortuneButton = () => {
  const [result, setResult] = useState(null);
  const fortunes = [
    { label: '大吉', emoji: '🎉', className: 'bg-success text-success-content' },
    { label: '中吉', emoji: '🙂', className: 'bg-info text-info-content' },
    { label: '凶', emoji: '💀', className: 'bg-error text-error-content' },
  ];
  const fortune = result !== null ? fortunes[result] : null;

  const onClickResult = () => {
    setResult(Math.floor(Math.random() * 3));
  };

  return (
    <>
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body gap-4">
          <div className="flex items-center justify-between">
            <h2 className="card-title">運試しボタン</h2>
            <span className="badge badge-ghost">今日の運勢</span>
          </div>
          <p className="text-sm text-base-content/60">
            ボタンを押すたびに結果が変わります。
          </p>
          <button className="btn btn-primary w-fit" onClick={onClickResult}>
            運試しする
          </button>
          {fortune && (
            <div
              className={clsx(
                'rounded-box px-3 py-2 text-center text-lg font-bold',
                fortune.className
              )}
            >
              {fortune.label} {fortune.emoji}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

//クイズ
export const Quiz = () => {
  const [result, setResult] = useState(null);

  const clickCorrect = () => {
    setResult(true);
  };

  const clickInCorrect = () => {
    setResult(false);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body gap-4">
          <div className="flex items-center justify-between">
            <h2 className="card-title">クイズ</h2>
            <span className="badge badge-outline">1問</span>
          </div>
          <p className="text-sm text-base-content/60">
            Q. 日本で一番高い山は？
          </p>
          <div className="join">
            <button className="btn btn-soft join-item" onClick={clickCorrect}>
              富士山
            </button>
            <button className="btn btn-soft join-item" onClick={clickInCorrect}>
              北岳
            </button>
          </div>
          {result === true && (
            <div className="alert alert-success py-2">
              <span className="font-bold">正解！</span>
            </div>
          )}
          {result === false && (
            <div className="alert alert-error py-2">
              <span className="font-bold">不正解！</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

//色チェンジ
export const ColorChange = () => {
  const [bgStatus, setBgStatus] = useState(null);
  const colorLabels = ['プライマリ', 'セカンダリ', 'アクセント'];
  const currentLabel = bgStatus === null ? '未選択' : colorLabels[bgStatus];
  return (
    <>
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body gap-4">
          <div className="flex items-center justify-between">
            <h2 className="card-title">色チェンジ</h2>
            <span className="badge badge-outline">テーマ</span>
          </div>
          <p className="text-sm text-base-content/60">
            ボタンで円の色を切り替えます。
          </p>
          <div className="flex items-center gap-4">
            <div
              className={clsx(
                'circle rounded-full w-16 h-16 border-2 border-dashed',
                bgStatus === 0 && 'bg-primary border-primary',
                bgStatus === 1 && 'bg-secondary border-secondary',
                bgStatus === 2 && 'bg-accent border-accent',
                bgStatus === null && 'border-neutral'
              )}
            ></div>
            <div className="text-sm text-base-content/60">
              選択中: <span className="font-medium">{currentLabel}</span>
            </div>
          </div>
          <div className="join">
            <button
              onClick={() => setBgStatus(0)}
              className="btn btn-primary join-item"
            >
              1
            </button>
            <button
              onClick={() => setBgStatus(1)}
              className="btn btn-secondary join-item"
            >
              2
            </button>
            <button
              onClick={() => setBgStatus(2)}
              className="btn btn-accent join-item"
            >
              3
            </button>
            <button
              onClick={() => setBgStatus(null)}
              className="btn btn-neutral btn-soft join-item"
            >
              リセット
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

//キャラ生成ガチャ
export const CharaGacha = () => {
  const characters = [
    { name: '勇者', rarity: 'SSR' },
    { name: '魔法使い', rarity: 'SR' },
    { name: '戦士', rarity: 'SR' },
    { name: '盗賊', rarity: 'R' },
    { name: '僧侶', rarity: 'R' },
  ];

  const [index, setIndex] = useState(null);
  const character = index !== null ? characters[index] : null;

  const clickGacha = () => {
    setIndex(Math.floor(Math.random() * characters.length));
  };

  const rarityClass = {
    SSR: 'badge-secondary',
    SR: 'badge-accent',
    R: 'badge-ghost',
  };

  return (
    <>
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body gap-4">
          <div className="flex items-center justify-between">
            <h2 className="card-title">キャラ生成ガチャ</h2>
            <span className="badge badge-outline">{characters.length}種</span>
          </div>
          <p className="text-sm text-base-content/60">
            ランダムでキャラを生成します。
          </p>
          <button onClick={clickGacha} className="btn btn-soft w-fit">
            🌀ガチャを回す
          </button>
          {character && (
            <div className="flex items-center justify-between rounded-box border border-base-300 bg-base-200 px-3 py-2">
              <div>
                <p className="text-lg font-bold">{character.name}</p>
                <p className="text-xs text-base-content/60">レア度</p>
              </div>
              <span className={clsx('badge badge-lg', rarityClass[character.rarity])}>
                {character.rarity}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

//メモ帳
export const MemoPad = () => {
  const [text, setText] = useState('');
  const [memos, setMemos] = useLocalStorageState('memos', []);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const safeArray = (v) => (Array.isArray(v) ? v : []);
  const memoList = safeArray(memos);

  const addMemo = () => {
    if (!text) return;
    setMemos((prev) => {
      const p = safeArray(prev);
      return [
        ...p,
        {
          id: Date.now(),
          text,
          createdAt: new Date().toISOString(),
        },
      ];
    });
    setText('');
  };

  const startEdit = (memo) => {
    setEditingId(memo.id);
    setEditingText(memo.text);
  };

  const saveEdit = () => {
    setMemos((prev) =>
      safeArray(prev).map((memo) =>
        memo.id === editingId ? { ...memo, text: editingText } : memo
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  const onClickDelete = (deleteId) => {
    //(deleteId) 👉 onClickDeleteを実行する時に引数に入っていたもの
    //setMemos() 👉 stateを更新する
    //prev 👉 今この瞬間のメモ配列
    //filter() 👉 条件に合うものだけ残す
    //(memo) => memo.id !== deleteId 👉 1個ずつメモを見る・deleteIdと一致しないidのmemoだけ残す
    setMemos((prev) =>
      safeArray(prev).filter((memo) => memo.id !== deleteId)
    );

  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP');
  };

  return (
    <>
      <div className="card bg-base-100 shadow-md border border-base-300">
        <div className="card-body gap-4">
          <div className="flex items-center justify-between">
            <h2 className="card-title">メモ帳</h2>
            <span className="badge badge-outline">ローカル保存</span>
          </div>
          <p className="text-sm text-base-content/60">
            Enterで追加。編集時はEnterで保存します。
          </p>
          <div className="join w-full">
            <label className="input input-bordered join-item flex items-center gap-2 focus-within:outline-0 focus-within:border-neutral w-full">
              <div>📝</div>
              <input
                className="bg-transparent outline-none flex-1"
                type="text"
                inputMode="text"
                autoComplete="off"
                placeholder="メモを入力"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    addMemo();
                  }
                }}
              />
            </label>
            <button onClick={addMemo} className="btn btn-neutral join-item">
              <FaPlus className="w-3 h-3" />
            </button>
          </div>

          {memoList.length === 0 ? (
            <div className="text-sm text-base-content/60">
              まだメモがありません。
            </div>
          ) : (
            <ul className="list bg-base-200/40 rounded-box border border-base-300">
              {
                //memos という配列の中身を、先頭から1つずつ取り出して、それぞれを memo と呼び、
                //それを使って新しい要素を作る
              }
              {memoList.map((memo) => (
                <li
                  key={memo.id}
                  className="list-row items-start grid-cols-[auto_1fr_auto] gap-3"
                >
                  <div className="text-gray-400">
                    {formatDate(memo.createdAt)}
                  </div>

                  {/* 編集中かどうかで表示を切り替える */}
                  {editingId === memo.id ? (
                    <textarea
                      className="textarea textarea-bordered w-full rounded-md p-2 focus:outline-0 focus:border-neutral"
                      value={editingText}
                      autoFocus
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault(); // 改行を防ぐ
                          saveEdit();
                        }
                      }}
                    />
                  ) : (
                    <div
                      className="cursor-pointer"
                      onClick={() => startEdit(memo)}
                    >
                      {memo.text}
                    </div>
                  )}

                  <button
                    className="btn btn-ghost btn-xs text-error"
                    onClick={() => onClickDelete(memo.id)}
                  >
                    <FaXmark />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

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
          <span className="badge badge-primary badge-outline">DaisyUI</span>
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
              <span className="badge badge-ghost">{menuItems.length}個</span>
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
                    <span className="text-xs text-base-content/60">
                      {item.description}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold">{activeItem.label}</h2>
            <span className="badge badge-primary badge-outline">選択中</span>
          </div>
          <p className="text-sm text-base-content/60">
            {activeItem.description}
          </p>
          <div>
            {menuItems.map((item) => {
              const Component = item.component;
              return (
                <div
                  key={item.id}
                  className={clsx(activeId === item.id ? 'block' : 'hidden')}
                >
                  <Component />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
