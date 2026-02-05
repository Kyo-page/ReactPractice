import React, { useState } from "react";
import { Card } from "./Card";

export const Practice = () => {
    return (
        <>
            <div className="space-y-4">
                <Card title="第1問：ハロー・ワールド（Propsの基本）">
                    <p>Greetingという名前のコンポーネントを作成してください。</p>
                    <ul className="list-disc list-inside">
                        <li>nameというプロパティ（Props）を受け取ります。</li>
                        <li>画面に「こんにちは、[name]さん！」と表示してください。</li>
                    </ul>
                    <div className="bg-base-200 p-4 rounded-box">
                        <Greeting name="太郎" />
                    </div>
                </Card>

                <Card title="第2問：カウンター（useStateの基本）">
                    <p>ボタンをクリックすると、数字が1ずつ増えるコンポーネントを作成してください。</p>
                    <ul className="list-disc list-inside">
                        <li>初期値は 0 です。</li>
                        <li>「+1」ボタンを配置してください。</li>
                    </ul>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <Counter />
                    </div>
                </Card>

                <Card title="第3問：入力の同期（Controlled Component）">
                    <p>
                        入力フォーム（input）に入力した文字が、リアルタイムで下の p
                        タグに反映されるコンポーネントを作成してください。
                    </p>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <Input />
                    </div>
                </Card>

                <Card title="第4問：表示・非表示の切り替え（条件付きレンダリング）">
                    <p>
                        「表示/非表示」ボタンを作成し、クリックするたびに特定のテキストの出現・消失を切り替えてください。
                    </p>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <Switch />
                    </div>
                </Card>

                <Card title="第5問：背景色チェンジャー（スタイルの動的変更）">
                    <p>
                        ボタンを3つ（赤、青、緑）用意します。クリックしたボタンの色に合わせて、div
                        の背景色が変化するようにしてください。
                    </p>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <ColorChanger />
                    </div>
                </Card>

                <Card title="第6問：TODOリストの基礎（配列の表示）">
                    <p>
                        文字列の配列 ['Reactを学ぶ', '買い物に行く', '掃除をする'] を、map 関数を使って ul
                        リストとして表示してください。
                    </p>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <Todo />
                    </div>
                </Card>

                <Card title="第7問：いいねボタン（色のトグル）">
                    <p>
                        「❤ いいね」ボタンを作成してください。
                        <br />
                        クリックすると、ボタンのテキスト色が「黒」から「赤」に切り替わるようにしてください。
                    </p>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <LikeButton />
                    </div>
                </Card>

                <Card title="第8問：フォームの送信（preventDefault）">
                    <p>
                        入力フォームと送信ボタンを作成してください。
                        <br />
                        送信ボタンを押したときに、ページをリロードさせず、アラートで「[入力した内容]を送信しました」と表示させてください。
                    </p>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <Form />
                    </div>
                </Card>

                <Card title="第9問：残り文字数カウント">
                    <p>10文字以内の入力フォームを作成してください。</p>
                    <ul className="list-disc list-inside">
                        <li>入力するたびに「残り[x]文字」と表示します。</li>
                        <li>10文字を超えたら、文字色を「赤」にしてください。</li>
                    </ul>

                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <Count />
                    </div>
                </Card>

                <Card title="第10問：簡易計算機（数値の扱い）">
                    <p>
                        2つの数値入力欄（input type="number"）と、その合計値を表示するコンポーネントを作成してください。
                    </p>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <Calculator />
                    </div>
                </Card>

                <Card title="第11問：動的なリスト削除">
                    <ul className="list-disc list-inside">
                        <li>['Reactを学ぶ', '買い物に行く', '掃除をする'] を初期状態（State）として表示します。</li>
                        <li>各項目の横に 「削除」ボタン を配置してください。</li>
                        <li>ボタンをクリックすると、その項目だけがリストから消えるようにしてください。</li>
                    </ul>
                    <div className="bg-base-200 p-4 rounded-box space-y-2">
                        <Todo2 />
                    </div>
                </Card>
            </div>
        </>
    );
};

interface GreetingProps {
    name: string;
}

const Greeting = ({ name }: GreetingProps) => {
    return <p>こんにちは、{name}さん！</p>;
};

