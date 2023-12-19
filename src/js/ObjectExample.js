import React, {useState} from "react";

function ObjectExample(){

    const [person, setPerson] = useState ({name: 'kh', age: 20});
    // '' 을 사용한 상태로 사용하면 문자로 인식을해서 +1 을 했을 경우 20111111과 같은 형태로 추가되지만 ''을 지운상태면 숫자로 인식해서 숫자값이 더해진다
    const updateAge = ()=> {
        // ...person : 현재 person 객체를 속성을 펼쳐서 새로운 객체로 만들어주는 역할 객체 속성들은 그대로 복사가 되어서 만들어짐
        // ...person, age 복사된 객체에서 값이 변화하거나 추가해야할 내용이 있으면 , 뒤에 값과 속성을 추가한다. 
        // age : person.age +1 age 속성에 person.age +1 한 값으로 age 값을 저장하겠다는 의미 
        setPerson({...person, age: person.age +1});
    }
    return(
        <div>
            <p>Name : {person.name}</p>
            <p>Age : {person.age}</p>
            <button onClick={updateAge}>나이올리기 버튼</button>
        </div>

    )



}


export default ObjectExample;