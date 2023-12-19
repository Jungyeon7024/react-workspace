Component ?
    재사용이 가능한 각각의 독립적인 모듈(함수, 클래스)
    반복되는 내용을 하나의 함수로 압축시켜 함수를 불러와서 사용하는 것을 재사용


Compent 종류
    함수형 Component :  간단하게 함수로 정의할 수 있고 Hook을 많이 사용
       
        예제) NewComponent.js
        예제코드)
            import React from 'react';
            function FuncComponent(){
                return (
                    <div> hello React </div>
                ) 
            }
    클래스형 Component :  class 키워드를 사용하며, 상태(state)와 같은 메서드를 활용할 수 있음
                            라이프 사이클 메서드를 활용할 수 있음
        예제코드)
            import, {Component} from 'react' ;
            class ClassComponent extends Component {
                render()
                    return(
                        <div> hello react </div>
                    )
            }
    