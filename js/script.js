// to do list 특징


// 유저가 값을 입력한다
// + 버튼을 클릭하면, 할일이 추가된다

// delete버튼을 누르면 할일이 삭제된다
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다

// 1.check버튼을 클릭하면 isComplete가 true로 바뀐다.
// 2.true이면 끝난걸로 간주하고 밑줄 보여주기
// 3.false면 안끝난걸로 간주하고 그대로

// 진행중 끝남 탭을 누르면, 언더바가 이동한다

// 끝남 탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만 나온다.
// 전체 탭을 누르면 다시 전체아이템으로 돌아옴


let taskInput = document.getElementById("task_input");
console.log(taskInput);

let addButton = document.getElementById("add_button");

let taskList = []


addButton.addEventListener("click",addTask);
addButton.addEventListener("click",render)
function addTask(){
  console.log("clicked");
  // 중간중간 console.log()로 확인안하고 코딩하면 나중에 어디서 에러나는지 모름
  let taskContent = taskInput.value
  // taskContent라는 변수를 만들고 그안에 taskInput창의 value값을 집어넣는다

  let task = {
    id:randomIdGenerate(),
    taskContent:taskInput.value,
    
    isComplete:false
    // 아직 완료되지않았으니 false 기본값으로 넣어준다
  }
  // task를 객체로 만든다
  taskList.push(task)
  // 그리고 taskList에 taskContent를 집어넣는다
  console.log(taskList)
  // 이제 화면 리스트에 그리기만 하면됨

}

function render(){
  // 배열에 들어간걸 화면에 출력하는 함수
  let resultHTML = ''
  for(let i=0;i<taskList.length;i++){
    if(taskList[i].isComplete == true){
      resultHTML +=`<div class="task">
          <div class="task-done">${taskList[i].taskContent}</div>
          <div>
            <button onclick="toggleComplete('${taskList[i].id}')">check</button>
            
            <button onclick="deleteTask()">delete</button>
          </div>
          </div>`
    }else{
      resultHTML += `        <div class="task">
          <div>${taskList[i].taskContent}</div>
          <div>
            <button onclick="toggleComplete('${taskList[i].id}')">check</button>
            
            <button onclick="deleteTask()">delete</button>
          </div>
        </div>`;
        // 체크버튼이 생성되면 바로 클릭이벤트를 실행한다. 클릭하면 함수가 실행된다.
        // 토글 컴플릿이 실행될때마다 tasklist의 id값을 넣어준다.
        // 백틱안에 추가할 html 모든태그들 그대로 넣기
    }
    
  }

  document.getElementById("task_board").innerHTML = resultHTML
  // innerHTML :element의 HTML,XML을 읽어오거나, 설정 태그안에있는 HTML 전체내용을 들고온다.
}

function toggleComplete(id){
  
  for(let i=0;i<taskList.length;i++){
    if(taskList[i].id == id){
    // 만약 taskList의 i번째 값의 id가 내가 매개변수로받은 id와 같다면,
    taskList[i].isComplete = !taskList[i].isComplete;
    // taskList의 i번쨰 값의 iscomplete를 true로 바꾸고
    //!를 붙이면 왼쪽이 true라면 false로 바뀌고 false라면 true로 바뀐다
    // 그래서 왔다갔다 할수있게 됨
    // 스위치처럼 켰다껐다 할떄는 !사용하면 된다, 나중에 응용하기
    break;
    // 종료한다
    }
  }
  console.log(taskList);
  render();
}

function deleteTask(id){
  console.log("삭제하자");
  for(let i = 0; i<taskList.length;i++){
    if(taskList[i].id ==id){
      
    }
  }
}


// 정보에는 ID가 필요하다
function randomIdGenerate(){
  return '_' + Math.random().toString(36).slice(2,9);
}