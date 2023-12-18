import React, {useState} from "react";

function ToggleButton( ){


    const[isOn, setIsOn]    = useState(true);
    const toggle = () =>{
        setIsOn(!isOn);
    }


return(

    <div>
        <p>버튼 상태 : {isOn ? 'on':'off'  }</p>
        <button onClick={toggle}>상태 변경하기</button>
    </div>
)



}

export default ToggleButton;