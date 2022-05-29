import { useState, useContext } from "react";
import noteContext from "./NoteContext";
import alertContext from '../alerts/AlertContext';


const NoteState = (props) => {
    const context = useContext(alertContext);

    const host = "https://kontests.net/api/v1/";
    const auth_token = localStorage.getItem('authToken');

    // Contest Url
    const [Url, setUrl] = useState("all");

    let makeUrl = (val)=>{
        setUrl(val);
    }

    // Contest Name
    const [Name, setName] = useState("All");

    let makeName = (valu)=>{
        setName(valu);
    }


    // Fetch All Sites
    const [Sites, setSites] = useState([]);

    const fetchSites = async () => {
        let url = `${host}sites`;
        const response = await fetch(url);
        const json = await response.json();
        setSites(json);
    }



    // Fetch All Contests
    const [Notes, setNotes] = useState([]);

    const fetchAllContests = async (targetSite = "all") => {
        let url = `${host}${targetSite}`;
        const response = await fetch(url);
        const json = await response.json();
        setNotes(json);
    }



    // Add Note
    const addNote = async (note) => {
        let url = `${host}/api/notes/addnote`;
        let params = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'auth-token': auth_token
            },
            body: JSON.stringify(note)
        }
        const response = await fetch(url, params);
        //   eslint-disable-next-line
        const json = await response.json();
        fetchAllContests();
        context.showAlert('success','Note Added.');


        // setNotes(Notes.concat(json));

        // fetch(url,params).then(fetchAllContests());

    }

    // Delete Note
    const deleteNote = async (id) => {
        let url = `${host}/api/notes/deletenote/${id}`;
        let params = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'auth-token': auth_token
            },
        }
        const response = await fetch(url, params);
        //   eslint-disable-next-line
        const json = await response.json();
        fetchAllContests();
        context.showAlert('success','Note Deleted.');


        // let newNote = Notes.filter((note) => { return note._id !== id });
        // setNotes(newNote);
    }

    // Edit Note
    const editNote = async (id, title, description) => {
        let url = `${host}/api/notes/updatenote/${id}`;
        let params = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'auth-token': auth_token
            },
            body: JSON.stringify({title, description})
        }
        const response = await fetch(url, params);
        //   eslint-disable-next-line
        const json = await response.json();
        fetchAllContests();

        // fetch(url,params).then(fetchAllContests());
    }



    return (
        <noteContext.Provider value={{ Notes, Sites, Url, Name, makeName, makeUrl, fetchSites, addNote, deleteNote, fetchAllContests, editNote }}>
            {props.children}
        </noteContext.Provider>
    )

}

export default NoteState;