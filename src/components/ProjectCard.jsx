import { Col } from "react-bootstrap"

export const ProjectCard = ({title,imgUrl,description,href}) =>{
    return(
        <>
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
               <span>{description}</span>   
               <div className="preview-div">
                <a href={href}>

                <i class="fa-regular fa-eye"></i>
                </a>
                </div>
            </div>
        </div>

        </Col>
        </>
    )
}