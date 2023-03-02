//reducer 는 행동지침이다

//리듀서는 2개의 argument를 받는다
//(하나는 state상태 값) useState가 했던 일을 대신 해주어야 하기 때문
// >> state의 기본 상태는 initialState로 설정 해준다 useState(여기 값과 동일)
let initialState = {
  contactList: [],
};
//나머지는 action 값 이다 값을 변환해줘햐 하기 때문
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
  }
  return { ...state };
}

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "ADD_CONTACT":
//       return {
//         ...state,
//         contactList: [
//           ...state.contactList,
//           {
//             name: action.payload.name,
//             phoneNumber: action.payload.phoneNumber,
//           },
//         ],
//       };
//   }
// }

export default reducer;
