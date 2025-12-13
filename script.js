const taskInput = document.getElementById("taskInput")//input要素全体を取得(一度だけ)
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

/*--- 追加ボタンが押された時の処理 ---*/
addBtn.addEventListener('click', function() {
    const taskText = taskInput.value//入力された値を取得

    if (taskText.trim() === '') {
        alert('入力されていません')
        return;//関数終了
    }

    //span要素とBtn要素を入れる箱を作成→最終的にulの中へ(ulは商品棚)
    const li = document.createElement('li')
    
    //タスク用のspan要素を作成してtextContentプロパティを指定(文字列のみ)
    const span = document.createElement('span')
    span.textContent = taskText;

    //削除ボタン用のBtn要素を作成してtextContentプロセスを指定(文字列のみ)
    const Btn = document.createElement('button')//行単位でボタンを作るためli
    Btn.textContent = '削除';

    //li箱に要素を追加
    li.appendChild(span);
    li.appendChild(Btn);

    //taskListにli要素たちを追加
    taskList.appendChild(li);


    console.log(taskList);

    //タスクを追加した後の入力欄クリア処理
    taskInput.value = '';
});

/* --- 削除ボタンが押された時の処理 --- */










                                        