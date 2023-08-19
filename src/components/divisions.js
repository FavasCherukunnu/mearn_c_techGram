import React, { useContext, useEffect } from "react";
import { MyContext } from "../pages/user/userHomePage";
import './divisions.css'

export function UnderNavigationOuterDiv(props) {

    const style = { "height": props.height ? props.height : "calc(100% - 50px)", "width": "100%", "overflow": "hidden" }

    return (
        <div style={style} className="UnderNavigationOuterDiv_mainouter">
            <div style={{ "width": "100%", "height": "100%", "position": "relative", "overflow": "hidden",backgroundColor:props.isNotStyleChangable?'#ffffff':''}} >
                {props.children}
            </div>
        </div>);
}

export function UnderNavigationOuterDivScrollable(props) {
    return <UnderNavigationOuterDiv>

        <div style={{ maxHeight: '100%', width: '100%', overflowY: 'auto' }}>
            {props.children}
        </div>
    </UnderNavigationOuterDiv>

}


export function DivScrollableWithGeasture(props) {
    //width
    //id
    //height
    //isNotStyleChangable
    const callback = useContext(MyContext);
    const id = props.id ? props.id : 'sample123'
    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;
        let obj = document.getElementById(id);
        let startPoint = 0;
        let pullChange = 0;
        let pullUp=0;
        let isSmallScreen = false;

        const pullStart = (e) => {
            const { screenY } = e.targetTouches[0];
            startPoint = screenY;
        };
        const pull = (e) => {
            const touch = e.targetTouches[0];

            const { screenY } = touch;

            let pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0;
            let pullLength2 = startPoint > screenY ? Math.abs(screenY - startPoint) : 0;
            pullChange = pullLength;
            pullUp = pullLength2;


            if (isSmallScreen === true && pullChange > 40) {
                callback(false)
            }
            if (isSmallScreen === true && pullUp > 40) {
                callback(true)
            }

        }
        const pullEnd = (e) => {
            startPoint = 0;
            pullChange = 0;
            pullUp =0;
        }

        const scrollEvent = (e) => {
            // Get the new Value
            let currentFloat = obj.scrollTop;
            currentScrollPosition = Math.round(currentFloat);
            console.log('clossing');
            // console.log(currentFloat);
            //Subtract the two and conclude
            if (isSmallScreen === true && currentScrollPosition > previousScrollPosition) {
                callback(true);
            } else if (isSmallScreen === true && (currentScrollPosition + 50) < previousScrollPosition) {
                callback(false);
            }

            // Update the previous value
            if (previousScrollPosition !== currentScrollPosition) {
                previousScrollPosition = currentScrollPosition;
            }
        }

        const resizeListener = () => {
            if (window.innerWidth < 800) {
                isSmallScreen = true;
            } else {
                isSmallScreen = false;
                callback(false)
            }
        }

        window.addEventListener('resize', resizeListener)
        // obj.addEventListener('scroll', scrollEvent);
        obj.addEventListener("touchstart", pullStart);
        obj.addEventListener("touchmove", pull);
        obj.addEventListener("touchend", pullEnd);
        resizeListener()

        return () => {
            // obj.removeEventListener('scroll', scrollEvent);
            obj.removeEventListener("touchstart", pullStart);
            obj.removeEventListener("touchmove", pull);
            obj.removeEventListener("touchend", pullEnd);
            window.removeEventListener('resize', resizeListener)

        };
    }, []);

    return (
        <div style={{ "height": props.height ? props.height : "100%", "width": props.width ? props.width : "100%", "overflow": "hidden" }}>
            <div className="DivScrollableWithGeasture_innerDiv" style={props.isNotStyleChangable ? { "width": "100%", "height": "100%", "background": "#FFFFFF", "border": "1px solid rgba(0, 0, 0, 0.3)", "boxShadow": "inset 0px 0px 14px -3px rgba(0, 0, 0, 0.24)", "borderRadius": "12px", "overflow": "hidden" } : {}}>
                <div id={id} style={{height: '100%', overflowY: 'auto' ,}} className="DivScrollableWithGeasture_InnerInnerDiv" >
                    {props.children}
                </div>
            </div>
        </div>);

}

