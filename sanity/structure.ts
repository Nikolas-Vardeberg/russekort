import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/structure";
import { GalleryVerticalEnd, Globe, SettingsIcon } from "lucide-react";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder, C: ConfigContext) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('article').title('Article'),
      S.documentTypeListItem("editor").title("Agenter"),
      S.documentTypeListItem("transportPage").title("Transport Page"),
      S.listItem()
        .title("Sider")
        .icon(Globe),
      S.listItem()
        .title("Generelle instillinger")
        .icon(SettingsIcon)
    ]);
   
