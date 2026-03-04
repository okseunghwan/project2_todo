// to do list 특징


// 유저가 값을 입력한다
// + 버튼을 클릭하면, 할일이 추가된다

// delete버튼을 누르면 할일이 삭제된다
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다
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
  taskList.push(taskContent)
  // 그리고 taskList에 taskContent를 집어넣는다
  console.log(taskList)
  // 이제 화면 리스트에 그리기만 하면됨

}

function render(){
  // 배열에 들어간걸 화면에 출력하는 함수
  let resultHTML = ''
  for(let i=0;i<taskList.length;i++){
    resultHTML += `        <div class="task">
          <div>${taskList[i]}</div>
          <div>
            <button>check</button>
            <button>delete</button>
          </div>
        </div>`;

        // 백틱안에 추가할 html 모든태그들 그대로 넣기
  }

  document.getElementById("task_board").innerHTML = resultHTML
  // innerHTML :element의 HTML,XML을 읽어오거나, 설정 태그안에있는 HTML 전체내용을 들고온다.
}