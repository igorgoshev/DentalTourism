import React, { Component } from "react";
// import BeforeAfterSlider from "react-before-after-slider";
// import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import ReactCompareImage from "react-compare-image";
import "../CSS/HomePageCss.css";

class BeforeAfter extends Component {
    static getDerivedStateFromError(error) {
        console.log("123123");
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("123123");
    }

    render() {
        const before =
            "https://www.i-smile-dental.com.au/wp-content/uploads/2022/08/teeth.jpg";
        const after =
            "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HAYXA5G5F6XMMVOAKZVYKHZ6TQ.jpg";

        return (
            <div className="d-inline-block px-2 m-0" style={{width: "500px", height:"500px"}}>
                    <ReactCompareImage leftImage={before} rightImage={after} />
            </div>
        );
    }
}

export default BeforeAfter;