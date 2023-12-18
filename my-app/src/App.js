// Js 에서는 글자값, 숫자값 이 중요하지 않음 , 재사용이 가능한지, 재할당이 가능한지가 중요함

// var   : 재할당 재선언 가능, 밑에서 안된 error 예제 모두 가능하다. 
// let   : 재선언은 하지 못하지만 재할당은 가능
// const : 재할당, 재선언 불가능, 한 번 선언하면 값을 다시 변경하거나 수정할 수 없음 

const msg = "hihi ";
//msg = "aa"; msg에 다른 값을 넣고 싶어서 추가로 값 변경을 하려고 하면 error가 발생한다. 

function HiComponent(){
  return(
    <div>
      <h1>{msg}</h1>
      <p>이것은 Hi Component입니다</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1> 안녕 React</h1>
      <h2>{msg}</h2>
      <HiComponent/>
      <p> 이것은 React JS입니다.</p>
    </div>
  );
}
export default App;


//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//                 기본적으로 내보낼 항목을 지정하는 역할을 함
//                 다른 Js에서 App.js 에 있는 function App을 사용할 수 있도록 내보내기도 하지만 App.js 에서 기본으로 사용할 항목을 지정하기도 함
                