export function DivScrollableWithGeastureP0(props) {
    //width
    //id
    //height
    //isNotStyleChangable
    const callback = useContext(MyContext);
    const id = props.id ? props.id : 'sample123'
    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;
        let obj = document.getElementById(id);
        let startPoint = 0;
        let pullChange = 0;
        let pullUp=0;
        let isSmallScreen = false;

        const pullStart = (e) => {
            const { screenY } = e.targetTouches[0];
            startPoint = screenY;
        };
        const pull = (e) => {
            const touch = e.targetTouches[0];

            const { screenY } = touch;

            let pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0;
            let pullLength2 = startPoint > screenY ? Math.abs(screenY - startPoint) : 0;
            pullChange = pullLength;
            pullUp = pullLength2;


            if (isSmallScreen === true && pullChange > 40) {
                callback(false)
            }
            if (isSmallScreen === true && pullUp > 40) {
                callback(true)
            }

        }
        const pullEnd = (e) => {
            startPoint = 0;
            pullChange = 0;
            pullUp =0;
        }

        const scrollEvent = (e) => {
            // Get the new Value
            let currentFloat = obj.scrollTop;
            currentScrollPosition = Math.round(currentFloat);
            console.log('clossing');
            // console.log(currentFloat);
            //Subtract the two and conclude
            if (isSmallScreen === true && currentScrollPosition > previousScrollPosition) {
                callback(true);
            } else if (isSmallScreen === true && (currentScrollPosition + 50) < previousScrollPosition) {
                callback(false);
            }

            // Update the previous value
            if (previousScrollPosition !== currentScrollPosition) {
                previousScrollPosition = currentScrollPosition;
            }
        }

        const resizeListener = () => {
            if (window.innerWidth < 800) {
                isSmallScreen = true;
            } else {
                isSmallScreen = false;
                callback(false)
            }
        }

        window.addEventListener('resize', resizeListener)
        // obj.addEventListener('scroll', scrollEvent);
        obj.addEventListener("touchstart", pullStart);
        obj.addEventListener("touchmove", pull);
        obj.addEventListener("touchend", pullEnd);
        resizeListener()

        return () => {
            // obj.removeEventListener('scroll', scrollEvent);
            obj.removeEventListener("touchstart", pullStart);
            obj.removeEventListener("touchmove", pull);
            obj.removeEventListener("touchend", pullEnd);
            window.removeEventListener('resize', resizeListener)

        };
    }, []);

    return (
        <div style={{ "height": props.height ? props.height : "100%", "width": props.width ? props.width : "100%", "overflow": "hidden" }}>
            <div className="DivScrollableWithGeasture_innerDiv" style={props.isNotStyleChangable ? { "width": "100%", "height": "100%", "background": "#FFFFFF", "border": "1px solid rgba(0, 0, 0, 0.3)", "boxShadow": "inset 0px 0px 14px -3px rgba(0, 0, 0, 0.24)", "borderRadius": "12px", "overflow": "hidden" } : {}}>
                <div id={id} style={{height: '100%', overflowY: 'auto' ,}} className="DivScrollableWithGeasture_InnerInnerDivPt0" >
                    {props.children}
                </div>
            </div>
        </div>);

}

export function SwipeGeastureDiv(props) {
    const callback = useContext(MyContext);
    const id = props.id ? props.id : 'swipeGeastureDiv'

    useEffect(() => {
        let startPoint = 0;
        let pullDown = 0;
        let pullUp=0;
        let isSmallScreen = false;
        let obj = document.getElementById(id);

        const pullStart = (e) => {
            const { screenY } = e.targetTouches[0];
            startPoint = screenY;
        };
        const pull = (e) => {
            const touch = e.targetTouches[0];

            const { screenY } = touch;

            let pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0;
            let pullLength2 = startPoint > screenY ? Math.abs(screenY - startPoint) : 0;
            pullDown = pullLength;
            pullUp = pullLength2;


            if (isSmallScreen === true && pullDown > 20) {
                callback(false)
            }

            if (isSmallScreen === true && pullUp > 20) {
                callback(true)
            }

        }
        const pullEnd = (e) => {
            startPoint = 0;
            pullDown = 0;
            pullUp =0;
        }
        const resizeListener = () => {
            if (window.innerWidth < 800) {
                isSmallScreen = true;
            } else {
                isSmallScreen = false;
                callback(false)
            }
        }

        window.addEventListener('resize', resizeListener)

        obj.addEventListener("touchstart", pullStart);

        obj.addEventListener("touchmove", pull);

        obj.addEventListener("touchend", pullEnd);

        resizeListener()

        return () => {
            obj.removeEventListener("touchstart", pullStart);
            obj.removeEventListener("touchmove", pull);
            obj.removeEventListener("touchend", pullEnd);
            window.removeEventListener('resize', resizeListener)

        };


    }, [])

    return <div id={id}>{props.children}</div>
}

// export const DivScrollableWithGeasture = React.memo(DivScrollableWithGeasture1);
