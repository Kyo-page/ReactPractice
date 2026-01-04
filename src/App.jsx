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

  const styleLikeCount = clsx('text-xl font-bold', {
    'text-primary-content': likeCount % 2 === 0,
  });

  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-primary-content">いいねボタン</h2>
          {likeCount >= 10 && (
            <div className="text-base font-bold text-error-content bg-error p-1">
              押しすぎ！
            </div>
          )}
          <div className={styleLikeCount}>{likeCount}</div>
          <button className="btn btn-primary" onClick={onClickLike}>
            いいね
          </button>
          <button className="btn btn-neutral btn-soft" onClick={onClickReset}>
            リセット
          </button>
        </div>
      </div>
    </>
  );
};

//運試しボタン
export const FortuneButton = () => {
  const [result, setResult] = useState(null);

  const onClickResult = () => {
    setResult(Math.floor(Math.random() * 3));
  };

  return (
    <>
      <div className="card bg-base-100 shadow-sm my-5">
        <div className="card-body">
          <h2 className="card-title text-primary-content">運試しボタン</h2>
          <button className="btn btn-primary" onClick={onClickResult}>
            運試しする
          </button>
          {result === 0 && (
            <div className="bg-base-200 p-1 text-lg font-bold text-center">
              大吉 🎉
            </div>
          )}
          {result === 1 && (
            <div className="bg-base-200 p-1 text-lg font-bold text-center">
              中吉 🙂
            </div>
          )}
          {result === 2 && (
            <div className="bg-base-200 p-1 text-lg font-bold text-center">
              凶 💀
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
      <div className="card bg-base-100 shadow-sm my-5">
        <div className="card-body">
          <h2 className="card-title text-primary-content">クイズ</h2>
          <p>Q. 日本で一番高い山は？</p>
          <button className="btn btn-soft" onClick={clickCorrect}>
            富士山
          </button>
          <button className="btn btn-soft" onClick={clickInCorrect}>
            北岳
          </button>
          {result === true && (
            <p className="text-accent-content p-1 text-lg font-bold bg-accent text-center">
              正解！
            </p>
          )}
          {result === false && (
            <p className="text-error-content p-1 text-lg font-bold bg-error text-center">
              不正解！
            </p>
          )}
        </div>
      </div>
    </>
  );
};

//色チェンジ
export const ColorChange = () => {
  const [bgStatus, setBgStatus] = useState(null);
  return (
    <>
      <div className="card bg-base-100 shadow-sm my-5">
        <div className="card-body">
          <h2 className="card-title text-primary-content">色チェンジ</h2>
          <div
            className={clsx(
              'circle rounded-full w-16 h-16 border border-dashed',
              bgStatus === 0 && 'bg-primary border-primary',
              bgStatus === 1 && 'bg-secondary border-secondary',
              bgStatus === 2 && 'bg-accent border-accent',
              bgStatus === null && 'border-neutral'
            )}
          ></div>
          <button onClick={() => setBgStatus(0)} className="btn btn-primary">
            1
          </button>
          <button onClick={() => setBgStatus(1)} className="btn btn-secondary">
            2
          </button>
          <button onClick={() => setBgStatus(2)} className="btn btn-accent">
            3
          </button>
          <button
            onClick={() => setBgStatus(null)}
            className="btn btn-neutral btn-soft"
          >
            リセット
          </button>
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
    SSR: 'bg-secondary',
    SR: 'bg-accent',
    R: 'bg-base-300',
  };

  return (
    <>
      <div className="card bg-base-100 shadow-sm my-5">
        <div className="card-body">
          <h2 className="card-title text-primary-content">キャラ生成ガチャ</h2>
          <button onClick={clickGacha} className="btn btn-soft">
            🌀ガチャを回す
          </button>
          {character && (
            <div
              className={clsx(
                'p-2 text-center rounded',
                rarityClass[character.rarity]
              )}
            >
              <p className="text-lg font-bold">{character.name}</p>
              <p className="text-sm">レア度：{character.rarity}</p>
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

  const safeArray = (v) => (Array.isArray(v) ? v : []);


  return (
    <>
      <div className="card bg-base-100 shadow-sm my-5">
        <div className="card-body">
          <h2 className="card-title text-primary-content">メモ帳</h2>
          <div className="join">
            <div>
              <label className="input join-item flex items-center gap-2 focus-within:outline-0 focus-within:border-neutral">
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
            </div>
            <button onClick={addMemo} className="btn btn-neutral join-item">
              <FaPlus className="w-3 h-3" />
            </button>
          </div>

          <ul className="list bg-base-100 rounded-box shadow-md">
            {
              //memos という配列の中身を、先頭から1つずつ取り出して、それぞれを memo と呼び、
              //それを使って新しい要素を作る
            }
            {memos?.map((memo) => (
              <li
                key={memo.id}
                className="list-row items-start grid-cols-[auto_1fr_auto] gap-2"
              >
                <div className="text-gray-400">
                  {formatDate(memo.createdAt)}
                </div>

                {/* 編集中かどうかで表示を切り替える */}
                {editingId === memo.id ? (
                  <textarea
                    className="textarea rounded-md p-1 focus:outline-0 focus:border-neutral"
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

                <button className="h-5" onClick={() => onClickDelete(memo.id)}>
                  <FaXmark />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
