import  teeth from "../teeth/ImplaStation-DEMO-STL.stl"
import {StlViewer} from "react-stl-viewer";
function Teeth() {
    const style = {
        top: 0,
        left: 0,
        width: '48vw',
        height: '48vh',
    }
    return (
        <>
            <StlViewer
                style={style}
                orbitControls
                shadows
                url={teeth}
            />
        </>
    )
}

export default Teeth