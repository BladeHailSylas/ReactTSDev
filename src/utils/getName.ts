export default function getName(rawName : string, replacable: string | null = null){
    //more logic if required
    const spliter = rawName.split('@')[0];
    if(spliter === rawName && replacable !== null) return replacable;
    return spliter;
}