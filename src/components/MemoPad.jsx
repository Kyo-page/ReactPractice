import { useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { FaPlus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';


export const MemoPad = ({ label }) => {
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
                        <h2 className="card-title">{label}</h2>
                        {/* <span className="badge badge-primary badge-outline">React</span> */}
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