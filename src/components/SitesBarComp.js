import {React, useContext, useEffect} from 'react'
import SiteItemComp from './SiteItemComp'
import noteContext from '../context/notes/NoteContext';


export default function SitesBarComp() {


    const { Sites, fetchSites } = useContext(noteContext);


    useEffect(() => {
        fetchSites();
      },[])
    //   eslint-disable-next-line


  return (
      <>
      <div className="my-1 d-flex justify-content-center">
                <SiteItemComp site="All" data="all" key="all" handleShow={null} />
                {Sites.map((site) => {
                        return <SiteItemComp site={site[0]} data={site[1]} key={site[2]} handleShow={null} />
                    })}
      </div>
      </>
  )
}