const Counter = () => {
    const [count, setCount] = useState(0);

    const onClickIncrement = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <>
            <div className="num">{count}</div>
            <button className="btn btn-primary" onClick={onClickIncrement}>
                +1
            </button>
        </>
    );
};

const Input = () => {
    const [text, setText] = useState("");

    return (
        <>
            <div className="space-y-2">
                <input type="text" className="input" onChange={(e) => setText(e.target.value)} value={text} />
                <p>{text}</p>
            </div>
        </>
    );
};

const Switch = () => {
    const [display, setDisplay] = useState(true);

    const onClickDisplay = () => {
        setDisplay((prev) => !prev);
    };

    return (
        <>
            <div className="space-y-4">
                <div className="h-4">{display === true ? <span>このテキストが出たり消えたり</span> : ""}</div>
                <button className="btn btn-primary" onClick={onClickDisplay}>
                    表示 / 非表示
                </button>
            </div>
        </>
    );
};

const ColorChanger = () => {
    const [color, setColor] = useState("bg-red-200");

    return (
        <>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <button
                        onClick={() => setColor("bg-red-200")}
                        className="w-8 h-8 rounded-full bg-red-500 cursor-pointer hover:opacity-70 transition"
                    ></button>
                    <button
                        onClick={() => setColor("bg-blue-200")}
                        className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer hover:opacity-70 transition"
                    ></button>
                    <button
                        onClick={() => setColor("bg-green-200")}
                        className="w-8 h-8 rounded-full bg-green-500 cursor-pointer hover:opacity-70 transition"
                    ></button>
                </div>
                <div className={`${color} p-4 rounded`}>ここの背景色が変わります</div>
            </div>
        </>
    );
};

interface listItem {
    id: number;
    title: string;
}

const Todo = () => {
    const list: listItem[] = [
        {
            id: 1,
            title: "Reactを学ぶ",
        },
        {
            id: 2,
            title: "買い物に行く",
        },
        {
            id: 3,
            title: "掃除をする",
        },
    ];

    return (
        <>
            <ul className="list-disc list-inside pl-4">
                {list.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </>
    );
};

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const btnClick = () => {
        setLiked(true);
    };

    const btnColor = liked ? "text-red-500" : "";

    return (
        <>
            <button onClick={btnClick} className={`btn bg-white ${btnColor}`}>
                ❤️ いいね
            </button>
        </>
    );
};

const Form = () => {
    const [text, setText] = useState("");

    const sendBtnClick = () => {
        text && alert(`${text}を送信しました`);
    };

    return (
        <>
            <div className="flex gap-4">
                <input type="text" className="input" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={sendBtnClick} className="btn btn-primary">
                    送信
                </button>
            </div>
        </>
    );
};

const Count = () => {
    const [text, setText] = useState("");
    const textCount = 10 - text.length;
    return (
        <>
            <input className="input" type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p className={textCount <= 0 ? "text-red-500" : ""}>残り{textCount}文字</p>
        </>
    );
};

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const result = num1 + num2;

    return (
        <>
            <div className="flex gap-4 items-center max-w-20">
                <input
                    className="input validator"
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(Number(e.target.value))}
                />
                <div className="text-lg">＋</div>
                <input
                    className="input validator"
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(Number(e.target.value))}
                />
                <div className="text-lg">＝</div>
                <div className="text-lg">{result}</div>
            </div>
        </>
    );
};

const Todo2 = () => {
    const list: listItem[] = [
        {
            id: 1,
            title: "Reactを学ぶ",
        },
        {
            id: 2,
            title: "買い物に行く",
        },
        {
            id: 3,
            title: "掃除をする",
        },
    ];

    const [todosList, setTodosList] = useState(list);

    const clickDelete = (id: listItem["id"]) => {
        setTodosList((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <ul className="space-y-2">
            {todosList.map(({ id, title }) => (
                <li key={id} className="bg-white rounded p-4 flex items-center justify-between gap-4">
                    <span>{title}</span>
                    <button onClick={() => clickDelete(id)} className="btn bg-base-300 px-2 cursor-pointer">
                        削除
                    </button>
                </li>
            ))}
        </ul>
    );
};
