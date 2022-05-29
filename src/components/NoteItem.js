import React, { useContext } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import noteContext from '../context/notes/NoteContext';


export default function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    let startTime = new Date(props.note.start_time).toLocaleString();
    let endTime = new Date(props.note.end_time).toLocaleString();

    return (
        <>
            <div className="col-md-3 my-3">
                <Card style={{ height: '16rem'}}>
                    <Card.Body>
                        <Badge bg="secondary" style={{ position: 'absolute' , top: '0.2rem', right: '0.2rem'}}>{props.note.site}</Badge>
                        <Card.Title className="my-2">{props.note.name.length<=40?props.note.name:props.note.name.slice(0,40)+"..."}</Card.Title>
                        <Card.Text>
                            <b>Start: </b><p style={{color:"#6C757D"}}>{startTime}</p>
                            <b>End: </b><p style={{color:"#6C757D"}}>{endTime}</p>
                        </Card.Text>
                        <Button href={props.note.url} target="_blank" variant="primary" style={{ position: 'absolute' , bottom: '1rem', right: '5rem'}}>Register</Button>
                        <Button variant="outline-success" style={{ position: 'absolute' , bottom: '1rem', right: '1rem'}}>Save</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
