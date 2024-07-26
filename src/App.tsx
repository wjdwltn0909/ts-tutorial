import React from 'react';
import logo from './logo.svg';
import './App.css';

let number: number = 4
number = 3.14
number = -50

//number = "abc"

let message: string="abc"
message = "스트링!"
message = "치즈!"

//message = false

let numberArray: number[] = []
numberArray.push(5)
numberArray.push(3.14)
//numberArray.push('으아아아')

// 주어진 4개 중 하나만 가질 수 있다.
let lunch: "치킨"|"햄버거"|"국밥"|"삼각김밥"
lunch = "치킨"
lunch = "국밥"
//lunch = "스테이크" => 런치에는 치킨, 피자, 햄버거, 국밥, 삼각김밥 중 하나만 들어갈 수 있다.

// undefined, null도 저장 가능한 값으로 처리 가능
let status: 'STATUS.OK' | undefined | null
status = undefined

let obj: any
obj = 3
obj ="dmokdkdkd"
obj = {id:4,  name: '정지수'}

// 함수의 경우, 파라미터의 타입과 함수의 리턴타입을 지정할 수 있다.
function add(a: number, b: number): number {
    return a + b;
}

type student = {
    id: number,
    name: string
}

// 2개의 객체를 합쳐서 하나의 객체로 만들어주는 concat 메소드
function concat<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b
    }
}

type IndexProps = {
    id: number,
    nickname: string,
}

let App = ({nickname, id} : IndexProps) => {
    return(
        <div className="App">
            <h1>{id}번 회원 {nickname}님 Hello, World!!!</h1>
        </div>
    )
}


export default App;
