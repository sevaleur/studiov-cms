import { BsFillDatabaseFill, BsBuildingsFill } from "react-icons/bs"
import { FaInfo } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai"
import { BiSolidNavigation } from 'react-icons/bi'
import { TfiMenu } from "react-icons/tfi"
import { GrProjects } from "react-icons/gr";

export const structure = (S) => 
  S.list()
    .title("Studio V Architecture")
    .items([
      S.listItem(
        { 
          icon: BsFillDatabaseFill 
        }
      )
      .title('Metadata')
      .child(
        S.document()
          .schemaType('metadata')
          .documentId('metadata')
      ),
      S.listItem(
        { 
          icon: BiSolidNavigation 
        }
      )
      .title('Navigation')
      .child(
        S.document()
        .schemaType('navigation')
        .documentId('navigation')
      ),
      S.listItem(
        { 
          icon: AiFillHome 
        }
      )
      .title('Home')
      .child(
        S.document()
        .schemaType('home')
        .documentId('home')
      ),
      S.listItem(
        {
          icon: BsBuildingsFill
        }
      )
      .title("Selected Work")
      .child(
        S.documentList()
          .title('Selected Work')
          .filter('_type == "selected"')
      ),
      S.listItem(
        { 
          icon: GrProjects
        }
      )
      .title('Projects')
        .child(
          S.list()
          .title('Projects')
          .items([
            S.listItem(
              {
                icon: TfiMenu
              }
            )
            .title('Menu')
            .child(
              S.document()
                .schemaType('work')
                .documentId('work')
            ),
            S.listItem(
              {
                icon: BsBuildingsFill
              }
            )
            .title("Project")
            .child(
              S.documentList()
                .title('Project')
                .filter('_type == "project"')
            )
          ]
        )
      ),
      S.listItem(
        { 
          icon: FaInfo
        }
      )
      .title('Info')
      .child(
        S.document()
        .schemaType('info')
        .documentId('info')
      ),
  ])