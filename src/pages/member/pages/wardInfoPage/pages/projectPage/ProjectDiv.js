import React from "react";
import { ProjectTemplate } from "./component";


function ProjectDiv() {
    const message = {
        owner: 'Member Name',
        id: '12345',
        images: ['https://etimg.etb2bimg.com/photo/88320463.cms', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZetVUBwx78VZUyvk8z19qioYJzRNl2MbquQ&usqp=CAU'],
        title: 'This is title',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        startDate: '12-01-2000',
        endDate: '01-01-2023',
        fund: '12LK',
        rating: 5,
      }
  return (
    <div>
        <ProjectTemplate value={message} />
        <ProjectTemplate value={message} />
        <ProjectTemplate value={message} />
        <ProjectTemplate value={message} />
    </div>
  )
}


export const ProjectSection = React.memo(ProjectDiv)