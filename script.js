const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearCompleted = document.getElementById("clearCompleted");

// ========== Enterキーでタスク追加 ==========
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {  
        addBtn.click();
    }
});

// ========== タスク追加処理 ==========
addBtn.addEventListener("click", function () {    
    const taskText = taskInput.value;

    // 空文字チェック
    if (taskText.trim() === "") {
        alert("入力されていません");
        return;
    }

    // ----- 1. 要素作成 -----
    const li = document.createElement("li");
    
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    
    const span = document.createElement("span");
    span.textContent = taskText;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    // ----- 2. イベント設定 -----
    // 完了チェック
    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            span.classList.add("completed");
        } else {
            span.classList.remove("completed");
        }
    });

    // 個別削除
    deleteBtn.addEventListener("click", function () {
        li.remove();
        taskCount.textContent = taskList.children.length;
    });

    // ----- 3. DOM追加 -----
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    
    // ----- 4. 後処理 -----
    taskCount.textContent = taskList.children.length;
    taskInput.value = "";
});

// ========== フィルター =========
const filterBtns = document.querySelectorAll('.filter-btn');

//filterBtnsたちに対してclickをつけている
filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        //全てのボタンの色をもとに戻す
        filterBtns.forEach(b => b.classList.remove('active'));

        //押されたボタンの色を変える
        btn.classList.add('active');

        const filter = btn.dataset.filter; // all / active / completed
        
        Array.from(taskList.children).forEach(li => {
            const checkBox = li.querySelector('input[type="checkbox"]');
            
            
            if (filter === 'all') {
                li.style.display = '';
            } else if (filter === 'active') {
                li.style.display = checkBox.checked ? 'none' : ''//未完了のときチェックされているものを非表示にする
            } else if (filter === 'completed') {
                li.style.display = checkBox.checked ? '' : 'none';
            }
        });
    });
});


// ========== 完了済みタスク一括削除 ==========
clearCompleted.addEventListener('click', function() {
    const items = taskList.children;
    
    // 後ろから削除
    for (let i = items.length - 1; i >= 0; i--) {
        const li = items[i];
        const checkbox = li.querySelector('input[type="checkbox"]');
        
        if (checkbox.checked) {
            li.remove();
        }
    }
    
    // ループの外でカウント更新
    taskCount.textContent = taskList.children.length;
});