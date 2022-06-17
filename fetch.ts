import axios from 'axios';
interface Data{
    id: number;
    title: string;
    completed: boolean;
}
const fetchData = async (url: string)=> {
    try {
        const response = await axios.get(url);
        let data=response.data as Data;
        console.log(data.completed);
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchData('https://jsonplaceholder.typicode.com/todos/1');