const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById('taskCount');
const clearCompleted = document.getElementById("clearCompleted");

addBtn.addEventListener("click", function () {    
    const taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("入力されていません");
        return;
    }

    // ========== 1. 要素作成 ==========
    const li = document.createElement("li");
    
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    
    const span = document.createElement("span");
    span.textContent = taskText;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";

    // ========== 2. イベント設定 ==========
    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            span.classList.add("completed");
        } else {
            span.classList.remove("completed");
        }
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
        taskCount.textContent = taskList.children.length;
    });

    clearCompleted.addEventListener('click', function() {
        const items = taskList.children;
        for (let i = 0; i < items.length; i++){
            const li = items[i];
            if (checkBox.checked === true){
                li.remove();
                taskCount.textContent = taskList.children.length;
            }
        }
    });

    // ========== 3. DOM追加 ==========
    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);

    // ========== 4. 後処理 ==========
    taskCount.textContent = taskList.children.length;
    taskInput.value = "";
});