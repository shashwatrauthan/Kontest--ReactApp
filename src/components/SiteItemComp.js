import {React, useContext} from 'react'
import { Button } from 'react-bootstrap';
import noteContext from '../context/notes/NoteContext';


export default function SiteItemComp(props) {
    const { Url, makeName, makeUrl, fetchAllContests } = useContext(noteContext);

    let handleUrl = async (data, name)=>{
        await makeUrl(data);
        await makeName(name);

        await fetchAllContests(data);
    }

  return (
    <Button active={Url===props.data} className='mx-1' variant="outline-dark" onClick={()=>{handleUrl(props.data, props.site)}}>{props.site}</Button>
  )
}
