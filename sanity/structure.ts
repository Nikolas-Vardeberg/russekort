import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/structure";
import article from "./schemaTypes/pages/article";
import { SettingsIcon } from "lucide-react";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder, C: ConfigContext) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('article').title('Article'),
      S.documentTypeListItem("editor").title("Agenter"),
      S.documentTypeListItem("transportPage").title("Transport Page"),
      S.documentTypeListItem("tags").title("Tags"),
      
      S.listItem()
        .title("Generelle instillinger")
        .icon(SettingsIcon)
    ]);
   
