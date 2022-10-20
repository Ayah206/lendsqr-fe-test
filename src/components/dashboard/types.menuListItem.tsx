export type listItemObject = {
    icon : React.ReactNode,
    text : string
}
export type menuObject = {
    title : String,
    details : Array<listItemObject>
}

export interface Props {
    listDetails: menuObject;
}  