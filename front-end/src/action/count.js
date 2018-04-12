import axios from 'axios'
export const getListAction = (data)=>{
    return (dispatch) =>{
        axios.get('http://127.0.0.1:3000/json')
        .then(json => {
            console.log(json)
            dispatch({
                type:'indexList',
                data:json.data
            })
        })
    }
}