import React from "react";
// import { ProjectTemplate } from "./component";
import { useState } from "react";
import { UserContext } from "../../../../userHomePage";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SERVER_ADDRESS } from "../../../../../../staticFiles/constants";
import { checkLoggedIn, getUserToken } from "../../../../../../staticFiles/functions";
import { SimpleLoadingScreen } from "../../../../../../components/LoadingScreen";
import { ProjectTemplate2 } from "../../../wardInfoPage/pages/projectPage/component";


function ProjectDiv(props) {
  const [projects, setProjects] = useState([]);
  const userCont = useContext(UserContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = userCont.user;
  console.log('rebuilding project div');

  useEffect(
    () => {
      const onLoad = async () => {
        try {
          if (user.panchayathOId) {
            setIsLoaded(false)
            const res = await axios.get(`${SERVER_ADDRESS}/user/getProjectByPanchayath/${user.panchayathOId}`, { headers: { 'u-auth-token': getUserToken() }, params: { key: '' ,wardOId:''} })
            setProjects(res.data.projects);
            setIsLoaded(true)
          }
        } catch (err) {
          console.log(err);
          const msg = checkLoggedIn(err);
          if (msg) {
            alert(msg)
          }

        }
      }
      onLoad();
    }
    , [user.panchayathOId, props.updateUi]
  )
  return (
    <>
      {
        isLoaded?
          projects.length === 0 ?
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', color: 'gray', fontWeight: '700' }}>
              No Projects
            </div> :
            <div>
              {
                projects.map(
                  (project,index) => {
                    return <ProjectTemplate2 index={index} value={project} />
                  }
                )
              }
            </div>
        :
        <SimpleLoadingScreen/>
      }
    </>
  )
}


export const ProjectSection = React.memo(ProjectDiv)