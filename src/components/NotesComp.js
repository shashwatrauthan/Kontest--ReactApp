import React, { useContext, useEffect } from 'react';
import NoteItem from './NoteItem'
import noteContext from '../context/notes/NoteContext';
// import alertContext from '../context/alerts/AlertContext';
// import { useNavigate } from 'react-router-dom';




export default function NotesComp() {
    // const navigate = useNavigate();
    // const alert_context = useContext(alertContext);

    const { Name, Notes, fetchAllContests } = useContext(noteContext);


    // useEffect(() => {
    //     if(localStorage.getItem("authToken")!==null)
    //     {
    //         fetchAllNotes();
    //     }
    //     else
    //     {
    //         alert_context.showAlert('warning','Please login first.');
    //         navigate('/login');
    //     }
    //     //   eslint-disable-next-line
    // }, []);


    // Fetch All Contests
    useEffect(() => {
        fetchAllContests();
      },[])
    //   eslint-disable-next-line




    return (
        <>

            <div className="container my-3 d-flex justify-content-center">
                <div className='container row'>
                    <hr />
                    <h2>{Name} Contests</h2>
                    <div className="container d-flex justify-content-center">
                        {Notes.length===0 && "No contests to display."}
                    </div>
                    {Notes.map((note) => {
                        return <NoteItem note={note} key={note.url+note.name} handleShow={null} />
                    })}


                </div>
            </div>
        </>
    )
}
