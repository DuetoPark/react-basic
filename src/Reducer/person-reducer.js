export default function personReducer (state, action) {
  switch (action.type) {
    case 'updated': {
      const {prev, current} = action;
      const _idx = state.mentor.findIndex(_item => _item.name === prev);

      if (_idx === -1) {
        return state;
      } else {
        const _newData = {...state};
        console.log(_idx);
        _newData.mentor[_idx].name = current;
  
        return _newData;
      }
    }
    
    case 'added': {
      const {name, desc} = action;
      return {
        ...state,
        mentor: [...state.mentor, {name, desc}],
      }
    }

    case 'deleted': {
      return {
        ...state,
        mentor: state.mentor.filter(_item => _item.name !== action.name),
      }
    }

    default: {
      throw Error(`아갓씌, 해당 타입은 없습니다 🥸 (${action.type})`);
    }
  }
};