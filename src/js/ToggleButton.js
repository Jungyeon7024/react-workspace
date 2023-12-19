import React, {useState} from "react";

function ToggleButton(){
    //script 공간
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    }
    return(
        <div>
            {/*만약에 버튼이 True 면 글자로 On 으로 출력되고 False면 Off로 표시 삼항연산자를 이용해서 변환  
            삼항연산자 : 어떤 값을 True면 나타날 상태, False면 나타날 상태 두가지로 나뉜다.  */}
            <p>버튼 상태 : {isOn ? 'On' : 'Off'}</p>
            <button onClick={toggle}>버튼 상태 변경하기</button>
        </div>
    )
   
}

export default ToggleButton;